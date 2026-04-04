export default function Footer() {
  return (
    <footer className="border-t border-[hsl(var(--dark-border))] py-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-sm text-muted">
          &copy; {new Date().getFullYear()} Sashenka Osaze. Built with React & Tailwind CSS — still learning, still growing.
        </p>
      </div>
    </footer>
  )
}
