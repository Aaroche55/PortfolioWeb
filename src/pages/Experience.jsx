const Experience = () => {
  const experiences = [
    {
      id: 1,
      title: 'Software Engineer Intern',
      company: 'Manna Drone Delivery',
      location: 'Dublin, Ireland',
      type: 'Internship',
      startDate: 'June 2025',
      endDate: 'August 2025',
      current: false,
      description: 'Developed software solutions for autonomous drone delivery systems.',
      responsibilities: [
        'Designed and implemented a containerized local development environment, enabling isolated testing of interconnected systems.',
        'Contributed to front-end development and UI enhancements for safety-critical systems using React.',
        'Migrated a safety-critical system between repositories, implementing UI improvements and feature enhancements.',
        'Communicated with stakeholders to clarify project requirements despite minimal initial information.',
        'Adapted to a startup environment, managing changing priorities and evolving requirements.'
      ],
      technologies: ['Markdown', 'Google Meet', 'OneNote'],
      achievements: [
        'Maintained strict separation of development systems from production AWS databases, ensuring safety and reliability.',
        'Upheld high safety and regulatory standards in UI changes for safety-critical systems.',
        'Delivered reliable migration of a system without compromising integrity while improving usability.',
        'Demonstrated strong independent working skills and proactive collaboration in a fast-paced environment.'
      ]
    },
    {
      id: 2,
      title: 'Research Assistant',
      company: 'Infant Research Center',
      location: 'Cork, Ireland',
      type: 'Internship',
      startDate: 'June 2024',
      endDate: 'December 2024',
      current: false,
      description: 'Conducted research in medical technology and data analysis.',
      responsibilities: [
        'Conducted data cleaning, statistical analysis, and machine learning model development using R.',
        'Analyzed large-scale medical datasets to identify trends and build predictive models.',
        'Developed visualizations to communicate findings to both technical and non-technical stakeholders.',
        'Participated in research protocols, ethics processes, and data governance compliance.',
        'Collaborated with clinicians, principal investigators, and research nurses in a multidisciplinary team.'
      ],
      technologies: ['R', 'REDCap', 'Caret', 'TidyR', 'Ggplot2', 'SQL'],
      achievements: [
        'Delivered a research presentation with logical flow that anticipated audience questions.',
        'Applied machine learning methods effectively to healthcare datasets, supporting decision-making.',
        'Strengthened cross-disciplinary communication by presenting complex results in clear, accessible formats.',
        'Reinforced understanding of ethical compliance in medical research and practical ML applications in healthcare.'
      ]
    },
    {
      id: 3,
      title: 'Tutor',
      company: 'First Tutors Ireland ',
      location: 'Wexford, Ireland',
      type: 'Part-time',
      startDate: 'August 2023',
      endDate: 'June 2024',
      current: false,
      description: 'Provided personalised academic support to Leaving Certificate students in Mathematics, Applied Mathematics, and Physics, fostering subject mastery and exam readiness.',
      responsibilities: [
        'Delivered one-on-one tutoring sessions tailored to individual learning needs in Mathematics, Applied Mathematics, and Physics.',
        'Assessed students’ strengths and weaknesses to design targeted learning plans.',
        'Created engaging practice activities and problem sets to reinforce conceptual understanding.'
      ],
      technologies: ['Mathematics', 'Applied Mathematics', 'Physics'],
      achievements: [
        'Helped students improve exam performance through structured, personalized academic support.',
        'Built confidence in problem-solving and analytical thinking for complex mathematical and physics concepts.',
        'Developed adaptable teaching strategies to meet a wide range of student learning styles.'
      ]
    }
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Professional Experience</h1>
          <p className="text-lg text-gray-600">
            My career journey in software engineering and research, showcasing growth, 
            achievements, and the diverse projects I've contributed to.
          </p>
        </div>

        {/* Professional Experience Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Work Experience</h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={exp.id} className="relative">
                {/* Timeline line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-20 w-0.5 h-full bg-gray-300"></div>
                )}
                
                <div className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className={`flex-shrink-0 w-16 h-16 rounded-full flex items-center justify-center z-10 ${
                    exp.current ? 'bg-primary-600' : 'bg-gray-400'
                  }`}>
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="card">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2">
                            <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                            {exp.current && (
                              <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full">
                                Current
                              </span>
                            )}
                          </div>
                          <p className="text-lg text-primary-600 font-semibold mb-1">{exp.company}</p>
                          <p className="text-gray-600 mb-2">{exp.location}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                            <span>{exp.startDate} - {exp.endDate}</span>
                            <span>•</span>
                            <span>{exp.type}</span>
                          </div>
                          <p className="text-gray-700 mb-4">{exp.description}</p>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Key Responsibilities:</h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            {exp.responsibilities.map((responsibility, respIndex) => (
                              <li key={respIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                <span>{responsibility}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">Notable Achievements:</h4>
                          <ul className="text-sm text-gray-700 space-y-2">
                            {exp.achievements.map((achievement, achIndex) => (
                              <li key={achIndex} className="flex items-start">
                                <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-3 mt-2 flex-shrink-0"></span>
                                <span>{achievement}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">Technologies Used:</h4>
                        <div className="flex flex-wrap gap-2">
                          {exp.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex}
                              className="px-3 py-1 bg-primary-100 text-primary-800 text-sm rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Development */}
        <section>
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Professional Development</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Leadership & Management</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                    Team leadership and mentoring
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                    Project management and planning
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                    Cross-functional collaboration
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                    Technical decision making
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Research & Innovation</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2"></span>
                    Academic research and publishing
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2"></span>
                    Algorithm design and optimization
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2"></span>
                    Data analysis and interpretation
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Technical Expertise</h3>
                <ul className="space-y-2 text-sm text-gray-700">
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                    Full-stack development
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                    Machine learning
                  </li>
                  <li className="flex items-center">
                    <span className="w-1.5 h-1.5 bg-green-600 rounded-full mr-2"></span>
                    DevOps and automation
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Experience
