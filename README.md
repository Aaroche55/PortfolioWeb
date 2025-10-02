# Portfolio Website

A modern, responsive portfolio website built with React and Tailwind CSS, designed for software engineers and researchers to showcase their work, experience, and achievements.

## Features

- **Responsive Design**: Optimized for all screen sizes (mobile, tablet, desktop)
- **Modern UI**: Clean, professional design with Tailwind CSS
- **Accessibility**: Built with semantic HTML and ARIA attributes
- **Fast Performance**: Built with Vite for optimal development and build performance
- **SEO Ready**: Proper meta tags and semantic structure

## Pages

- **Home**: Introduction, quick stats, and featured work
- **About**: Bio, skills, interests, and personal philosophy
- **Education**: Academic background, certifications, and training
- **Experience**: Professional work history and achievements
- **Publications**: Research papers, articles, and thought leadership
- **Projects**: Portfolio of technical projects with filtering
- **CV**: Downloadable CV in multiple formats
- **Contact**: Contact form and information

## Tech Stack

- **React 18**: Modern React with hooks
- **React Router**: Client-side routing
- **Tailwind CSS**: Utility-first CSS framework
- **Vite**: Fast build tool and development server
- **ESLint**: Code linting and formatting

## Getting Started

### Prerequisites

Make sure you have the following installed:
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start the development server:**
   ```bash
   npm run dev
   ```

3. **Open your browser:**
   Navigate to `http://localhost:5173` to view the website.

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Customization

### Personal Information

Replace the placeholder content with your actual information:

1. **Header Component** (`src/components/Header.jsx`):
   - Update name and social media links
   - Replace placeholder URLs with your profiles

2. **Footer Component** (`src/components/Footer.jsx`):
   - Update contact information
   - Replace social media links

3. **Home Page** (`src/pages/Home.jsx`):
   - Update introduction text
   - Modify quick stats
   - Replace featured work examples

4. **About Page** (`src/pages/About.jsx`):
   - Write your bio
   - Update skills and proficiency levels
   - Modify interests and philosophy

5. **Education Page** (`src/pages/Education.jsx`):
   - Replace with your educational background
   - Update certifications
   - Add your training and workshops

6. **Experience Page** (`src/pages/Experience.jsx`):
   - Replace with your work history
   - Update achievements and technologies
   - Modify responsibilities and highlights

7. **Publications Page** (`src/pages/Publications.jsx`):
   - Add your research papers and articles
   - Update publication details
   - Replace with your research areas

8. **Projects Page** (`src/pages/Projects.jsx`):
   - Add your actual projects
   - Update project descriptions and technologies
   - Replace GitHub and demo links

9. **CV Page** (`src/pages/CV.jsx`):
   - Add your actual CV files to the `public` folder
   - Update contact information
   - Implement actual download functionality

10. **Contact Page** (`src/pages/Contact.jsx`):
    - Update contact information
    - Implement form submission (backend integration)
    - Replace social media links

### Styling

The website uses Tailwind CSS with a custom color scheme defined in `tailwind.config.js`. You can:

- Modify the color palette in the config file
- Update fonts and typography
- Adjust spacing and layout
- Add custom components

### Adding New Pages

1. Create a new component in `src/pages/`
2. Add the route to `src/App.jsx`
3. Update the navigation in `src/components/Header.jsx`

## File Structure

```
src/
├── components/          # Reusable components
│   ├── Header.jsx      # Navigation header
│   ├── Footer.jsx      # Site footer
│   └── Layout.jsx      # Main layout wrapper
├── pages/              # Page components
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Education.jsx   # Education page
│   ├── Experience.jsx  # Experience page
│   ├── Publications.jsx # Publications page
│   ├── Projects.jsx    # Projects page
│   ├── CV.jsx          # CV page
│   └── Contact.jsx     # Contact page
├── App.jsx             # Main app component
├── main.jsx            # App entry point
└── index.css           # Global styles
```

## Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Netlify

1. Build the project: `npm run build`
2. Upload the `dist` folder to Netlify
3. Configure build settings if needed

### GitHub Pages

1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add deploy script to package.json
3. Run: `npm run deploy`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Optimized bundle size with Vite
- Lazy loading for better performance
- Responsive images
- Minimal dependencies

## Accessibility

- Semantic HTML structure
- ARIA labels and attributes
- Keyboard navigation support
- Screen reader friendly
- High contrast support

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

## Support

If you have any questions or need help customizing the website, please open an issue on GitHub.

---

**Note**: This is a template portfolio website. Remember to replace all placeholder content with your actual information before deploying.
