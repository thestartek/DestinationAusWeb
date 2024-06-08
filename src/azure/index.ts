import path from "path";
import { BlobServiceClient } from "@azure/storage-blob";
import { Request, Response } from "express";

const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING as string;
const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME as string;

const blobServiceClient =
  BlobServiceClient.fromConnectionString(connectionString);
const containerClient = blobServiceClient.getContainerClient(containerName);

export async function uploadHandler(req: Request, res: Response) {
  const file = req.file?.path;
  if (!file) return res.status(400).send("No file uploaded");
  try {
    const url = await uploadToAzureStorage(file as string);
    console.log("uploaded url: ", url);
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function uploadToAzureStorage(file: string) {
  const blobName = path.basename(file);

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  const response = await blockBlobClient.uploadFile(file);

  const imageUrl = response._response.request.url;

  console.log("Image uploaded successfully: ", blobName, imageUrl);
  return imageUrl;
}

export async function deleteImageFromAzureStorage(fileName: string) {
  const blockBlobClient = containerClient.getBlockBlobClient(fileName);

  await blockBlobClient.delete();
  console.log("Image deleted successfully: ", fileName);
}
