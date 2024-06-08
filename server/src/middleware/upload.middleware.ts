import path from "path";
import multer from "multer";
import { Request } from "express";

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, "uploads/"),
  filename: (req, file, cb) =>
    cb(null, Date.now() + path.extname(file.originalname)),
});

const fileTypes = (
  req: Request,
  file: Express.Multer.File,
  cb: (arg1: Error | null, arg2?: boolean) => void
) => {
  if (
    file.mimetype === "image/jpeg" ||
    file.mimetype === "image/png" ||
    file.mimetype === "image/jpg" ||
    file.mimetype === "image.gif" ||
    file.mimetype === "image/svg+xml" ||
    file.mimetype === "image/webp" ||
    file.mimetype === "image/tiff" ||
    file.mimetype === "image/bmp" ||
    file.mimetype === "image/heic"
  )
    cb(null, true);
  else cb(new Error("File type not supported"));
};

const upload = multer({
  storage,
  limits: { fileSize: 8 * 1024 * 1024 },
  fileFilter: fileTypes,
});

export default upload;
