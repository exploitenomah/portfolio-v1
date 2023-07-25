export default function Hero() {
  return (
    <>
      <main className="font-nunito w-[95vw] whitespace-nowrap flex mx-auto flex-col justify-center items-center h-[90vh] max-w-[800px] text-center text-contrast-strong">
        <h1 className="mt-auto text-2xl md:text-7xl text-left font-light tracking-[.4rem] sm:tracking-[.6rem] md:tracking-[.8rem] leading-[1.4] uppercase">
          Exploit Enomah
        </h1>
        <p className="ml-auto mt-3 font-black text-lg md:text-xl text-contrast-strong tracking-widest drop-shadow-lg">
          Fullstack Developer
        </p>
        <button
          onClick={() =>
            document.getElementById("portfolio")?.scrollIntoView({
              behavior: "smooth",
              block: "center",
            })
          }
          className="ml-auto bg-gradient-two rounded-sm mt-6 inline-block px-5 py-3 font-bold tracking-wider uppercase relative text-white linear duration-500 overflow-visible hover:scale-[1.05] transition-all"
        >
          Portfolio
        </button>
        <button
          onClick={() =>
            document
              .getElementById("about")
              ?.scrollIntoView({ behavior: "smooth", block: "center" })
          }
          className="mt-auto mb-24 p-4 bg-white/5 backdrop-blur-sm rounded-full opacity-25 hover:opacity-100 animate-bounce hover:scale-110 transition-all hover:bg-primary-default duration-400"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fill-rule="evenodd"
              d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
            />
          </svg>
        </button>
      </main>
    </>
  )
}
