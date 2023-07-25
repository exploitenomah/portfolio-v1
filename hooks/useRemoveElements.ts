import { useCallback, useEffect } from "react"

export default function useRemoveElements() {
  return useCallback((querySelector: string, parent: HTMLElement) => {
    document
      .querySelectorAll(querySelector)
      .forEach((element) => parent.removeChild(element))
  }, [])
}
