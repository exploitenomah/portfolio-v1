import Link from "next/link"

export default function Custom404() {
  return (
    <div className="h-screen w-screen fixed z-[100] text-center text-lg backdrop-blur-lg bg-white/5 flex items-center justify-center">
      <div>
        <h1 className="flex gap-x-4 text-white/60">
          404 <span className="block h-[30px] w-[1px] bg-white/60"></span>
          <span>This page could not be found</span>
        </h1>
        <Link className="hover-1 text-white relative text-sm inline-block mt-4" href="/">
          Home
        </Link>
      </div>
    </div>
  )
}
