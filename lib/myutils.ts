import fs from "fs"
import path from "path"

export const isDevEnv = process.env.NODE_ENV !== "production"

export function getFileContent(fileName: string) {
  const directoryPath = path.join(process.cwd(), fileName)
  const files = fs.readdirSync(directoryPath)
  const tsxFiles = files.filter((file) => path.extname(file) === ".ts")

  const fileContents = tsxFiles.map((file) => {
    const filePath = path.join(directoryPath, file)
    const content = fs.readFileSync(filePath, "utf-8")
    return { fileName: file, code: content }
  })

  return fileContents
}
