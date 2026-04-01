import { useRef } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const certData = [
  { title: "Nama Sertifikat 1", issuer: "Penerbit / Platform", date: "Bulan Tahun" },
  { title: "Nama Sertifikat 2", issuer: "Penerbit / Platform", date: "Bulan Tahun" },
  { title: "Nama Sertifikat 3", issuer: "Penerbit / Platform", date: "Bulan Tahun" },
  { title: "Nama Sertifikat 4", issuer: "Penerbit / Platform", date: "Bulan Tahun" },
]

export default function Certificates() {
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
    <section id="sertifikat" className="section-container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title mb-0">Sertifikat</h2>
        <div className="flex gap-2">
          <button onClick={() => scroll("left")} className="scroll-btn"><HiChevronLeft size={20} /></button>
          <button onClick={() => scroll("right")} className="scroll-btn"><HiChevronRight size={20} /></button>
        </div>
      </div>

      <div ref={scrollRef} className="flex gap-5 overflow-x-auto pb-4 snap-x" style={{ scrollbarWidth: "none" }}>
        {certData.map((cert, i) => (
          <div key={i} className="card-base min-w-[260px] max-w-[280px] flex-shrink-0 snap-start">
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent)/0.15)] flex items-center justify-center mb-4">
              <span className="accent-text font-mono text-sm font-bold">{String(i + 1).padStart(2, "0")}</span>
            </div>
            <h3 className="text-white font-semibold mb-1">{cert.title}</h3>
            <p className="text-muted text-sm">{cert.issuer}</p>
            <p className="text-muted text-xs mt-2 font-mono">{cert.date}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
