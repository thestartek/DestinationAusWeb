import path from "path";
import { BlobServiceClient } from "@azure/storage-blob";

export async function uploadHandler(req, res) {
  const { imageUrl, title, description } = req.body;
  const file = req.file.path;
  console.log("Data Received: ", imageUrl, title, description);
  try {
    const url = await uploadToAzureStorage(file);
    console.log("uploaded url: ", url);
    res.status(200).json({ imageUrl: url });
  } catch (error) {
    console.log(error);
  }
}

async function uploadToAzureStorage(file) {
  const connectionString = process.env.AZURE_STORAGE_CONNECTION_STRING;
  console.log("Connection String: ", connectionString);
  const containerName = process.env.AZURE_STORAGE_CONTAINER_NAME;
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
