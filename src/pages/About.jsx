const About = () => {
  const skills = [
    { name: 'JavaScript/TypeScript', level: 70, category: 'Programming Languages' },
    { name: 'Python', level: 75, category: 'Programming Languages' },
    { name: 'Java', level: 80, category: 'Programming Languages' },
    { name: 'C++', level: 75, category: 'Programming Languages' },
    { name: 'C', level: 65, category: 'Programming Languages' },
    { name: 'R', level: 90, category: 'Programming Languages' },
    { name: 'Scala', level: 65, category: 'Programming Languages' },
    { name: 'Haskell', level: 60, category: 'Programming Languages' },
    { name: 'React', level: 80, category: 'Frontend' },
    { name: 'Node.js', level: 80, category: 'Backend' },
    { name: 'Flask', level: 65, category: 'Backend' },
    { name: 'Spring Boot', level: 75, category: 'Backend' },
    { name: 'PostgreSQL', level: 85, category: 'Database' },
    { name: 'MySQL', level: 75, category: 'Database' },
    { name: 'SQLite', level: 75, category: 'Database' },
    { name: 'TensorFlow', level: 70, category: 'Machine Learning' },
    { name: 'PyTorch', level: 65, category: 'Machine Learning' },
    { name: 'Caret', level: 90, category: 'Machine Learning' },
    { name: 'Scikit-learn', level: 85, category: 'Machine Learning' },
    { name: 'Tidyverse', level: 80, category: 'Machine Learning' },
    { name: 'Ggplot2', level: 90, category: 'Machine Learning' },
    { name: 'Dplyr', level: 75, category: 'Machine Learning' },
    { name: 'AWS', level: 70, category: 'Cloud' },
    { name: 'Docker', level: 75, category: 'DevOps' },
    { name: 'GitHub Actions', level: 70, category: 'DevOps' },
    { name: 'Gitlab CI/CD', level: 70, category: 'DevOps' },
    { name: 'Git', level: 90, category: 'Version Control' }
  ]

  const interests = [
    'Machine Learning & AI',
    'Research & Innovation',
    'Software Architecture',
    'Open Source Projects',
    'Web Development',
    'Data Science',
    'Quantum Computing',
    'Ethical Hacking',
    'Blockchain Technology',
    'Cybersecurity'
  ]

  const groupedSkills = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = []
    }
    acc[skill.category].push(skill)
    return acc
  }, {})

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Bio Section */}
        <section className="mb-16">
          <div className="card">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">About Me</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-700 mb-4">
                    I am a passionate Software Engineering student currently pursuing an integrated 
                    Bachelor's/Master's degree. My journey in technology began with a fascination for 
                    how software can solve real-world problems, leading me to explore both practical 
                    development and research applications.
                  </p>
                  <p className="text-gray-700 mb-4">
                    Through my internships at a medical research center and a drone delivery company, 
                    I've gained valuable experience in diverse domains - from medical data analysis and machine learning to 
                    autonomous systems development. I believe in the power of clean, maintainable code 
                    and the importance of continuous learning in the rapidly evolving tech landscape.
                  </p>
                  <p className="text-gray-700 mb-4">
                    When I'm not studying or coding, you can find me working on personal projects, 
                    playing videogames, or exploring new technologies. I'm always excited to 
                    take on new challenges and collaborate with fellow students and professionals who 
                    share my passion for technology and innovation.
                  </p>
                </div>
              </div>
              <div className="lg:col-span-1">
                <div className="bg-primary-50 rounded-lg p-6">
                  <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Facts</h3>
                  <ul className="space-y-3 text-sm">
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Currently a student
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Based in Wexford, Ireland
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Open to internships and projects
                    </li>
                    <li className="flex items-center">
                      <span className="w-2 h-2 bg-primary-600 rounded-full mr-3"></span>
                      Passionate about learning
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="section-title">Technical Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Object.entries(groupedSkills).map(([category, categorySkills]) => (
                <div key={category} className="space-y-4">
                  <h3 className="text-lg font-semibold text-gray-900 border-b border-gray-200 pb-2">
                    {category}
                  </h3>
                  <div className="space-y-3">
                    {categorySkills.map((skill) => (
                      <div key={skill.name}>
                        <div className="flex justify-between text-sm mb-1">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-2">
                          <div 
                            className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out" 
                            style={{width: `${skill.level}%`}}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Interests Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="section-title">Research Interests & Focus Areas</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {interests.map((interest, index) => (
                <div 
                  key={index}
                  className="bg-gradient-to-r from-primary-50 to-accent-50 rounded-lg p-4 text-center hover:shadow-md transition-shadow duration-200"
                >
                  <div className="text-primary-600 font-medium text-sm">
                    {interest}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Personal Philosophy */}
        <section>
          <div className="card">
            <h2 className="section-title">My Approach to Work</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Innovation</h3>
                <p className="text-gray-600 text-sm">
                  Always seeking creative solutions and exploring new technologies to solve complex problems.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197m13.5-9a2.5 2.5 0 11-5 0 2.5 2.5 0 015 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Collaboration</h3>
                <p className="text-gray-600 text-sm">
                  Believing in the power of teamwork and knowledge sharing to achieve greater outcomes.
                </p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Excellence</h3>
                <p className="text-gray-600 text-sm">
                  Committed to delivering high-quality solutions and continuously improving my skills.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default About
