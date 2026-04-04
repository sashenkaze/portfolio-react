import { useRef, useEffect } from "react"
import { HiChevronLeft, HiChevronRight, HiExternalLink } from "react-icons/hi"
import CarbonCalc from '../assets/carbon.png'
import Erigo from '../assets/erigo.png'
import SVP from '../assets/svp.png'
import Tixid from '../assets/tixid.png'
import Pong from '../assets/pong.png'
import Pega from '../assets/pega.png'

const projectData = [
  { 
    title: "Carbon Footprint Calculator",
    img: CarbonCalc,
    description: "Estimate carbon footprint based on electricity usage with a simple web tool.",
    tags: ["HTML & CSS", "JavaScript"],
    link: "https://sashenkaze.github.io/kalkulator-jejak-karbon/"
  },
  { 
    title: "Fashion Brand Analysis",
    img: Erigo,
    description: "A basic analysis of a local fashion brand and its market presence.",
    tags: ["HTML & CSS", "JavaScript"],
    link: "https://sashenkaze.github.io/projek-ekonomi/"
  },
  { 
    title: "Social Volunteering App",
    img: SVP,
    description: "Prototype for volunteer registration and social activity management.",
    tags: ["Laravel", "PHP", "MDBootstrap", "MySQL"],
    link: "https://github.com/sashenkaze/proyek-mandiri-sosial"
  },
  { 
    title: "TIXID (Cinema Ticket App)",
    img: Tixid,
    description: "Cinema ticket booking simulation inspired by TIX ID.",
    tags: ["Laravel", "PHP", "MySQL", "MDBootstrap"],
    link: "https://github.com/sashenkaze/proyek-tixid-pplg-kls-xi"
  },
  { 
    title: "Pong Game",
    img: Pong,
    description: "Classic Pong game recreated in the browser using JavaScript.",
    tags: ["JavaScript", "HTML & CSS"],
    link: "https://sashenkaze.github.io/pong/"
  },
  { 
    title: "Pega Game Store",
    img: Pega,
    description: "Game store app that compares prices using API and simulates purchases.",
    tags: ["React", "JavaScript", "Tailwind CSS"],
    link: "https://pega-game-store.vercel.app/"
  },
]

const loopedData = [...projectData, ...projectData]

export default function Projects() {
  const scrollRef = useRef(null)

  useEffect(() => {
  const el = scrollRef.current
  if (!el) return

  const half = el.scrollWidth / 2

  el.scrollLeft = half

  const handleScroll = () => {
  const max = el.scrollWidth - el.clientWidth
  if (el.scrollLeft >= max - 5) {
    requestAnimationFrame(() => {
      el.scrollLeft -= projectData.length * (el.children[0].offsetWidth + parseInt(getComputedStyle(el).gap || 0))
    })
  } else if (el.scrollLeft <= 5) {
    requestAnimationFrame(() => {
      el.scrollLeft += projectData.length * (el.children[0].offsetWidth + parseInt(getComputedStyle(el).gap || 0))
    })
  }
}

  el.addEventListener("scroll", handleScroll)

  return () => el.removeEventListener("scroll", handleScroll)
}, [])

  function scroll(dir) {
  const el = scrollRef.current
  if (!el) return

  const card = el.children[0]
  const gap = parseInt(getComputedStyle(el).gap) || 0
  const w = card.offsetWidth + gap
  const maxScroll = el.scrollWidth / 2

  if (dir === "right") {
    el.scrollBy({ left: w, behavior: "smooth" })

    setTimeout(() => {
      if (el.scrollLeft >= maxScroll) {
        el.scrollLeft = el.scrollLeft - maxScroll
      }
    }, 300)
  } else {
    el.scrollBy({ left: -w, behavior: "smooth" })

    setTimeout(() => {
      if (el.scrollLeft <= 0) {
        el.scrollLeft = el.scrollLeft + maxScroll
      }
    }, 300)
  }
}

  return (
    <section id="proyek" className="section-container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title mb-0">Projects</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="scroll-btn">
            <HiChevronLeft size={20} />
          </button>
          <button onClick={() => scroll("right")} className="scroll-btn">
            <HiChevronRight size={20} />
          </button>
        </div>
      </div>

      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto pb-4 snap-x"
        style={{ scrollbarWidth: "none" }}
      >
        {loopedData.map((p, i) => (
          <div
            key={i}
            className="card-base min-w-70 max-w-75 shrink-0 snap-start flex flex-col justify-between"
          >
            <div>
              <h3 className="text-white font-semibold text-lg mb-3">
                {p.title}
              </h3>
              <img className="max-w-l" src={p.img} alt={p.title} />
              <p className="text-muted text-sm my-5 whitespace-pre-line">
                {p.description}
              </p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-xs font-mono accent-text bg-[hsl(var(--accent)/0.1)] px-2 py-1 rounded"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm accent-text hover:underline"
            >
              View <HiExternalLink />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}