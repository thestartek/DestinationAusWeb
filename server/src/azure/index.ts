import path from "path";
import { BlobServiceClient, BlockBlobClient } from "@azure/storage-blob";
import { Request, Response } from "express";

export async function uploadHandler(req: Request, res: Response) {
  const { data } = req.body;
  const response = await uploadToAzureStorage(data);
  return res.json(response);
}

export async function uploadToAzureStorage(file: string) {
  const connectionString: string = process.env
    .AZURE_STORAGE_CONNECTION_STRING as string;
  const containerName: string = process.env
    .AZURE_STORAGE_CONTAINER_NAME as string;

  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blobName: string = path.basename(file);

  const blockBlobClient = containerClient.getBlockBlobClient(blobName);

  try {
    const response = await blockBlobClient.uploadFile(file);

    const imageUrl: string = response._response.request.url;

    console.log("Image uploaded successfully: ", blobName, imageUrl);
    return { blobName, imageUrl };
  } catch (error) {
    console.log("Something went wrong: \n", error);
  }
}

export async function deleteImageFromAzureStorage(
  blobName: string
): Promise<void> {
  const containerName: string = process.env
    .AZURE_STORAGE_CONTAINER_NAME as string;
  const connectionString: string = process.env
    .AZURE_STORAGE_CONNECTION_STRING as string;
  const blobServiceClient =
    BlobServiceClient.fromConnectionString(connectionString);
  const containerClient = blobServiceClient.getContainerClient(containerName);
  const blockBlobClient: BlockBlobClient =
    containerClient.getBlockBlobClient(blobName);

  await blockBlobClient.delete();
  console.log("Image deleted successfully: ", blobName);
}
