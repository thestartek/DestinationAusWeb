import mongoose from "mongoose";

let cachedConnection: mongoose.Connection | null = null;

export const connectToDB = async () => {
  try {
    if (cachedConnection) {
      console.log("Successfully connected to MongoDB cached connection.");
      return cachedConnection;
    }

    const connection = await mongoose.connect(
      process.env.MONGODB_URI as string,
      {
        dbName: "StartekAustralia",
      }
    );

    cachedConnection = connection.connection;

    console.log("Successfully connected to MongoDB.");

    return connection;
  } catch (error) {
    console.error("Failed to connect to MongoDB: ", error);
    throw error;
  }
};
