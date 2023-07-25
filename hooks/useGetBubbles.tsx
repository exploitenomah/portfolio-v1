import { useEffect, useMemo } from "react"
import { getRandomArbitrary } from "../utils"
import Bubble from "../utils/Bubble"

export default function useGetBubbles(classNames = "") {
  useEffect(() => {
    const arr: any[] = []
    arr.length = 10
    arr.fill(1)
    arr
      .map(() => {
        const width = getRandomArbitrary(150, 400)
        return new Bubble({
          width,
          height: width,
          top: getRandomArbitrary(0, window.innerHeight - 10),
          right: getRandomArbitrary(0, window.innerWidth - 10),
          bottom: getRandomArbitrary(0, window.innerHeight - 10),
          left: getRandomArbitrary(0, window.innerWidth - 10),
          classNames: `${classNames} bubble`,
        }).bubble
      })
      .forEach((el) => {
        document.body.appendChild(el)
      })
  }, [classNames])
}
