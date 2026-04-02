import { SiHtml5, SiJavascript, SiPhp, SiPython, SiDart, SiFlutter, SiLaravel, SiReact, SiFlask, SiCss } from "react-icons/si"
import { FaMagnifyingGlassChart } from "react-icons/fa6";

const skills = [
  { name: "HTML", icon: <SiHtml5 /> },
  { name: "CSS", icon: <SiCss /> },
  { name: "JavaScript", icon: <SiJavascript /> },
  { name: "PHP", icon: <SiPhp /> },
  { name: "Python", icon: <SiPython /> },
  { name: "Dart", icon: <SiDart /> },
  { name: "Flutter", icon: <SiFlutter /> },
  { name: "Laravel", icon: <SiLaravel /> },
  { name: "React", icon: <SiReact /> },
  { name: "Flask", icon: <SiFlask /> },
]

export default function Skills() {
  return (
    <section id="keahlian" className="section-container">
      <h2 className="section-title">Bahasa & Framework</h2>
      <p className="text-muted mb-8 max-w-lg">
        Bahasa dan framework yang sudah pernah saya pelajari. Masih terus belajar dan eksplorasi.
      </p>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
        {skills.map((s) => (
          <div key={s.name} className="card-base flex flex-col items-center gap-3 py-6">
            <span className="text-2xl accent-text">{s.icon}</span>
            <span className="text-sm text-white font-medium">{s.name}</span>
          </div>
        ))}
      </div>

      <div className="mt-10 card-base">
        <div className="flex items-center gap-2 mb-2">
          <FaMagnifyingGlassChart />
          <h3 className="text-white font-semibold">Minat Saat Ini</h3>
        </div>
        <p className="text-muted text-sm leading-relaxed">
          Tertarik dengan <span className="accent-text font-medium">Machine Learning</span> —
          masih sangat di tahap awal, tapi ingin terus belajar lebih dalam.
        </p>
      </div>
    </section>
  )
}
