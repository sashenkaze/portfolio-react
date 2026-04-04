import { HiMail } from "react-icons/hi"
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="kontak" className="section-container">
      <h2 className="section-title">Contact</h2>
      <p className="text-muted mb-8 max-w-lg">
        Got something in mind or just want to say hi? Feel free to reach out.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1">Name</label>
            <input type="text" placeholder="Your name" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">Email</label>
            <input type="email" placeholder="email@example.com" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">Message</label>
            <textarea rows={4} placeholder="Write your message..." className="input-field resize-none" />
          </div>
          <button type="submit" className="accent-btn">Send Message</button>
        </form>

        <div className="flex flex-col justify-center gap-4">
          <a href="https://www.instagram.com/shenka_aze/" className="card-base flex items-center gap-4">
            <FaInstagram className="text-xl accent-text" />
            <div>
              <p className="text-white text-sm font-medium">Instagram</p>
              <p className="text-muted text-xs">shenka_aze</p>
            </div>
          </a>
          <a href="https://mail.google.com/mail/?view=cm&to=sashenkaosazee@gmail.com" target="_blank" className="card-base flex items-center gap-4">
            <HiMail className="text-xl accent-text" />
            <div>
              <p className="text-white text-sm font-medium">Email</p>
              <p className="text-muted text-xs">sashenkaosazee@gmail.com</p>
            </div>
          </a>
          <a href="https://github.com/SashenkAze" target="_blank" rel="noopener noreferrer" className="card-base flex items-center gap-4">
            <FaGithub className="text-xl accent-text" />
            <div>
              <p className="text-white text-sm font-medium">GitHub</p>
              <p className="text-muted text-xs">github.com/SashenkAze</p>
            </div>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="card-base flex items-center gap-4">
            <FaLinkedin className="text-xl accent-text" />
            <div>
              <p className="text-white text-sm font-medium">LinkedIn</p>
              <p className="text-muted text-xs">*On hold for now~ (┬┬﹏┬┬)</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
