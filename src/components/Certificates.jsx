import { useRef, useEffect } from "react"
import { HiChevronLeft, HiChevronRight } from "react-icons/hi"

const certData = [
  { title: "Dicoding Introduction to Financial Literacy", issuer: "Dicoding Indonesia", date: "31/12/2025" },
  { title: "Wordpress Introduction", issuer: "MySkill", date: "20/08/2025" },
  { title: "Keselamatan dan Kesehatan Kerja", issuer: "International Labour Organization", date: "29/08/2024" },
  { title: "Dasar Pemrograman JavaScript", issuer: "Dicoding Indonesia", date: "05/01/2025" },
  { title: "Data Analysis Fundamental", issuer: "MySkill", date: "04/08/2025" },
  { title: "Front-End Web untuk Pemula", issuer: "Dicoding Indonesia", date: "27/01/2025" },
  { title: "Dasar AI", issuer: "Dicoding Indonesia", date: "14/10/2025" },
  { title: "Financial Literacy 101", issuer: "Dicoding Indonesia", date: "14/10/2025" },
  { title: "Dasar Pemrograman Web", issuer: "Dicoding Indonesia", date: "31/10/2024" },
]

const loopedCert = [...certData, ...certData]

export default function Certificates() {
  const scrollRef = useRef(null)

  useEffect(() => {
    const el = scrollRef.current
    if (!el) return

    const half = el.scrollWidth / 2
    el.scrollLeft = half

    const handleScroll = () => {
  if (el.scrollLeft >= half * 2 - el.clientWidth - 5) {
    el.scrollLeft = half
  } else if (el.scrollLeft <= 5) {
    el.scrollLeft = half
  }
}

    el.addEventListener("scroll", handleScroll)
    return () => el.removeEventListener("scroll", handleScroll)
  }, [])

  function scroll(dir) {
    const el = scrollRef.current
    if (!el) return

    const w = 300
    const maxScroll = el.scrollWidth / 2

    if (dir === "right") {
      el.scrollBy({ left: w, behavior: "smooth" })

      setTimeout(() => {
        if (el.scrollLeft >= maxScroll) {
          el.scrollLeft -= maxScroll
        }
      }, 300)
    } else {
      el.scrollBy({ left: -w, behavior: "smooth" })

      setTimeout(() => {
        if (el.scrollLeft <= 0) {
          el.scrollLeft += maxScroll
        }
      }, 300)
    }
  }

  return (
    <section id="sertifikat" className="section-container">
      <div className="flex items-center justify-between mb-8">
        <h2 className="section-title mb-0">Certificates</h2>
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
        {loopedCert.map((cert, i) => (
          <div
            key={i}
            className="card-base min-w-65 max-w-70 shrink-0 snap-start"
          >
            <div className="w-10 h-10 rounded-lg bg-[hsl(var(--accent)/0.15)] flex items-center justify-center mb-4">
              <span className="accent-text font-mono text-sm font-bold">
                {/* 🔥 nomor loop */}
                {String((i % certData.length) + 1).padStart(2, "0")}
              </span>
            </div>

            <h3 className="text-white font-semibold mb-1">
              {cert.title}
            </h3>
            <p className="text-muted text-sm">{cert.issuer}</p>
            <p className="text-muted text-xs mt-2 font-mono">
              {cert.date}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}