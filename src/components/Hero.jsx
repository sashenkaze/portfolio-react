import { useState, useEffect } from "react"
import { HiArrowDown } from "react-icons/hi"

const names = ["Sashenka Osaze", "Shenka", "Сашенька", "Aze"]

export default function Hero() {
  const [text, setText] = useState("")
  const [index, setIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [speed, setSpeed] = useState(100)

  useEffect(() => {
    const current = names[index]
    
    const handleTyping = () => {
      if (isDeleting) {
        setText(current.substring(0, text.length - 1))
        setSpeed(100)
      } else {
        setText(current.substring(0, text.length + 1))
        setSpeed(100)
      }

      if (!isDeleting && text === current) {
        setTimeout(() => setIsDeleting(true), 1500)
      }

      if (isDeleting && text === "") {
        setIsDeleting(false)
        setIndex((prev) => (prev + 1) % names.length)
      }
    }

    const timer = setTimeout(handleTyping, speed)
    return () => clearTimeout(timer)
  }, [text, isDeleting, index])

  return (
    <section id="tentang" className="min-h-screen flex items-center">
      <div className="section-container">
        <p className="text-sm accent-text font-mono mb-3">Hi there, Name's</p>

        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          {text}
          <span className="animate-pulse accent-text">|</span>
        </h1>

        <p className="text-lg text-muted mb-6">
          A vocational high school student who got into the world of{" "}
          <span className="text-white font-medium">Software Development</span> few years ago.
        </p>

        <p className="text-muted leading-relaxed mb-8 max-w-l">
          A beginner with hands-on experience in different tools and languages. Currently learning mobile development with{" "}
          <span className="accent-text font-medium">Flutter</span> and backend development & APIs with{" "}
          <span className="accent-text font-medium">Express.js</span>.
        </p>

        <a href="#proyek" className="inline-flex items-center gap-2 accent-btn">
          View My Projects <HiArrowDown />
        </a>
      </div>
    </section>
  )
}