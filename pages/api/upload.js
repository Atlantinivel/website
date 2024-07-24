// pages/api/upload.js
import formidable from "formidable";
import fs from "fs-extra";
import path from "path";

export const config = {
  api: {
    bodyParser: false,
  },
};

export default async (req, res) => {
  const form = new formidable.IncomingForm();
  const uploadDir = path.join(process.cwd(), "public/uploads");

  fs.ensureDirSync(uploadDir);

  form.uploadDir = uploadDir;
  form.keepExtensions = true;

  form.parse(req, (err, fields, files) => {
    if (err) {
      return res.status(500).json({ error: "Erro ao fazer upload da imagem" });
    }

    const file = files.file;
    const newPath = path.join(uploadDir, file.name);

    fs.rename(file.path, newPath, (err) => {
      if (err) {
        return res.status(500).json({ error: "Erro ao mover o arquivo" });
      }

      res
        .status(200)
        .json({
          message: "Upload bem-sucedido",
          filePath: `/uploads/${file.name}`,
        });
    });
  });
};
