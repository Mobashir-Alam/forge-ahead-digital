import { Client, Account, Databases, Storage } from "appwrite";

const client = new Client();

client
  .setEndpoint("https://fra.cloud.appwrite.io/v1")
  .setProject("69ae1af9000b56f0f307");

export const account = new Account(client);
export const databases = new Databases(client);
export const storage = new Storage(client);