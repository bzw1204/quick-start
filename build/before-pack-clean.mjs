import { existsSync, lstatSync, readdirSync, unlinkSync } from 'node:fs'
import { join } from 'node:path'

function emptyDirRecursive(dir) {
  if (existsSync(dir)) {
    readdirSync(dir).forEach((file) => {
      const filePath = join(dir, file)
      if (lstatSync(filePath).isFile()) {
        unlinkSync(filePath) // 删除文件
      }
    })
  }
}

export default function(context) {
  const outDir = context.outDir
  // 清理当前目录下所有文件
  emptyDirRecursive(outDir)
}
