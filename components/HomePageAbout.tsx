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
          I&apos;m a self-taught full-stack developer passionate about
          creativity and problem-solving. With years of experience, I specialize
          in building scalable, high-performance web applications that deliver
          impactful user experiences. Currently pursuing a BSc in Computer
          Science at the National Open University of Nigeria (NOUN), I&apos;m
          also the founder of&nbsp;
          <a href="https://roomeyfinder.com" target="_blank" rel="noreferrer">
            RoomeyFinder
          </a>
          , a startup simplifying roommate matching for Nigerian students.
        </p>
        <p className="text-lg">
          Dedicated to innovation and continuous learning, I strive to create
          solutions that combine efficiency, functionality, and elegance.{" "}
        </p>
      </div>
    </section>
  )
}
