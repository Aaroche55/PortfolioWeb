import { useState } from 'react'

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const projects = [
    {
      id: 1,
      title: "AI Essay Classifier",
      description: "A machine learning system that analyzes essays and predicts if they are AI-generated with 95% accuracy. The system uses deep learning models trained on thousands of essays.",
      category: "machine-learning",
      status: "Completed",
      year: 2024,
      technologies: ["R", "Caret", "TidyR", "Ggplot2", "Shiny"],
      features: [
        "Binary classification (Human vs AI-written)",
        "Confidence scoring for predictions",
        "Interactive R Shiny web application",
        "Model performance metrics visualization"
      ],
      github: "https://github.com/Aaroche55/AI_Project",
      demo: null,
      image: "/api/placeholder/600/400",
      highlights: [
        "95% accuracy in AI detection",
        "Trained on diverse essay datasets"
      ]
    },
    {
      id: 2,
      title: "Personal Portfolio Website",
      description: "A modern, responsive portfolio website built with React and Tailwind CSS to showcase my work, experience, and projects as a software engineering student and aspiring researcher.",
      category: "web-development",
      status: "Completed",
      year: 2025,
      technologies: ["React", "Tailwind CSS", "React Router", "Vite", "JavaScript"],
      features: [
        "Responsive design for all devices",
        "Multiple pages with React Router navigation",
        "Contact form with validation",
        "Project showcase with filtering"
      ],
      github: "https://github.com/Aaroche55/PortfolioWeb",
      demo: null,
      image: "/api/placeholder/600/400",
      highlights: [
        "Clean, professional design",
        "Optimized performance with Vite"
      ]
    },
    {
      id: 3,
      title: "Ticket DApp - Web3 Ticketing System",
      description: "A decentralized application (DApp) for a ticketing system deployed on the Ethereum Holesky testnet. Features an ERC-20 token implementation with buy and return ticket functionality, smart contracts, and a complete front-end interface.",
      category: "blockchain",
      status: "Completed",
      year: 2024,
      technologies: ["Solidity", "Hardhat", "Web3.js", "MetaMask", "JavaScript", "HTML/CSS"],
      features: [
        "ERC-20 token smart contract",
        "Buy and return ticket functionality",
        "Wallet creation and management",
        "Balance checker for HETH & tickets"
      ],
      github: "https://github.com/Aaroche55/BlockchainProject",
      demo: null,
      image: "/api/placeholder/600/400",
      highlights: [
        "Deployed on Ethereum Holesky testnet",
        "MetaMask integration"
      ]
    }
  ]

  const categories = [
    { id: 'all', name: 'All Projects', count: projects.length },
    { id: 'machine-learning', name: 'Machine Learning', count: projects.filter(p => p.category === 'machine-learning').length },
    { id: 'web-development', name: 'Web Development', count: projects.filter(p => p.category === 'web-development').length },
    { id: 'blockchain', name: 'Blockchain', count: projects.filter(p => p.category === 'blockchain').length }
  ]

  const filteredProjects = selectedCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === selectedCategory)

  const getStatusColor = (status) => {
    switch (status) {
      case 'Completed':
        return 'bg-green-100 text-green-800'
      case 'In Progress':
        return 'bg-blue-100 text-blue-800'
      case 'Planned':
        return 'bg-yellow-100 text-yellow-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case 'machine-learning':
        return 'bg-purple-100 text-purple-800'
      case 'web-development':
        return 'bg-blue-100 text-blue-800'
      case 'blockchain':
        return 'bg-orange-100 text-orange-800'
      case 'data-science':
        return 'bg-green-100 text-green-800'
      default:
        return 'bg-gray-100 text-gray-800'
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Projects</h1>
          <p className="text-lg text-gray-600">
            A showcase of my technical projects spanning machine learning, web development, 
            blockchain, and data science. Each project demonstrates different aspects of my 
            skills and problem-solving approach.
          </p>
        </div>

        {/* Project Statistics */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {projects.length}
            </div>
            <div className="text-gray-600">Total Projects</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {projects.filter(p => p.status === 'Completed').length}
            </div>
            <div className="text-gray-600">Completed</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {projects.filter(p => p.github).length}
            </div>
            <div className="text-gray-600">Open Source</div>
          </div>
          <div className="card text-center">
            <div className="text-3xl font-bold text-primary-600 mb-2">
              {projects.filter(p => p.demo).length}
            </div>
            <div className="text-gray-600">Live Demos</div>
          </div>
        </div>

        {/* Category Filter */}
        <div className="mb-8">
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <button
                key={category.id}
                onClick={() => setSelectedCategory(category.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  selectedCategory === category.id
                    ? 'bg-primary-600 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                }`}
              >
                {category.name} ({category.count})
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {filteredProjects.map((project) => (
            <div key={project.id} className="card hover:shadow-lg transition-shadow duration-200">
              {/* Project Header */}
              <div className="flex justify-between items-start mb-4">
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getStatusColor(project.status)}`}>
                      {project.status}
                    </span>
                    <span className={`px-2 py-1 rounded-full text-xs font-medium ${getCategoryColor(project.category)}`}>
                      {categories.find(c => c.id === project.category)?.name}
                    </span>
                    <span className="px-2 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                      {project.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* Project Description */}
              <p className="text-gray-700 mb-4 leading-relaxed">
                {project.description}
              </p>

              {/* Key Features */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Key Features:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {project.features.slice(0, 4).map((feature, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-primary-600 rounded-full mr-2"></span>
                      {feature}
                    </li>
                  ))}
                  {project.features.length > 4 && (
                    <li className="text-gray-500 text-xs">
                      +{project.features.length - 4} more features
                    </li>
                  )}
                </ul>
              </div>

              {/* Technologies */}
              <div className="mb-4">
                <h4 className="font-semibold text-gray-900 mb-2">Technologies:</h4>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-2 py-1 bg-primary-100 text-primary-800 text-xs rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Highlights */}
              <div className="mb-6">
                <h4 className="font-semibold text-gray-900 mb-2">Key Achievements:</h4>
                <ul className="text-sm text-gray-700 space-y-1">
                  {project.highlights.slice(0, 2).map((highlight, index) => (
                    <li key={index} className="flex items-center">
                      <span className="w-1.5 h-1.5 bg-accent-600 rounded-full mr-2"></span>
                      {highlight}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-2">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary text-sm px-4 py-2"
                  >
                    View Code
                  </a>
                )}
                {project.demo && (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary text-sm px-4 py-2"
                  >
                    Live Demo
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <section className="mt-16">
          <div className="bg-primary-600 rounded-2xl p-8 md:p-12 text-center text-white">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Interested in Collaborating?
            </h2>
            <p className="text-xl mb-8 text-primary-100">
              I'm always excited to work on new projects and collaborate with fellow developers. 
              Whether you have an idea for a startup, need help with a technical challenge, 
              or want to contribute to open source, let's connect!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a 
                href="/contact" 
                className="bg-white text-primary-600 hover:bg-gray-100 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                Get In Touch
              </a>
              <a 
                href="https://github.com/Aaroche55" 
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
              >
                View GitHub
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default Projects
