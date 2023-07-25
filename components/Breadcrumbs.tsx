import Link from "next/link"
import { useRouter } from "next/router"
import { useMemo } from "react"

export default function BreadCrumbs() {
  const router = useRouter()
  const currentPath = useMemo(() => router.asPath, [router.asPath])
  const paths = router.asPath.split("/").filter((x) => x)
  const crumbItems = paths.map((path, idx) => {
    return {
      href: `/${paths.slice(0, idx + 1).join("/")}`,
      label: path.split("?")[0],
      isActive: paths[paths.length - 1] === path,
    }
  })
  const crumbs = crumbItems.map((crumb, idx) => {
    if (idx === paths.length - 1)
      return (
        <span
          className="cursor-pointer text-white bg-black/50 px-3 py-2 rounded-lg"
          key={idx}
        >
          {crumb.label}
        </span>
      )
    return (
      <Link
        className="text-btn hover:text-white transition-all "
        key={idx}
        href={`${crumb.href}`}
      >
        {crumb.label}
      </Link>
    )
  })

  if (currentPath === "/") return <></>
  return (
    <div className="hidden md:block relative z-[11] md:max-w-[55vw] xl:max-w-[55] 2xl:max-w-[45vw] mt-12 mx-auto ">
      <ul className="flex items-center w-full bg-primary/10 py-4 px-6 text-xs text-white/75 capitalize border-b border-white/10 drop-shadow-2xl">
        <li>
          <Link className="text-btn hover:text-white transition-all " href="/">
            Home
          </Link>
          &nbsp;&nbsp;&nbsp;&nbsp;{"/"}
        </li>
        {crumbs.map((crumb, idx, allcrumbs) =>
          idx < allcrumbs.length - 1 ? (
            <li key={idx}>
              {crumb}&nbsp;&nbsp;&nbsp;&nbsp;{"/"}&nbsp;&nbsp;&nbsp;&nbsp;
            </li>
          ) : (
            <li key={idx}>&nbsp;&nbsp;&nbsp;&nbsp;{crumb}</li>
          )
        )}
      </ul>
    </div>
  )
}
