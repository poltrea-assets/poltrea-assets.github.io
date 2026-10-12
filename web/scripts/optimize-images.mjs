import { readdir } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import { join, parse } from 'node:path'
import sharp from 'sharp'

const imagesDirectory = fileURLToPath(new URL('../public/images/', import.meta.url))
const widths = [768, 1280, 1920, 2560]
const sources = (await readdir(imagesDirectory))
  .filter((file) => file.endsWith('.png') && file !== 'poltrea-logo-black.png')

for (const file of sources) {
  const source = join(imagesDirectory, file)
  const { name } = parse(file)
  for (const width of widths) {
    await sharp(source)
      .resize({ width, withoutEnlargement: true })
      .webp({ quality: 82, effort: 6 })
      .toFile(join(imagesDirectory, `${name}-${width}.webp`))
  }
}
