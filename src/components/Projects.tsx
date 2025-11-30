const projects = [
  {
    title: 'PaperPal IQ',
    description: 'AI-powered research paper summarizer with 5 audience levels (elementary to expert). Uses GPT-4o-mini, Next.js, Supabase, and rate limiting.',
    tags: ['Next.js', 'TypeScript', 'OpenAI', 'Supabase'],
    color: 'bg-neon-red',
    link: "https://paperpal-iq.vercel.app/",
  },
  {
    title: 'GitaGPT',
    description: 'Bhagavad Gita chatbot powered by RAG (Retrieval-Augmented Generation) with ChromaDB vector search, GPT-3.5, and a chat interface.',
    tags: ['Next.js', 'FastAPI', 'ChromaDB', 'OpenAI'],
    color: 'bg-yellow-300',
    link: 'https://github.com/adarshgogineni/GitaGPT',
  },
  {
    title: 'Anime Recommender',
    description: 'ML-powered anime recommendation system using Cosine Similarity. Find similar anime based on genre, type, episodes, and ratings with a user-friendly interface.',
    tags: ['Python', 'Flask', 'ML', 'Cosine Similarity'],
    color: 'bg-purple-300',
    link: 'https://github.com/adarshgogineni/AnimeRecommenderFlask',
  },
  {
    title: 'Aerial Anomaly Explorer',
    description: 'Interactive map visualizing sighting reports with ML-powered spatiotemporal anomaly detection, pattern clustering, and temporal exploration using Isolation Forest.',
    tags: ['Next.js', 'Mapbox', 'Python', 'ML'],
    color: 'bg-orange-300',
    link: 'https://github.com/adarshgogineni/Aerial-Anomaly-Explorer',
  },
  {
    title: 'WasteWizard',
    description: 'AI recycling assistant using image recognition to analyze recycling symbols and determine recyclability. Features gamified incentives for sustainable waste management.',
    tags: ['Python', 'Flask', 'TensorFlow', 'Image Recognition'],
    color: 'bg-green-300',
    link: 'https://github.com/adarshgogineni/WasteWizard',
  },
  {
    title: 'Portfolio Website',
    description: 'A bold, neo-brutalist portfolio showcasing creative work.',
    tags: ['React', 'Vite', 'Figma'],
    color: 'bg-cyan-300',
    link: 'https://github.com/adarshgogineni/NeoBrutal_Portfolio_2025',
  },
];

export function Projects() {
  return (
    <section id="projects" className="min-h-screen py-20 bg-neon-pink">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-jetbrains font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 inline-block bg-white border-4 border-black px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] rotate-[1deg]">
            Projects
          </h2>
          <p className="font-jua text-xl sm:text-2xl mt-8 max-w-2xl">
            Here are some of my recent projects that showcase my skills and creativity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shadow */}
              <div className="absolute inset-0 bg-black translate-x-3 translate-y-3 group-hover:translate-x-4 group-hover:translate-y-4 transition-transform"></div>

              {/* Card */}
              <div className={`relative ${project.color} border-4 border-black p-6 h-full flex flex-col transition-transform group-hover:-translate-y-1`}>
                <h3 className="font-jetbrains font-extrabold text-2xl mb-3">
                  {project.title}
                </h3>

                <p className="font-jua text-lg mb-4 flex-grow">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="font-k2d font-bold text-sm px-3 py-1 bg-white border-2 border-black"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-k2d font-extrabold text-lg px-4 py-2 bg-black text-white border-2 border-black hover:bg-white hover:text-black transition-colors text-center"
                >
                  View Project →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
