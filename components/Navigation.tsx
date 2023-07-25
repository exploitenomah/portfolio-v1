import Link from "next/link"
import { useCallback } from "react"

export default function Navigation() {
  const handleClick = useCallback((id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: "smooth",
      block: "center",
    })
  }, [])
  return (
    <nav>
      <ul className="text-white flex justify-center text-center md:justify-end items-center gap-x-8 md:gap-x-16 lg:gap-x-24">
        <li>
          <button
            className="hover-1 relative"
            onClick={() => handleClick("about")}
          >
            About Me
          </button>
        </li>
        <li>
          <button
            className="hover-1 relative"
            onClick={() => handleClick("portfolio")}
          >
            Portfolio
          </button>
        </li>
        <li>
          <button
            className="hover-1 relative"
            onClick={() => handleClick("contact")}
          >
            Contact
          </button>
        </li>
        {/* <li>
          <Link className="hover-1 relative" href="/exploit">
            Exploit
          </Link>
        </li> */}
      </ul>
    </nav>
  )
}
