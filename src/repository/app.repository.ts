import { AppModel } from "../model";

export class AppRepository {
  async healthCheck() {
    try {
      return "Health check ok";
    } catch (error) {
      console.log(error);
      throw new Error("ERROR_SAVING_APP_TO_DATABASE");
    }
  }
}
