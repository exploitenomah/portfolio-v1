import Image from "next/image"
import Link from "next/link"
import { socials } from "../assets/links"

export default function Footer() {
  return (
    <footer className="flex flex-col md:flex-row gap-y-4 md:gap-y-0 justify-center items-center pt-0 pb-3 md:py-6  px-8 max-w-[1200px] mx-auto relative z-[12]">
      <a
        href={"/exploit_enomah.pdf"}
        download={true}
        className="flex gap-2 uppercase text-sm md:mr-auto text-btn text-white/75 hover:text-white hover:brightness-105 transition-all"
      >
        <span>resume </span>
        <Image src={"/images/download.svg"} width={15} height={15} alt={""} />
      </a>

      <ul className="flex justify-center items-center gap-4 md:max-w-lg md:mr-auto">
        {socials.map((social) => (
          <li
            className="opacity-70 hover:opacity-100 hover:animate-pulse transition-all"
            key={social.name}
          >
            <Link passHref href={social.link}>
              <Image
                width={25}
                height={25}
                src={social.icon}
                alt={social.name}
              />
            </Link>
          </li>
        ))}
      </ul>

      <small className="text-xs text-white/10 hover:text-white/40 transition-all cursor-pointer  bottom-2">
        <Link
          target="_blank"
          href="https://iconpacks.net/?utm_source=link-attribution"
        >
          Icons by Iconpacks
        </Link>
      </small>
    </footer>
  )
}
