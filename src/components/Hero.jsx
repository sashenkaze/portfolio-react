import { HiArrowDown } from "react-icons/hi"

export default function Hero() {
  return (
    <section id="tentang" className="min-h-screen flex items-center">
      <div className="section-container">
        <p className="text-sm accent-text font-mono mb-3">Halo, nama saya</p>
        <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
          Sashenka Osaze
        </h1>
        <p className="text-lg text-muted mb-6">
          Siswa kelas XI jurusan{" "}
          <span className="text-white font-medium">PPLG</span> di SMK Wikrama Bogor.
        </p>
        <p className="text-muted leading-relaxed mb-8 max-w-xl">
          Baru mengenal dunia pemrograman sejak masuk SMK. Sudah mencoba berbagai bahasa dan
          framework — dari HTML, CSS, JavaScript, PHP, Python, hingga Flutter dan React.
          Saat ini tertarik mendalami <span className="accent-text font-medium">Machine Learning</span>,
          walau masih di tahap awal. Masih terus belajar dan 2 bulan lagi memulai PKL.
        </p>
        <a href="#proyek" className="inline-flex items-center gap-2 accent-btn">
          Lihat Proyek Saya <HiArrowDown />
        </a>
      </div>
    </section>
  )
}
