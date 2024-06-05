import { FormModalUiHandler } from "./form-modal-ui-handler";
import { ModalConfig } from "./modal-ui-handler";
import * as Utils from "../utils";
import { Mode } from "./ui";
import i18next from "../plugins/i18n";
import BattleScene from "#app/battle-scene.js";
import { addTextObject, TextStyle } from "./text";
import { addWindow } from "./ui-theme";

export default class LoginFormUiHandler extends FormModalUiHandler {
  private googleImage: Phaser.GameObjects.Image;
  private discordImage: Phaser.GameObjects.Image;
  private externalPartyContainer: Phaser.GameObjects.Container;
  private externalPartyBg: Phaser.GameObjects.NineSlice;
  private externalPartyTitle: Phaser.GameObjects.Text;
  constructor(scene: BattleScene, mode?: Mode) {
    super(scene, mode);
  }

  setup(): void {

    super.setup();
    this.externalPartyContainer = this.scene.add.container(0, 0);
    this.externalPartyContainer.setInteractive(new Phaser.Geom.Rectangle(0, 0, this.scene.game.canvas.width / 12, this.scene.game.canvas.height / 12), Phaser.Geom.Rectangle.Contains);
    this.externalPartyTitle = addTextObject(this.scene, 0, 4, "Login with", TextStyle.SETTINGS_LABEL);
    this.externalPartyTitle.setOrigin(0.5, 0);
    this.externalPartyBg = addWindow(this.scene, 0, 0, 0, 0);
    this.externalPartyContainer.add(this.externalPartyBg);
    this.externalPartyContainer.add(this.externalPartyTitle);

    const googleImage = this.scene.add.image(0, 0, "google");
    googleImage.setOrigin(0, 0);
    googleImage.setScale(0.07);
    googleImage.setInteractive();
    googleImage.setName("google-icon");
    googleImage.on("pointerdown", () => {
      const redirectUri = encodeURIComponent(`${Utils.serverUrl}/auth/google/callback`);
      const googleId = import.meta.env.GOOGLE_CLIENT_ID;
      const googleUrl = `https://accounts.google.com/o/oauth2/auth?client_id=${googleId}&redirect_uri=${redirectUri}&response_type=code&scope=openid`;
      window.open(googleUrl, "_self");
    });
    this.googleImage = googleImage;

    const discordImage = this.scene.add.image(20, 0, "discord");
    discordImage.setOrigin(0, 0);
    discordImage.setScale(0.07);
    discordImage.setInteractive();
    discordImage.setName("discord-icon");
    discordImage.on("pointerdown", () => {
      const redirectUri = encodeURIComponent(`${Utils.serverUrl}/auth/discord/callback`);
      const discordId = import.meta.env.DISCORD_CLIENT_ID;
      const discordUrl = `https://discord.com/api/oauth2/authorize?client_id=${discordId}&redirect_uri=${redirectUri}&response_type=code&scope=identify`;
      window.open(discordUrl, "_self");
    });
    this.discordImage = discordImage;

    this.externalPartyContainer.add(this.googleImage);
    this.externalPartyContainer.add(this.discordImage);
    this.externalPartyContainer.setVisible(false);
    this.getUi().add(this.externalPartyContainer);
    this.externalPartyContainer.add(this.googleImage);
    this.externalPartyContainer.add(this.discordImage);
  }

  getModalTitle(config?: ModalConfig): string {
    return i18next.t("menu:login");
  }

  getFields(config?: ModalConfig): string[] {
    return [ i18next.t("menu:username"), i18next.t("menu:password") ];
  }

  getWidth(config?: ModalConfig): number {
    return 160;
  }

  getMargin(config?: ModalConfig): [number, number, number, number] {
    return [ 0, 0, 48, 0 ];
  }

  getButtonLabels(config?: ModalConfig): string[] {
    return [ i18next.t("menu:login"), i18next.t("menu:register")];
  }

  getReadableErrorMessage(error: string): string {
    const colonIndex = error?.indexOf(":");
    if (colonIndex > 0) {
      error = error.slice(0, colonIndex);
    }
    switch (error) {
    case "invalid username":
      return i18next.t("menu:invalidLoginUsername");
    case "invalid password":
      return i18next.t("menu:invalidLoginPassword");
    case "account doesn't exist":
      return i18next.t("menu:accountNonExistent");
    case "password doesn't match":
      return i18next.t("menu:unmatchingPassword");
    }

    return super.getReadableErrorMessage(error);
  }

  show(args: any[]): boolean {
    if (super.show(args)) {

      this.externalPartyTitle.setText("Or use");
      this.externalPartyTitle.setX(25);
      this.externalPartyTitle.setVisible(true);
      this.externalPartyContainer.setPositionRelative(this.modalContainer, 175, -24);
      this.externalPartyContainer.setVisible(true);
      this.externalPartyBg.setSize(50, this.modalBg.height);
      this.getUi().moveTo(this.externalPartyContainer, this.getUi().length - 1);
      this.googleImage.setPosition(this.externalPartyBg.width/3.1,this.externalPartyBg.height-60);
      this.discordImage.setPosition(this.externalPartyBg.width/3.1, this.externalPartyBg.height-40);
      const config = args[0] as ModalConfig;
      const originalLoginAction = this.submitAction;
      this.submitAction = (_) => {
        // Prevent overlapping overrides on action modification
        this.submitAction = originalLoginAction;
        this.sanitizeInputs();
        this.scene.ui.setMode(Mode.LOADING, { buttonActions: [] });
        const onFail = error => {
          this.scene.ui.setMode(Mode.LOGIN_FORM, Object.assign(config, { errorMessage: error?.trim() }));
          this.scene.ui.playError();
        };
        if (!this.inputs[0].text) {
          return onFail(i18next.t("menu:emptyUsername"));
        }
        Utils.apiPost("account/login", `username=${encodeURIComponent(this.inputs[0].text)}&password=${encodeURIComponent(this.inputs[1].text)}`, "application/x-www-form-urlencoded")
          .then(response => {
            if (!response.ok) {
              return response.text();
            }
            return response.json();
          })
          .then(response => {
            if (response.hasOwnProperty("token")) {
              Utils.setCookie(Utils.sessionIdKey, response.token);
              originalLoginAction();
            } else {
              onFail(response);
            }
          });
      };

      return true;
    }

    return false;
  }
}
