import mongoose from "mongoose";
import "dotenv/config";
export async function initDatabase() {
  try {
    const productionEnv = process.env.NODE_ENV === "production";
    const testEnv = process.env.NODE_ENV === "TEST";

    const dbConnection = process.env.DB_CONNECTION;
    const dbCollection = productionEnv
      ? process.env.DB_COLLECTION_PRODUCTION
      : testEnv
        ? process.env.DB_COLLECTION_TEST
        : process.env.DB_COLLECTION;
    const dbCluster = `appName=${process.env.DB_CLUSTER}`;
    const dbConfiguration = "retryWrites=true&w=majority";
    const connection = `${dbConnection}/${dbCollection}?${dbConfiguration}&${dbCluster}`;
    //"mongodb+srv://<<user>>:<<password>@cluster0.<<database>>.mongodb.net/<<collection>>?retryWrites=true&w=majority&appName=<<cluster>>",

    await mongoose.connect(connection);
    console.log("Connected to database");
  } catch (error) {
    console.log("Unable to connect to database. Error:", error);
    throw new Error("Unable to connect to database");
  }
}
