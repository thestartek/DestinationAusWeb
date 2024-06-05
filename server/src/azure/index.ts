import path from "path";
import { BlobServiceClient } from "@azure/storage-blob";
import { Request, Response } from "express";

export async function uploadHandler(req: Request, res: Response) {
  const { imageUrl, title, description } = req.body;
  const file = req.file?.path;
  console.log("Data Received: ", imageUrl, title, description);
  try {
    const url = await uploadToAzureStorage(file as string);
    console.log("uploaded url: ", url);
    res.status(200).json({ imageUrl: url });
  } catch (error) {
    console.log(error);
  }
}

async function uploadToAzureStorage(file: string) {
  const connectionString = process.env
    .AZURE_STORAGE_CONNECTION_STRING as string;
  console.log("Connection String: ", connectionString);
  const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME as string;
  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);

  const blobName = path.basename(file);

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  // Upload image to Azure Storage
  const response = await blockBlobClient.uploadFile(file);
  const imageUrl = response._response.request.url;

  console.log("Image uploaded successfully: ", blobName, imageUrl);
  return imageUrl;
}
