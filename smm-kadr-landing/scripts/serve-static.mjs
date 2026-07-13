import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { extname, join, normalize } from "node:path";

const root = join(process.cwd(), "out");
const port = Number(process.env.PORT || 3000);
const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".svg": "image/svg+xml",
  ".png": "image/png",
  ".jpg": "image/jpeg",
  ".jpeg": "image/jpeg",
  ".webp": "image/webp",
  ".ico": "image/x-icon",
  ".woff2": "font/woff2",
};

createServer(async (request, response) => {
  try {
    const pathname = decodeURIComponent(new URL(request.url || "/", `http://${request.headers.host}`).pathname);
    const cleanPath = normalize(pathname).replace(/^(\.\.(\/|\\|$))+/, "");
    let filePath = join(root, cleanPath === "/" ? "index.html" : cleanPath);
    const info = await stat(filePath).catch(() => null);
    if (info?.isDirectory()) filePath = join(filePath, "index.html");
    const content = await readFile(filePath);
    response.writeHead(200, { "Content-Type": mime[extname(filePath)] || "application/octet-stream" });
    response.end(content);
  } catch {
    response.writeHead(404, { "Content-Type": "text/plain; charset=utf-8" });
    response.end("404 — файл не найден");
  }
}).listen(port, () => {
  console.log(`SMM_KADR: http://localhost:${port}`);
});
