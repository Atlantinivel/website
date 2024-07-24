// localMediaStore.js
export class LocalMediaStore {
  accept = "image/*";

  async persist(files) {
    const formData = new FormData();

    files.forEach((file) => {
      formData.append("file", file);
    });

    const response = await fetch("/api/upload", {
      method: "POST",
      body: formData,
    });

    if (!response.ok) {
      throw new Error("Erro ao fazer upload da imagem");
    }

    const data = await response.json();
    return data.filePath;
  }

  async previewSrc(filename) {
    return `/uploads/${filename}`;
  }
}
