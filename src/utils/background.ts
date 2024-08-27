import ColorThief from 'color-thief-ts'

const colorThief = new ColorThief()
colorThief.getPaletteAsync('src/assets/bg1.webp', 5).then((palette) => {
  // 循环创建5个颜色变量并放置到body的style中
  for (let i = 0; i < 5; i++) {
    document.body.style.setProperty(`--color-${i + 1}`, palette[i].toString())
  }
})
