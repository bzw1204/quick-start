/**
 * 等待 DOM 就绪的函数。
 * @param condition - 可选参数，指定 DOM 就绪的状态。默认为 ['complete', 'interactive']。
 * @returns 返回一个 Promise，当 DOM 就绪时解析为 true。
 */
export function domReady(condition: DocumentReadyState[] = ['complete', 'interactive']): Promise<boolean> {
  return new Promise((resolve) => {
    if (condition.includes(document.readyState)) {
      resolve(true)
    } else {
      document.addEventListener('readystatechange', () => {
        if (condition.includes(document.readyState)) {
          resolve(true)
        }
      })
    }
  })
}
/**
 * https://tobiasahlin.com/spinkit
 * https://connoratherton.com/loaders
 * https://projects.lukehaas.me/css-loaders
 * https://matejkustec.github.io/SpinThatShit
 */
const safe = {
  append(parent: HTMLElement, child: HTMLElement) {
    if (!Array.from(parent.children).find(e => e === child)) {
      return parent.appendChild(child)
    }
    return parent
  },
  remove(parent: HTMLElement, child: HTMLElement) {
    if (Array.from(parent.children).find(e => e === child)) {
      return parent.removeChild(child)
    }
    return parent
  }
}
export function useLoading() {
  const className = `loaders-css__square-spin `
  const styleContent = `
    @keyframes square-spin {
      25% { transform: perspective(100px) rotateX(180deg) rotateY(0); }
      50% { transform: perspective(100px) rotateX(180deg) rotateY(180deg); }
      75% { transform: perspective(100px) rotateX(0) rotateY(180deg); }
      100% { transform: perspective(100px) rotateX(0) rotateY(0); }
    }
    .${className} > div {
      animation-fill-mode: both;
      width: 50px;
      height: 50px;
      background: #fff;
      animation: square-spin 3s 0s cubic-bezier(0.09, 0.57, 0.49, 0.9) infinite;
    }
    .app-loading-wrap {
      position: fixed;
      top: 0;
      left: 0;
      width: 100vw;
      height: 100vh;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: transparent;
      z-index: 9;
    }
  `
  const oStyle = document.createElement('style')
  const oDiv = document.createElement('div')

  oStyle.id = 'app-loading-style'
  oStyle.innerHTML = styleContent
  oDiv.className = 'app-loading-wrap'
  oDiv.innerHTML = `<div class="${className}"><div></div></div>`
  const appStyle = document.getElementById('app')?.style
  return {
    appendLoading() {
      if (appStyle) {
        appStyle.display = 'none'
      }
      safe.append(document.head, oStyle)
      safe.append(document.body, oDiv)
    },
    removeLoading() {
      safe.remove(document.head, oStyle)
      safe.remove(document.body, oDiv)
      if (appStyle) {
        appStyle.display = ''
      }
    }
  }
}
