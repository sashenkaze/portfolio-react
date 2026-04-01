import { useRef } from "react"
import { HiChevronLeft, HiChevronRight, HiExternalLink } from "react-icons/hi"

const projectData = [
  { title: "Nama Proyek 1", description: "Deskripsi singkat proyek. Ganti sesuai kebutuhan.", tags: ["React", "Tailwind"], link: "#" },
  { title: "Nama Proyek 2", description: "Deskripsi singkat proyek. Ganti sesuai kebutuhan.", tags: ["Laravel", "PHP"], link: "#" },
  { title: "Nama Proyek 3", description: "Deskripsi singkat proyek. Ganti sesuai kebutuhan.", tags: ["Python", "Flask"], link: "#" },
  { title: "Nama Proyek 4", description: "Deskripsi singkat proyek. Ganti sesuai kebutuhan.", tags: ["Flutter", "Dart"], link: "#" },
  { title: "Nama Proyek 5", description: "Deskripsi singkat proyek. Ganti sesuai kebutuhan.", tags: ["JavaScript"], link: "#" },
]

export default function Projects() {
  const scrollRef = useRef(null)

  function scroll(dir) {
    const el = scrollRef.current
    if (!el) return
    const w = 300

    if (dir === "right") {
      el.scrollLeft + el.clientWidth >= el.scrollWidth - 10
        ? el.scrollTo({ left: 0, behavior: "smooth" })
        : el.scrollBy({ left: w, behavior: "smooth" })
    } else {
      el.scrollLeft <= 10
        ? el.scrollTo({ left: el.scrollWidth, behavior: "smooth" })
        : el.scrollBy({ left: -w, behavior: "smooth" })
    }
  }

  return (
    <section id="proyek" className="section-container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title mb-0">Proyek</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="scroll-btn"><HiChevronLeft size={20} /></button>
          <button onClick={() => scroll("right")} className="scroll-btn"><HiChevronRight size={20} /></button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x" style={{ scrollbarWidth: "none" }}>
        {projectData.map((p, i) => (
          <div key={i} className="card-base min-w-[280px] max-w-[300px] flex-shrink-0 snap-start flex flex-col justify-between">
            <div>
              <h3 className="text-white font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-muted text-sm mb-4">{p.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {p.tags.map((tag) => (
                  <span key={tag} className="text-xs font-mono accent-text bg-[hsl(var(--accent)/0.1)] px-2 py-1 rounded">{tag}</span>
                ))}
              </div>
            </div>
            <a href={p.link} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-1 text-sm accent-text hover:underline">
              Lihat <HiExternalLink />
            </a>
          </div>
        ))}
      </div>
    </section>
  )
}
