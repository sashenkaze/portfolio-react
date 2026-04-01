import { HiMail } from "react-icons/hi"
import { FaGithub, FaLinkedin } from "react-icons/fa"

export default function Contact() {
  return (
    <section id="kontak" className="section-container">
      <h2 className="section-title">Kontak</h2>
      <p className="text-muted mb-8 max-w-lg">
        Tertarik berkolaborasi atau sekadar menyapa? Hubungi saya.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
          <div>
            <label className="block text-sm text-muted mb-1">Nama</label>
            <input type="text" placeholder="Nama kamu" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">Email</label>
            <input type="email" placeholder="email@contoh.com" className="input-field" />
          </div>
          <div>
            <label className="block text-sm text-muted mb-1">Pesan</label>
            <textarea rows={4} placeholder="Tulis pesan..." className="input-field resize-none" />
          </div>
          <button type="submit" className="accent-btn">Kirim Pesan</button>
        </form>

        <div className="flex flex-col justify-center gap-4">
          <a href="mailto:placeholder@email.com" className="card-base flex items-center gap-4">
            <HiMail className="text-xl accent-text" />
            <div>
              <p className="text-white text-sm font-medium">Email</p>
              <p className="text-muted text-xs">placeholder@email.com</p>
            </div>
          </a>
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="card-base flex items-center gap-4">
            <FaGithub className="text-xl accent-text" />
            <div>
              <p className="text-white text-sm font-medium">GitHub</p>
              <p className="text-muted text-xs">github.com/username</p>
            </div>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="card-base flex items-center gap-4">
            <FaLinkedin className="text-xl accent-text" />
            <div>
              <p className="text-white text-sm font-medium">LinkedIn</p>
              <p className="text-muted text-xs">linkedin.com/in/username</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  )
}
