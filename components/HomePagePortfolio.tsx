import PortfolioItem from "./PortfolioItem"
import { projects } from "../assets/projects"

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="min-h-[65vh] w-[85vw] max-w-[1300px] mx-auto mt-48 text-white overflow-hidden"
    >
      <div>
        <div className="flex items-baseline justify-between">
          <h3 className="text-4xl text-white/80 capitalize font-light font-nunito tracking-wide drop-shadow-lg">
            Projects
            <span className="relative inline-block h-[1px] w-10 md:w-20 bg-white/50"></span>
          </h3>
        </div>
        <ul className="flex gap-x-4 items-stretch pb-4 overflow-x-auto mt-12 snap-x styled-scrollbar">
          {projects.map((project) => (
            <li key={project.coverImage} className="snap-center min-h-[300px]">
              <PortfolioItem project={project} />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
