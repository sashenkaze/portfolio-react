import { SiHtml5, SiJavascript, SiPhp, SiPython, SiDart, SiFlutter, SiLaravel, SiReact, SiFlask, SiCss, SiMysql, SiTailwindcss, SiBootstrap, SiDjango, SiFigma, SiGit, SiGithub, SiNodedotjs, SiMongodb, SiDiscorddotjs, SiChatbot, SiPostman, SiNotion, SiAndroidstudio, SiLaragon, SiXampp, SiBrave, SiVscodium, SiWarp, SiCloudflare, SiGnubash, SiTensorflow, SiPandas, SiPostgresql } from "react-icons/si"
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
  { name: "Node.js", icon: <SiNodedotjs /> },
  { name: "Tailwindcss", icon: <SiTailwindcss /> },
  { name: "Bootstrap", icon: <SiBootstrap /> },
  { name: "Figma", icon: <SiFigma /> },
  { name: "Git", icon: <SiGit /> },
  { name: "Github", icon: <SiGithub /> },
  { name: "MySQL", icon: <SiMysql /> },
  { name: "PostgreSQL", icon: <SiPostgresql /> },
  { name: "MongoDB", icon: <SiMongodb /> },
  { name: "Postman", icon: <SiPostman /> },
  { name: "Notion", icon: <SiNotion /> },
  { name: "Laragon", icon: <SiLaragon /> },
  { name: "XAMPP", icon: <SiXampp /> },
  { name: "Pandas", icon: <SiPandas /> },
  { name: "TensorFlow", icon: <SiTensorflow /> },
]

export default function Skills() {
  return (
    <section id="keahlian" className="section-container">
      <h2 className="section-title">Skills & Technologies</h2>

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
          <h3 className="text-white font-semibold">Currently Exploring</h3>
        </div>
        <p className="text-muted text-sm leading-relaxed">
          Focused on learning <span className="accent-text font-medium">Flutter</span> for mobile development while exploring <span className="accent-text font-medium">Machine Learning</span>—currently in the early phase.
        </p>
      </div>
    </section>
  )
}
