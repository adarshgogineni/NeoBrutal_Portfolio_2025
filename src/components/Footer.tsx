export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white border-t-4 border-black py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="font-jetbrains font-bold text-lg">
            <span className="bg-neon-pink text-black px-3 py-1 border-2 border-white">
              Adarsh Gogineni
            </span>
          </div>

          <div className="font-jua text-center md:text-right">
            <p>© {currentYear} All rights reserved.</p>
            <p className="text-sm opacity-80">
              Designed with <span className="text-neon-pink">❤️</span> and Neo-Brutalism
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
