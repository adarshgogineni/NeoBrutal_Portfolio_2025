const skills = [
  { name: 'Python', color: 'bg-blue-400', darkColor: 'dark:bg-blue-500' },
  { name: 'Machine Learning (scikit-learn, XGBoost)', color: 'bg-blue-600', darkColor: 'dark:bg-blue-700' },
  { name: 'Deep Learning (PyTorch / TensorFlow)', color: 'bg-yellow-400', darkColor: 'dark:bg-yellow-500' },
  { name: 'NLP & LLMs (RAG, LangChain, OpenAI API)', color: 'bg-orange-400', darkColor: 'dark:bg-orange-500' },
  { name: 'SQL & Data Modeling', color: 'bg-cyan-400', darkColor: 'dark:bg-cyan-500' },
  { name: 'Data Engineering (ETL,Airflow, Spark)', color: 'bg-purple-400', darkColor: 'dark:bg-purple-600' },
  { name: 'Cloud (AWS/Azure/GCP)', color: 'bg-pink-400', darkColor: 'dark:bg-pink-500' },
  { name: 'MLOps (Docker, CI/CD)', color: 'bg-green-400', darkColor: 'dark:bg-green-500' },
];


export function Skills() {
  return (
    <section id="skills" className="min-h-screen py-20 bg-neon-green dark:bg-gray-800 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12">
          <h2 className="font-jetbrains font-extrabold text-4xl sm:text-5xl md:text-6xl mb-4 inline-block bg-white dark:bg-neon-purple border-4 border-black dark:border-neon-green px-6 py-3 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:shadow-[8px_8px_0px_0px_rgba(232,255,168,1)] rotate-[-1deg] dark:text-white">
            My Skills
          </h2>
          <p className="font-jua text-xl sm:text-2xl mt-8 max-w-2xl dark:text-white">
          I specialize in building AI powered applications, machine learning models, and data pipelines — from raw data to deployed products.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className="group relative"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Shadow */}
              <div className="absolute inset-0 bg-black dark:bg-neon-green translate-x-2 translate-y-2 group-hover:translate-x-3 group-hover:translate-y-3 transition-transform"></div>

              {/* Card */}
              <div className={`relative ${skill.color} ${skill.darkColor} border-4 border-black dark:border-neon-green p-6 transition-transform group-hover:-translate-y-1 h-32 flex items-center justify-center`}>
                <h3 className="font-jetbrains font-extrabold text-xl text-center leading-tight dark:text-white">
                  {skill.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* About Section */}
        <div className="mt-16 bg-white dark:bg-gray-900 border-4 border-black dark:border-neon-green p-8 md:p-12 shadow-[12px_12px_0px_0px_rgba(0,0,0,1)] dark:shadow-[12px_12px_0px_0px_rgba(232,255,168,1)]">
          <h3 className="font-jetbrains font-extrabold text-3xl sm:text-4xl mb-6 dark:text-white">
            About Me
          </h3>
          <div className="font-jua text-lg sm:text-xl space-y-4 max-w-3xl dark:text-gray-200">
          <p>
            Hi! I'm Adarsh, a developer focused on AI, machine learning, and data. I enjoy taking messy
            real-world data and turning it into useful models, APIs, and tools that people actually use.
          </p>
          <p>
            My work sits at the intersection of ML engineering, data science, and product: I design and train
            models, build data pipelines, and ship web apps that put those models in front of users.
            Outside of coding, I'm usually reading ML papers, tinkering with new tools, or experimenting with
            side projects around LLMs and RAG.
          </p>
          <p>
            When I’m off the computer, you’ll probably find me playing volleyball, watching movies and anime,
            going down rabbit holes about space, or exploring different ideas around
            philosophy. Those interests usually sneak back into my projects in one
            way or another.
          </p>
          </div>
        </div>
      </div>
    </section>
  );
}
