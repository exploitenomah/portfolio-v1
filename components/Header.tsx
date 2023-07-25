import Link from "next/link"
import Navigation from "./Navigation"
import Logo from "./Logo"
import { useEffect, useState } from "react"

export default function Header() {
  const [isScrollingDown, setIsScrollingDown] = useState(false)
  useEffect(() => {
    window.addEventListener("wheel", (e) => {
      e.deltaY < 0 ? setIsScrollingDown(false) : setIsScrollingDown(true)
      console.log("scrollDirection")
    })
    return () => {
      window.removeEventListener("wheel", () => {})
    }
  }, [])
  return (
    <>
      <header
        className={`sticky transition-all duration-400 z-[100] backdrop-blur-lg top-0 inset-x-0 py-8 md:py-4 flex whitespace-nowrap gap-x-4 justify-between items-center px-4 md:px-12 overflow-hidden ${
          isScrollingDown ? "opacity-0" : "opacity-100"
        } `}
      >
        <Link
          className="relative text-white before:block before:absolute before:w-[150%] before:h-[150%] before:bg-transparent before:-z-10 before:left-1/2 before:top-1/2 before:-translate-x-1/2 before:border-dotted before:-translate-y-1/2 before:border-2 before:rounded-full before:scale-0 hover:before:scale-100 before:transition-transform before:duration-300 before:ease-in-out"
          href="/"
        >
          <Logo className="w-[20px] md:w-[35px] lg:w-[50px]" />
        </Link>
        <Navigation />
      </header>
    </>
  )
}
