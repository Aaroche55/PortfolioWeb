import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-accent-50">
      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="text-center">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary-600 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-white font-bold text-2xl">AR</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4">
              Aaron Roche
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-2">
              Software Engineering Student & Aspiring Researcher
            </p>
            <p className="text-lg text-gray-500 max-w-2xl mx-auto">
              Passionate about building innovative solutions and advancing technology through research. 
              Currently pursuing an integrated Bachelor's/Master's in Immersive Software Engineering with experience in 
              research, machine learning and autonomous systems.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Link 
              to="/about" 
              className="btn-primary text-lg px-8 py-3"
            >
              Learn More About Me
            </Link>
            <Link 
              to="/contact" 
              className="btn-secondary text-lg px-8 py-3"
            >
              Get In Touch
            </Link>
          </div>
          
          {/* Quick Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <div className="text-gray-600">Internships Completed</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">3</div>
              <div className="text-gray-600">Projects Completed</div>
            </div>
            <div className="card text-center">
              <div className="text-3xl font-bold text-primary-600 mb-2">2</div>
              <div className="text-gray-600">Media Features</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Recent Work */}
          <div className="card">
            <h2 className="section-title">Recent Work</h2>
            <div className="space-y-4">
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900">Medical Research Assistant</h3>
                <p className="text-gray-600 text-sm">Research center internship</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900">Drone Delivery Software</h3>
                <p className="text-gray-600 text-sm">Software engineering internship</p>
              </div>
              <div className="border-l-4 border-primary-500 pl-4">
                <h3 className="font-semibold text-gray-900">Academic Projects</h3>
                <p className="text-gray-600 text-sm">Full-stack development and algorithms</p>
              </div>
            </div>
            <Link to="/projects" className="btn-primary mt-4 inline-block">
              View All Projects
            </Link>
          </div>

          {/* Skills Preview */}
          <div className="card">
            <h2 className="section-title">Core Skills</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>R</span>
                  <span>Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{width: '80%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Python</span>
                  <span>Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{width: '60%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Machine Learning</span>
                  <span>Advanced</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{width: '75%'}}></div>
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span>Web Development</span>
                  <span>Intermediate</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div className="bg-primary-600 h-2 rounded-full" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>
            <Link to="/about" className="btn-primary mt-4 inline-block">
              View Full Skills
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Let's Work Together
          </h2>
          <p className="text-xl mb-8 text-primary-100">
            I'm always interested in new opportunities and collaborations. 
            Whether you're looking for a software engineer or research partner, 
            let's discuss how we can work together.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/contact" 
              className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Contact Me
            </Link>
            <a 
              href="/cv" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
