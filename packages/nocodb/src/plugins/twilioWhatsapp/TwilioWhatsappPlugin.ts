import {IWebhookNotificationAdapter, XcWebhookNotificationPlugin} from "nc-plugin";

import TwilioWhatsapp from "./TwilioWhatsapp";


class TwilioWhatsappPlugin extends XcWebhookNotificationPlugin {

  private static notificationAdapter: TwilioWhatsapp;

  public  getAdapter(): IWebhookNotificationAdapter {
    return TwilioWhatsappPlugin.notificationAdapter;
  }

  public async init(config: any): Promise<any> {
    TwilioWhatsappPlugin.notificationAdapter = new TwilioWhatsapp(config);
    await TwilioWhatsappPlugin.notificationAdapter.init();
  }

}

export default TwilioWhatsappPlugin;
