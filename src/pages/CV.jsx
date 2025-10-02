import { useState } from 'react'

const CV = () => {
  const [selectedFormat, setSelectedFormat] = useState('pdf')

  const cvVersions = [
    {
      id: 'academic',
      title: 'Academic CV',
      description: 'Comprehensive CV highlighting research experience, publications, and academic achievements.',
      format: 'PDF',
      size: '2.1 MB',
      lastUpdated: '2024-01-15',
      pages: 4,
      highlights: [
        'Research experience and publications',
        'Academic awards and honors',
        'Teaching and mentoring experience',
        'Conference presentations'
      ]
    },
    {
      id: 'industry',
      title: 'Industry Resume',
      description: 'Professional resume focused on software engineering experience and technical skills.',
      format: 'PDF',
      size: '1.8 MB',
      lastUpdated: '2024-01-10',
      pages: 2,
      highlights: [
        'Professional work experience',
        'Technical skills and certifications',
        'Project portfolio',
        'Leadership and team experience'
      ]
    },
    {
      id: 'research',
      title: 'Research Portfolio',
      description: 'Detailed portfolio showcasing research projects, methodologies, and outcomes.',
      format: 'PDF',
      size: '3.2 MB',
      lastUpdated: '2024-01-20',
      pages: 6,
      highlights: [
        'Research methodology and approach',
        'Detailed project descriptions',
        'Results and impact analysis',
        'Future research directions'
      ]
    }
  ]

  const handleDownload = (cvId) => {
    // In a real application, this would trigger the actual download
    // For now, we'll show an alert with instructions
    alert(`Downloading ${cvVersions.find(cv => cv.id === cvId)?.title}...\n\nNote: Replace this with actual CV file download functionality.`)
  }

  const handleViewOnline = (cvId) => {
    // In a real application, this would open the CV in a new tab
    alert(`Opening ${cvVersions.find(cv => cv.id === cvId)?.title} in new tab...\n\nNote: Replace this with actual CV viewer functionality.`)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Curriculum Vitae</h1>
          <p className="text-lg text-gray-600">
            Download my CV in different formats tailored for various purposes - academic positions, 
            industry roles, or research opportunities.
          </p>
        </div>

        {/* CV Versions */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Available CV Versions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {cvVersions.map((cv) => (
              <div key={cv.id} className="card hover:shadow-lg transition-shadow duration-200">
                <div className="mb-4">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{cv.title}</h3>
                  <p className="text-gray-700 mb-4">{cv.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded-full">
                      {cv.format}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {cv.size}
                    </span>
                    <span className="px-2 py-1 bg-gray-100 text-gray-800 text-xs rounded-full">
                      {cv.pages} pages
                    </span>
                  </div>
                </div>

                <div className="mb-4">
                  <h4 className="font-semibold text-gray-900 mb-2">Key Highlights:</h4>
                  <ul className="text-sm text-gray-700 space-y-1">
                    {cv.highlights.map((highlight, index) => (
                      <li key={index} className="flex items-center">
                        <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="text-xs text-gray-500 mb-4">
                  Last updated: {cv.lastUpdated}
                </div>

                <div className="flex flex-col sm:flex-row gap-2">
                  <button
                    onClick={() => handleDownload(cv.id)}
                    className="btn-primary text-sm px-4 py-2 flex-1 text-center"
                  >
                    Download PDF
                  </button>
                  <button
                    onClick={() => handleViewOnline(cv.id)}
                    className="btn-secondary text-sm px-4 py-2 flex-1 text-center"
                  >
                    View Online
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* CV Preview Section */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">CV Preview</h2>
            <div className="bg-gray-100 rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">CV Preview</h3>
              <p className="text-gray-600 mb-4">
                Click "View Online" above to see a preview of the CV content.
              </p>
              <p className="text-sm text-gray-500">
                Note: This is a placeholder. In a real application, you would integrate 
                with a PDF viewer or display the CV content directly.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="mb-16">
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Professional Contact</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <span className="text-gray-700">rocheaaron04@gmail.com</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <span className="text-gray-700">+353 85 2012 450</span>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <span className="text-gray-700">Wexford, Ireland</span>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-4">Online Presence</h3>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                    <a href="https://linkedin.com/in/yourprofile" className="text-primary-600 hover:text-primary-700">
                      linkedin.com/in/yourprofile
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                    </svg>
                    <a href="https://github.com/yourusername" className="text-primary-600 hover:text-primary-700">
                      github.com/yourusername
                    </a>
                  </div>
                  <div className="flex items-center">
                    <svg className="w-5 h-5 text-gray-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9v-9m0-9v9" />
                    </svg>
                    <a href="https://yourwebsite.com" className="text-primary-600 hover:text-primary-700">
                      yourwebsite.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Download Instructions */}
        <section>
          <div className="bg-primary-50 rounded-lg p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-4">Download Instructions</h2>
            <div className="space-y-3 text-sm text-gray-700">
              <p>
                <strong>For Academic Positions:</strong> Use the Academic CV which includes detailed research experience, publications, and teaching history.
              </p>
              <p>
                <strong>For Industry Roles:</strong> Use the Industry Resume which focuses on technical skills, professional experience, and project achievements.
              </p>
              <p>
                <strong>For Research Opportunities:</strong> Use the Research Portfolio which provides comprehensive details about your research methodology and outcomes.
              </p>
            </div>
            <div className="mt-4 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <p className="text-sm text-yellow-800">
                <strong>Note:</strong> This is a demo website. In a real application, you would need to:
                <br />• Add actual CV files to the public folder
                <br />• Implement proper download functionality
                <br />• Add PDF viewer integration
                <br />• Update contact information with real details
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default CV
