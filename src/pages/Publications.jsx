const Publications = () => {
  const publications = {
    journalPapers: [],
    conferencePapers: [],
    articles: [
      {
        id: 1,
        title: "University of Limerick student’s ‘screening’ project aims to prevent and treat cerebral palsy",
        authors: "Jasmin Griffin",
        venue: "Irish Independent",
        year: 2024,
        date: "October, 2024",
        status: "Published",
        abstract: "Aaron Roche, a 20-year-old Wexford student on the Immersive Software Engineering (ISE) programme at UL, is working on the ELEVATE project, which is a ground-breaking five-year research programme that aims to improve the prevention, detection and treatment of early brain injury and cerebral palsy in Ireland.",
        link: "https://www.independent.ie/regionals/wexford/news/university-of-limerick-students-screening-project-aims-to-prevent-and-treat-cerebral-palsy/a96194449.html"
      }
    ],
    mediaFeatures: [
      {
        id: 2,
        title: "Infant | ISE Residency Partner",
        description: "A video documentary featuring Aaron's work and story",
        venue: "Immersive Software Engineering Youtube Channel",
        year: 2025,
        date: "March, 2025",
        status: "Published",
        type: "Video Documentary",
        duration: "5 minutes",
        abstract: "A short documentary that highlights Aaron Roche's journey, work, and contributions. This video provides insight into his background, motivations, and the impact of his work.",
        link: "https://www.youtube.com/watch?v=cBAcNUxbU5o"
      }
    ]
  }

  const getStatusColor = (status) => {
    switch (status) {
      case 'Published':
        return 'bg-green-100 text-green-800'
      case 'Accepted':
        return 'bg-blue-100 text-blue-800'
      case 'Under Review':
        return 'bg-yellow-100 text-yellow-800'
      case 'Submitted':
        return 'bg-gray-100 text-gray-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const PublicationCard = ({ publication, type }) => (
    <div className="card hover:shadow-lg transition-shadow duration-200">
      <div className="flex justify-between items-start mb-3">
        <h3 className="text-lg font-semibold text-gray-900 leading-tight">
          {publication.title}
        </h3>
        <span className={`px-2 py-1 rounded-full text-xs font-medium ml-4 flex-shrink-0 ${getStatusColor(publication.status)}`}>
          {publication.status}
        </span>
      </div>
      
      <p className="text-gray-600 mb-2 text-sm">
        <strong>Authors:</strong> {publication.authors}
      </p>
      
      <p className="text-gray-600 mb-2 text-sm">
        <strong>Venue:</strong> {publication.venue}
      </p>
      
      <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
        <span>{publication.year}</span>
        {publication.volume && <span>Vol. {publication.volume}</span>}
        {publication.pages && <span>pp. {publication.pages}</span>}
        {publication.date && <span>{publication.date}</span>}
        {publication.citations && (
          <span className="text-primary-600 font-medium">
            {publication.citations} citations
          </span>
        )}
      </div>
      
      {publication.doi && (
        <p className="text-xs text-gray-500 mb-3">
          <strong>DOI:</strong> {publication.doi}
        </p>
      )}
      
      <p className="text-gray-700 text-sm mb-4 leading-relaxed">
        {publication.abstract}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {publication.link && (
          <a
            href={publication.link}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary text-sm px-3 py-1"
          >
            View Publication
          </a>
        )}
        {publication.doi && (
          <a
            href={`https://doi.org/${publication.doi}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-secondary text-sm px-3 py-1"
          >
            DOI Link
          </a>
        )}
      </div>
    </div>
  )

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Publications & Media</h1>
          <p className="text-lg text-gray-600">
            Articles and media features highlighting my work, achievements, and contributions 
            in software engineering and technology innovation.
          </p>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {publications.journalPapers.length + publications.conferencePapers.length}
            </div>
            <div className="text-gray-600">Research Papers</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {publications.articles.length}
            </div>
            <div className="text-gray-600">Featured Articles</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {publications.mediaFeatures.length}
            </div>
            <div className="text-gray-600">Media Features</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {Math.max(...Object.values(publications).flat().map(p => p.year))}
            </div>
            <div className="text-gray-600">Latest Year</div>
          </div>
        </div>

        {/* Featured Articles */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-primary-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              A
            </span>
            Featured Articles
          </h2>
          <div className="space-y-6">
            {publications.articles.map((article) => (
              <PublicationCard key={article.id} publication={article} type="article" />
            ))}
          </div>
        </section>

        {/* Media Features */}
        <section className="mb-16">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 flex items-center">
            <span className="w-8 h-8 bg-accent-600 rounded-full flex items-center justify-center text-white text-sm font-bold mr-3">
              M
            </span>
            Media Features
          </h2>
          <div className="space-y-6">
            {publications.mediaFeatures.map((feature) => (
              <div key={feature.id} className="card hover:shadow-lg transition-shadow duration-200">
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-lg font-semibold text-gray-900 leading-tight">
                    {feature.title}
                  </h3>
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded-full ml-4 flex-shrink-0">
                    {feature.status}
                  </span>
                </div>
                
                <p className="text-gray-600 mb-2 text-sm">
                  <strong>Venue:</strong> {feature.venue}
                </p>
                
                <div className="flex flex-wrap gap-4 text-sm text-gray-500 mb-3">
                  <span>{feature.year}</span>
                  <span>•</span>
                  <span>{feature.type}</span>
                  <span>•</span>
                  <span>{feature.duration}</span>
                </div>
                
                <p className="text-gray-700 text-sm mb-4 leading-relaxed">
                  {feature.abstract}
                </p>
                
                <div className="flex flex-wrap gap-2">
                  {feature.link && (
                    <a
                      href={feature.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary text-sm px-3 py-1"
                    >
                      Watch Video
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Future Publications */}
        <section>
          <div className="card">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Future Publications & Research</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-gradient-to-r from-primary-50 to-primary-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Software Engineering</h3>
                <p className="text-sm text-gray-700">
                  Web development, system design, and software architecture patterns.
                </p>
              </div>
              <div className="bg-gradient-to-r from-accent-50 to-accent-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Technology Innovation</h3>
                <p className="text-sm text-gray-700">
                  Emerging technologies, development methodologies, and best practices.
                </p>
              </div>
              <div className="bg-gradient-to-r from-green-50 to-green-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Open Source</h3>
                <p className="text-sm text-gray-700">
                  Contributing to open source projects and sharing knowledge with the community.
                </p>
              </div>
              <div className="bg-gradient-to-r from-purple-50 to-purple-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Technical Writing</h3>
                <p className="text-sm text-gray-700">
                  Blog posts, tutorials, and technical documentation.
                </p>
              </div>
              <div className="bg-gradient-to-r from-yellow-50 to-yellow-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Industry Insights</h3>
                <p className="text-sm text-gray-700">
                  Analysis of industry trends and technology adoption.
                </p>
              </div>
              <div className="bg-gradient-to-r from-red-50 to-red-100 rounded-lg p-4">
                <h3 className="font-semibold text-gray-900 mb-2">Career Development</h3>
                <p className="text-sm text-gray-700">
                  Mentoring, career guidance, and professional development.
                </p>
              </div>
            </div>
            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <p className="text-sm text-blue-800">
                <strong>Note:</strong> Aaron is actively working on expanding his publication portfolio. 
                If you're interested in collaborating on research or writing projects, 
                please feel free to reach out through the contact page.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Publications
