import { useState } from 'react';
import profileImage from '../assets/IMG_2145.jpeg';
import resumePDF from '../assets/resume.pdf';

export function Hero() {
  const [waveKey, setWaveKey] = useState(0);
  const [bounceKey, setBounceKey] = useState(0);

  const restartWaveAnimation = () => {
    setWaveKey(prev => prev + 1);
  };

  const restartBounceAnimation = () => {
    setBounceKey(prev => prev + 1);
  };
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 md:pt-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6">
            <div className="font-jetbrains font-extrabold">
              <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl mb-2">
                Hello! <span
                  key={waveKey}
                  onClick={restartWaveAnimation}
                  className="inline-block animate-wave cursor-pointer hover:scale-110 transition-transform"
                  title="Click to wave again!"
                >
                  👋
                </span>
              </h1>
            </div>

            <div className="font-jua text-2xl sm:text-3xl md:text-4xl space-y-2">
              <p>Hey! I'm Adarsh,</p>
              <p className="text-lg sm:text-xl md:text-2xl opacity-80">I'm focused on...</p>
            </div>

            {/* Role Badge */}
            <div className="relative inline-block">
              <div className="bg-purple-600 text-white font-jetbrains font-extrabold px-8 py-4 border-4 border-black shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[-2deg] hover:rotate-0 transition-transform">
                <p className="text-xl sm:text-2xl">AI & Machine Learning</p>
                <p className="text-xl sm:text-2xl">Data Science & Data Engineering</p>
                <p className="text-xl sm:text-2xl">AI Engineering</p>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href="#projects"
                className="font-k2d font-extrabold text-lg px-6 py-3 bg-neon-green border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="font-k2d font-extrabold text-lg px-6 py-3 bg-neon-purple border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Contact Me
              </a>
              <a
                href={resumePDF}
                target="_blank"
                rel="noopener noreferrer"
                className="font-k2d font-extrabold text-lg px-6 py-3 bg-neon-orange border-4 border-black shadow-[6px_6px_0px_0px_rgba(0,0,0,1)] hover:translate-y-[-2px] hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] transition-all"
              >
                Resume
              </a>
            </div>
          </div>

          {/* Right Content - Photo */}
          <div className="flex justify-center md:justify-end">
            <div className="relative">
              {/* Shadow effect */}
              <div className="absolute inset-0 bg-black translate-x-4 translate-y-4"></div>
              {/* Main photo container */}
              <div className="relative border-4 border-black bg-cyan-400 p-4 w-72 sm:w-80 md:w-96">
                <div className="aspect-[3/4] bg-gray-300 border-4 border-black overflow-hidden">
                  <img
                    src={profileImage}
                    alt="Adarsh Gogineni"
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Name tag */}
                <div className="mt-4 bg-neon-pink border-4 border-black p-3 text-center">
                  <p className="font-jetbrains font-bold text-xl">Adarsh Gogineni</p>
                </div>
              </div>
              {/* Decorative pixel heart */}
              <div
                key={bounceKey}
                onClick={restartBounceAnimation}
                className="absolute -top-8 -right-8 text-6xl rotate-12 animate-bounce-slow cursor-pointer hover:scale-110 transition-transform"
                title="Click to bounce again!"
              >
                🤖
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
