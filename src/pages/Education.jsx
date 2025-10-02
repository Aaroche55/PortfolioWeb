const Education = () => {
  const educationEntries = [
    {
      id: 1,
      degree: 'Integrated Bachelor\'s/Master\'s in Immersive Software Engineering',
      institution: 'University of Limerick',
      location: 'Limerick, Ireland',
      startDate: '2023',
      endDate: '2027',
      status: 'In Progress',
      gpa: '3.4/4.0',
      thesis: null,
      advisor: null,
      relevantCoursework: [
        'Data Structures and Algorithms',
        'Software Engineering',
        'Database Systems',
        'Web Development',
        'Ethical Hacking',
        'Software Testing',
        'Project Management',
        'Computer Networks',
        'Operating Systems',
        'Machine Learning',
        'Discrete Mathematics',
        'Blockchain Technology',
        'Cybersecurity',
      ],
      achievements: [
        'Completed 2 industry internships',
        'Participated in hackathons and coding competitions'
      ]
    }
  ]


  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Education</h1>
          <p className="text-lg text-gray-600">
            My academic journey in software engineering and research.
          </p>
        </div>

        {/* Education Timeline */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Academic Background</h2>
          <div className="space-y-8">
            {educationEntries.map((entry, index) => (
              <div key={entry.id} className="relative">
                {/* Timeline line */}
                {index < educationEntries.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-full bg-gray-300"></div>
                )}
                
                <div className="relative flex items-start">
                  {/* Timeline dot */}
                  <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center z-10">
                    <span className="text-white font-bold text-sm">{index + 1}</span>
                  </div>
                  
                  {/* Content */}
                  <div className="ml-8 flex-1">
                    <div className="card">
                      <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-4">
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-900 mb-2">{entry.degree}</h3>
                          <p className="text-lg text-primary-600 font-semibold mb-1">{entry.institution}</p>
                          <p className="text-gray-600 mb-2">{entry.location}</p>
                          <div className="flex flex-wrap gap-4 text-sm text-gray-500">
                            <span>{entry.startDate} - {entry.endDate}</span>
                            <span>•</span>
                            <span>GPA: {entry.gpa}</span>
                            <span>•</span>
                            <span className={`px-2 py-1 rounded-full text-xs ${
                              entry.status === 'Completed' 
                                ? 'bg-green-100 text-green-800' 
                                : 'bg-blue-100 text-blue-800'
                            }`}>
                              {entry.status}
                            </span>
                          </div>
                        </div>
                      </div>

                      {entry.thesis && (
                        <div className="mb-4">
                          <h4 className="font-semibold text-gray-900 mb-1">Thesis/Dissertation:</h4>
                          <p className="text-gray-700 italic">"{entry.thesis}"</p>
                          {entry.advisor && (
                            <p className="text-sm text-gray-600 mt-1">Advisor: {entry.advisor}</p>
                          )}
                        </div>
                      )}

                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Relevant Coursework:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {entry.relevantCoursework.map((course, courseIndex) => (
                              <li key={courseIndex} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                                {course}
                              </li>
                            ))}
                          </ul>
                        </div>
                        
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                          <ul className="text-sm text-gray-700 space-y-1">
                            {entry.achievements.map((achievement, achievementIndex) => (
                              <li key={achievementIndex} className="flex items-center">
                                <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2"></span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}

export default Education
