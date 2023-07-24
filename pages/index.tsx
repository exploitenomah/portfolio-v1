import { useState, useEffect } from "react"
import About from "../components/HomePageAbout"
import Hero from "../components/HomePageHero"
import useGetBubbles from "../hooks/useGetBubbles"
import Portfolio from "../components/HomePagePortfolio"
import Contact from "../components/HomePageContact"

export default function HomePage() {
  useGetBubbles(
    "fixed bg-gradient-x shadow-circles animate-rise shadow-[#00e6ba94]"
  )
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0,
  })

  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      setMousePosition({
        x: e.screenX,
        y: e.screenY,
      })
    })
    return () => {
      window.removeEventListener("mousemove", () => {})
    }
  }, [])
  return (
    <>
      <div className="relative z-20">
        <Hero />
        <About />
        <Portfolio />
        <Contact />
      </div>
      <div
        className="fixed inset-0 bg-body-gradient z-[10] opacity-80"
        style={{
          background: `radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, #004e3f,  black)`,
        }}
      ></div>
    </>
  )
}
