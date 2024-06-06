import { Request } from "express";
import multer from "multer";
import path from "path";

// Configure multer storage
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

// Only allow images to be uploaded
const fileTypes = (
  req: Request,
  file: Express.Multer.File,
  cb: (arg1: Error | null, arg2?: boolean) => void
) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image/gif" ||
    file.mimetype === "image/webp" ||
    file.mimetype === "image/svg+xml" ||
    file.mimetype === "image/heic"
  ) {
    cb(null, true);
  } else {
    cb(new Error("File type not supported"));
  }
};

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: fileTypes,
});

export default upload;
