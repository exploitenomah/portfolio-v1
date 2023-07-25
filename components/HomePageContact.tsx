import Link from "next/link"

export default function Contact() {
  return (
    <section
      id="contact"
      className="w-[80vw] rounded-lg my-14 md:my-28 px-8 py-6 md:px-14 md:py-12 text-contrast-primary items-center shadow-xl shadow-white/5 max-w-[600px] mx-auto bg-white/5 backdrop-blur-lg text-center"
    >
      <h5 className="text-center text-3xl font-light">
        <span className="relative inline-block h-[1px] w-5 md:w-10 bg-white/50"></span>
        Let&apos;s talk...
        <span className="relative inline-block h-[1px] w-5 md:w-10 bg-white/50"></span>
      </h5>
      <p className="my-6 text-lg">
        Have you got any ideas, suggestions, feedback? I&apos;m all ears and
        eyes! Don&apos;t be shy, say hi!
      </p>
      <Link
        href="mailto:exploitenomah@gmail.com"
        className="ml-auto bg-gradient-two rounded-sm mt-6 inline-block px-5 py-3 font-bold tracking-wider capitalize text-white linear duration-500 overflow-visible hover:scale-[1.05] transition-all"
      >
        Say Hello
      </Link>
    </section>
  )
}
