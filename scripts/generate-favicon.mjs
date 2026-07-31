import { writeFile } from "node:fs/promises";
import { tmpdir } from "node:os";
import { join } from "node:path";
import { fileURLToPath } from "node:url";

import sharp from "sharp";

const sizes = [16, 32, 48, 64, 128, 256];
const outputPath = fileURLToPath(
  new URL("../src/app/favicon.ico", import.meta.url),
);
const previewPath = join(tmpdir(), "elec-pro-solutions-favicon-256.png");

const source = `
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
    <circle cx="128" cy="128" r="112" fill="#ff5329" />
    <path
      d="m11.9 2-7 9h4.7L8.7 18l6.4-9.2h-4.4L11.9 2Z"
      fill="#11110f"
      transform="translate(28 28) scale(10)"
    />
  </svg>
`;

const pngImages = await Promise.all(
  sizes.map((size) =>
    sharp(Buffer.from(source))
      .resize(size, size)
      .png({ compressionLevel: 9 })
      .toBuffer(),
  ),
);

const headerSize = 6;
const entrySize = 16;
const directorySize = headerSize + entrySize * pngImages.length;
const directory = Buffer.alloc(directorySize);

directory.writeUInt16LE(0, 0);
directory.writeUInt16LE(1, 2);
directory.writeUInt16LE(pngImages.length, 4);

let imageOffset = directorySize;

pngImages.forEach((image, index) => {
  const size = sizes[index];
  const entryOffset = headerSize + entrySize * index;

  directory.writeUInt8(size === 256 ? 0 : size, entryOffset);
  directory.writeUInt8(size === 256 ? 0 : size, entryOffset + 1);
  directory.writeUInt8(0, entryOffset + 2);
  directory.writeUInt8(0, entryOffset + 3);
  directory.writeUInt16LE(1, entryOffset + 4);
  directory.writeUInt16LE(32, entryOffset + 6);
  directory.writeUInt32LE(image.length, entryOffset + 8);
  directory.writeUInt32LE(imageOffset, entryOffset + 12);

  imageOffset += image.length;
});

await writeFile(outputPath, Buffer.concat([directory, ...pngImages]));
await writeFile(previewPath, pngImages.at(-1));

console.log(
  JSON.stringify({
    favicon: outputPath,
    preview: previewPath,
    sizes,
  }),
);
