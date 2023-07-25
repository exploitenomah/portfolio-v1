import { getRandomArbitrary } from "."

export default class Bubble {
  top: number
  right: number
  bottom: number
  left: number
  width: number
  height: number
  classNames: string
  bubble: HTMLElement

  constructor(initialProperties: {
    top: number
    right: number
    bottom: number
    left: number
    width: number
    height: number
    classNames: string
  }) {
    const { top, right, bottom, left, width, height, classNames } =
      initialProperties
    this.top = top
    this.right = right
    this.bottom = bottom
    this.left = left
    this.height = height
    this.width = width
    this.classNames = classNames
    this.bubble = window.document.createElement("span")
    const bubble = this.bubble
    bubble.style.opacity = `${getRandomArbitrary(0.4, 0.8)}`
    bubble.style.top = `${top}px`
    bubble.style.right = `${right}px`
    bubble.style.bottom = `${bottom}px`
    bubble.style.left = `${left}px`
    bubble.style.width = `${width}px`
    bubble.style.height = `${height}px`
    bubble.style.zIndex = `${getRandomArbitrary(1, 10)}`
    bubble.style.animationFillMode = "backwards"
    bubble.style.animationDuration = `${getRandomArbitrary(10000, 20000)}ms`
    bubble.style.animationDelay = `${getRandomArbitrary(1000, 10000)}ms`
    bubble.style.display = "block"
    bubble.style.borderRadius = "50%"
    bubble.className = classNames
  }
}
