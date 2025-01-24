import Image from "next/image"

export default function PortfolioItem({
  project,
}: {
  project: {
    name: string
    coverImage: string
    liveSite: string
    github: string
    description: string
    tags: string[]
  }
}) {
  return (
    <article className="w-[80vw] h-full flex flex-col gap-y-3 max-w-[300px] bg-white/20 backdrop-blur-sm px-4 py-3 rounded-md min-h-[500px]">
      <Image
        onClick={() => window.open(project.liveSite, "_blank")}
        width={300}
        height={100}
        src={project.coverImage}
        className="w-full max-w-[270px] h-[160px] cursor-pointer rounded-md overflow-hidden"
        alt={project.name}
      />
      <h4 className="font-normal text-2xl">{project.name}</h4>
      <p className=" mb-auto">{project.description}</p>
      <ul className="flex gap-x-2 flex-wrap my-4 gap-y-2 text-contrast-default mt-auto">
        {project.tags.map((tag) => (
          <li
            key={tag}
            className="bg-primary-default py-1 px-2 rounded-full text-xs"
          >
            {tag}
          </li>
        ))}
      </ul>
      <span className="flex gap-x-3 items-center justify-end mt-auto">
        <a
          className="cursor-pointer"
          target="_blank"
          href={project.github}
          rel="noreferrer"
        >
          <Image width={20} height={20} src="/images/github.svg" alt={""} />
        </a>
        <a
          className="cursor-pointer"
          target="_blank"
          href={project.liveSite}
          rel="noreferrer"
        >
          <Image width={25} height={25} src="/images/share.svg" alt={""} />
        </a>
      </span>
    </article>
  )
}
