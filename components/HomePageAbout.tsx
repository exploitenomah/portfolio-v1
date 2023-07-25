import Image from "next/image"

export default function About() {
  return (
    <section
      id="about"
      className="w-[80vw] rounded-lg my-14 md:my-28 px-8 py-6 md:px-14 md:py-12 text-contrast-primary items-center shadow-xl shadow-white/5 max-w-[800px] mx-auto bg-white/5 backdrop-blur-lg"
    >
      <div
        className="relative w-screen max-w-[300px] h-[300px] hidden md:block float-left my-6 mr-8 z-10"
        style={{ shapeOutside: "circle(50%)" }}
      >
        <Image
          className="rounded-full relative z-20 select-none"
          src={"/images/me.jpeg"}
          alt={"exploit enomah"}
          fill
          priority
        />
        <div className="opacity-[0.5]">
          <div className="absolute z-10 w-full h-full border-4 border-green-200/30 rounded-full inset-0 -translate-y-[10%] translate-x-[10%]  animate-pulse"></div>
          <div className="absolute z-10 w-full h-full border-4 border-green-400/30 rounded-full inset-0 translate-y-[10%] -translate-x-[10%] animate-pulse"></div>
          <div className="absolute z-10 w-[150%] h-[150%] -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  border-4 border-green-600/30 rounded-full inset-0 delay-300 animate-pulse"></div>
          <div className="absolute z-10 w-[120%] h-[120%]-translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2  border-4 border-green-800 rounded-full inset-0 delay-100 animate-pulse"></div>
        </div>
      </div>
      <div className="max-w-[125ch] relative z-20">
        <h2 className="text-4xl text-white/80 font-light capitalize font-nunito tracking-wide drop-shadow-lg mb-6">
          <span className="relative inline-block h-[1px] w-10 md:w-20 bg-white/50"></span>
          About Me
          <span className="relative inline-block h-[1px] w-10 md:w-20 bg-white/50"></span>
        </h2>
        <p className="text-lg">
          I was born in the early 2000&apos;s in Eleme LGA of Nigeria. I am very
          passionate about creativity and coding is one of the many endeavours I
          harness my passion into. I&apos;m a fullstack developer with years of
          experience in building and maintaining beautiful, scalable and highly
          performant web applications. Although I&apos;m a self-taught
          developer, I&apos;m currently pursuing a Bsc. in computer science at
          the NOUN. I&apos;m also actively building a startup&nbsp;
          <a href="/" target="_blank">
            Roomeey
          </a>
          &nbsp;where we help nigerian students find compatible roommates who
          are also schoolmates with ease.
        </p>
        <p className="text-lg">Fun fact about me: I&apos;m 180+cm tall 😂</p>
        <p className="text-lg">I&apos;m also a model and writer. </p>
        <p className="text-lg">
          I love being physically active too and practice yoga and taekwondo.
        </p>
      </div>
    </section>
  )
}
