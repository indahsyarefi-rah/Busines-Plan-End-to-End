export async function exportVisual(visual, type, format, id) {
  let pdf;
  const width = visual.width / 5,
    height = visual.height / 5;
  if (format === "PDF") {
    const { jsPDF } = (await import("./jspdf.js")).j;
    pdf = new jsPDF({
      orientation: "landscape",
      unit: "mm",
      format: [width, height],
      compress: true,
    });
  }
  for (let i = 0; i < visual.pages.length; i++) {
    const url = URL.createObjectURL(
      new Blob([visual.pages[i]], { type: "image/svg+xml;charset=utf-8" }),
    );
    try {
      const image = new Image();
      await new Promise((resolve, reject) => {
        image.onload = resolve;
        image.onerror = () => reject(Error("Visual gagal dirender."));
        image.src = url;
      });
      const canvas = document.createElement("canvas");
      canvas.width = visual.width * 2;
      canvas.height = visual.height * 2;
      const ctx = canvas.getContext("2d");
      if (!ctx) throw Error("Kanvas tidak tersedia.");
      ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
      if (pdf) {
        if (i) pdf.addPage([width, height], "landscape");
        pdf.addImage(
          canvas.toDataURL("image/png"),
          "PNG",
          0,
          0,
          width,
          height,
          undefined,
          "FAST",
        );
      } else {
        const blob = await new Promise((resolve, reject) =>
          canvas.toBlob(
            (b) => (b ? resolve(b) : reject(Error("PNG gagal dibuat."))),
            "image/png",
          ),
        );
        const downloadURL = URL.createObjectURL(blob);
        const a = document.createElement("a");
        a.href = downloadURL;
        a.download = `VENTU-${type}-${id.slice(0, 8)}-${i + 1}.png`;
        a.click();
        setTimeout(() => URL.revokeObjectURL(downloadURL), 3000);
      }
      canvas.width = canvas.height = 1;
    } finally {
      URL.revokeObjectURL(url);
    }
  }
  pdf?.save(`VENTU-${type}-${id.slice(0, 8)}.pdf`);
}
export async function preparePersonaPhoto(file) {
  if (!["image/jpeg", "image/png", "image/webp"].includes(file.type))
    throw Error("Gunakan foto JPG, PNG, atau WebP.");
  if (file.size > 8 * 1024 * 1024) throw Error("Ukuran foto maksimal 8 MB.");
  const url = URL.createObjectURL(file);
  try {
    const image = new Image();
    await new Promise((resolve, reject) => {
      image.onload = resolve;
      image.onerror = () => reject(Error("Foto tidak dapat dibaca."));
      image.src = url;
    });
    if (!image.naturalWidth || !image.naturalHeight)
      throw Error("Ukuran foto tidak valid.");
    const scale = Math.min(
      1,
      512 / Math.max(image.naturalWidth, image.naturalHeight),
    );
    const canvas = document.createElement("canvas");
    canvas.width = Math.max(1, Math.round(image.naturalWidth * scale));
    canvas.height = Math.max(1, Math.round(image.naturalHeight * scale));
    const ctx = canvas.getContext("2d");
    if (!ctx) throw Error("Kanvas foto tidak tersedia.");
    ctx.fillStyle = "#ffffff";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.drawImage(image, 0, 0, canvas.width, canvas.height);
    return canvas.toDataURL("image/jpeg", 0.85);
  } finally {
    URL.revokeObjectURL(url);
  }
}
