import mongoose from "mongoose";

let isConnected = false;

export const connectToDB = async () => {
  mongoose.set("strictQuery", true);

  if (isConnected) {
    console.log("Already connected to the database");
    return;
  }
  try {
    await mongoose.connect(process.env.MONGODB_URI as string, {
      dbName: "DestinationAustralia",
    });

    isConnected = true;
    console.log("Connected to database");
  } catch (error) {
    console.log(error);
  }
};
