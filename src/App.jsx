// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App


// import { useState } from 'react';

// const App = () => {
//   const [activeSection, setActiveSection] = useState('home');
  
//   // Sample projects data
//   const projects = [
//     { id: 1, title: 'Project 1', description: 'A sample project description', tech: 'React, Node.js' },
//     { id: 2, title: 'Project 2', description: 'Another project description', tech: 'Python, Django' },
//     { id: 3, title: 'Project 3', description: 'Third project details', tech: 'JavaScript, MongoDB' },
//   ];

//   return (
//     <div className="min-h-screen bg-gray-100">
//       {/* Navigation */}
//       <nav className="fixed w-full bg-gray-800 text-white p-6 z-10">
//         <div className="container mx-auto flex justify-between items-center">
//           <h1 className="text-2xl font-bold">Your Name</h1>
//           <ul className="flex space-x-6">
//             {['Home', 'About', 'Projects', 'Contact'].map((item) => (
//               <li key={item}>
//                 <a 
//                   href={`#${item.toLowerCase()}`} 
//                   className={`hover:text-gray-300 transition-colors ${activeSection === item.toLowerCase() ? 'text-gray-300' : ''}`}
//                   onClick={() => setActiveSection(item.toLowerCase())}
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>
//       </nav>

//       {/* Hero Section */}
//       <section id="home" className="pt-32 pb-20 px-6 bg-gray-100">
//         <div className="container mx-auto text-center">
//           <h2 className="text-5xl font-bold text-gray-800 mb-4">Welcome to My Portfolio</h2>
//           <p className="text-xl text-gray-600 mb-8">Frontend Developer & UI Designer</p>
//           <button className="bg-gray-700 text-white px-8 py-3 rounded-lg hover:bg-gray-600 transition-colors">
//             View My Work
//           </button>
//         </div>
//       </section>

//       {/* About Section */}
//       <section id="about" className="py-20 px-6 bg-gray-200">
//         <div className="container mx-auto max-w-4xl">
//           <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">About Me</h2>
//           <div className="grid md:grid-cols-2 gap-8">
//             <div className="space-y-4 text-gray-700">
//               <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
//               <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
//             </div>
//             <div className="bg-gray-300 h-64 rounded-lg"></div> {/* Placeholder for image */}
//           </div>
//         </div>
//       </section>

//       {/* Projects Section */}
//       <section id="projects" className="py-20 px-6 bg-gray-100">
//         <div className="container mx-auto max-w-6xl">
//           <h2 className="text-4xl font-bold text-gray-800 mb-12 text-center">My Projects</h2>
//           <div className="grid md:grid-cols-3 gap-6">
//             {projects.map((project) => (
//               <div key={project.id} className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow">
//                 <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
//                 <p className="text-gray-600 mb-4">{project.description}</p>
//                 <p className="text-sm text-gray-500">{project.tech}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Contact Section */}
//       <section id="contact" className="py-20 px-6 bg-gray-200">
//         <div className="container mx-auto max-w-4xl">
//           <h2 className="text-4xl font-bold text-gray-800 mb-8 text-center">Contact Me</h2>
//           <form className="space-y-6">
//             <div>
//               <input 
//                 type="text" 
//                 placeholder="Your Name" 
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
//               />
//             </div>
//             <div>
//               <input 
//                 type="email" 
//                 placeholder="Your Email" 
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
//               />
//             </div>
//             <div>
//               <textarea 
//                 placeholder="Your Message" 
//                 rows="4"
//                 className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-400"
//               ></textarea>
//             </div>
//             <button className="w-full bg-gray-700 text-white py-3 rounded-lg hover:bg-gray-600 transition-colors">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </section>

//       {/* Footer */}
//       <footer className="bg-gray-800 text-white py-6 text-center">
//         <p className="text-gray-400">&copy; 2023 Your Name. All rights reserved.</p>
//       </footer>
//     </div>
//   );
// };

// export default App;

import { useState } from 'react';

const App = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const projects = [
    { id: 1, title: 'Web App', tech: 'React, Node.js', description: 'E-commerce platform with payment gateway' },
    { id: 2, title: 'Mobile App', tech: 'React Native', description: 'Fitness tracking application' },
    { id: 3, title: 'Dashboard', tech: 'Vue.js', description: 'Analytics dashboard with real-time data' },
  ];

  return (
    <div style={styles.container}>
      {/* Navigation */}
      <nav style={styles.navbar}>
        <div style={styles.navContent}>
          <h1 style={styles.logo}>Welcome</h1>
          <div style={styles.menuIcon} onClick={() => setIsMenuOpen(!isMenuOpen)}>☰</div>
          <ul style={{...styles.navLinks, display: isMenuOpen ? 'flex' : 'none'}}>
            {['Home', 'Projects', 'About', 'Contact'].map((item) => (
              <li key={item} style={styles.navItem}>
                <a
                  href={`#${item.toLowerCase()}`}
                  style={{...styles.navLink, color: activeTab === item.toLowerCase() ? '#1e3a8a' : '#fff'}}
                  onClick={() => {
                    setActiveTab(item.toLowerCase());
                    setIsMenuOpen(false);
                  }}
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" style={styles.hero}>
        <div style={styles.heroContent}>
          <h2 style={styles.heroTitle}> I'm a frontend developer</h2>
          <p style={styles.heroText}>Turning ideas into interactive experiences</p>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" style={styles.section}>
        <h2 style={styles.sectionTitle}>Featured Projects</h2>
        <div style={styles.projectsContainer}>
          {projects.map((project) => (
            <div key={project.id} style={styles.projectCard}>
              <div style={styles.projectImage}></div>
              <h3 style={styles.projectTitle}>{project.title}</h3>
              <p style={styles.projectTech}>{project.tech}</p>
              <p style={styles.projectDesc}>{project.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section id="about" style={{...styles.section, backgroundColor: '#f0f9ff'}}>
        <div style={styles.aboutContent}>
          <div style={styles.aboutText}>
            <h2 style={styles.sectionTitle}>About Me</h2>
            <p style={styles.aboutPara}>
              Passionate developer with 3+ years of experience in creating web applications.
              Specialized in modern JavaScript frameworks and user-centric design.
            </p>
          </div>
          <div style={styles.skillsBox}>
            <h3 style={styles.skillsTitle}>Technical Skills</h3>
            <ul style={styles.skillsList}>
              {['React', 'JavaScript', 'HTML5', 'CSS3', 'Node.js', 'Git'].map((skill) => (
                <li key={skill} style={styles.skillItem}>{skill}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" style={styles.section}>
        <h2 style={styles.sectionTitle}>Get in Touch</h2>
        <form style={styles.contactForm}>
          <input type="text" placeholder="Name" style={styles.formInput} />
          <input type="email" placeholder="Email" style={styles.formInput} />
          <textarea placeholder="Message" rows="5" style={styles.formTextarea}></textarea>
          <button type="submit" style={styles.submitButton}>Send Message</button>
        </form>
      </section>

      {/* Footer */}
      <footer style={styles.footer}>
        <p style={styles.footerText}>© 2023 Your Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#f0f9ff',
  },
  navbar: {
    backgroundColor: '#1e3a8a',
    padding: '1rem',
    position: 'fixed',
    width: '100%',
    zIndex: 1000,
  },
  navContent: {
    maxWidth: '1200px',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    color: 'white',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  navLinks: {
    listStyle: 'none',
    gap: '2rem',
    alignItems: 'center',
  },
  navItem: {
    margin: '0 1rem',
  },
  navLink: {
    textDecoration: 'none',
    fontSize: '1.1rem',
    transition: 'color 0.3s ease',
  },
  hero: {
    paddingTop: '6rem',
    paddingBottom: '4rem',
    backgroundColor: '#bfdbfe',
    textAlign: 'center',
  },
  heroContent: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '2rem',
  },
  heroTitle: {
    fontSize: '2.5rem',
    color: '#1e3a8a',
    marginBottom: '1rem',
  },
  heroText: {
    fontSize: '1.2rem',
    color: '#2563eb',
  },
  section: {
    padding: '4rem 2rem',
  },
  sectionTitle: {
    fontSize: '2rem',
    color: '#1e3a8a',
    textAlign: 'center',
    marginBottom: '3rem',
  },
  projectsContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '2rem',
    maxWidth: '1200px',
    margin: '0 auto',
  },
  projectCard: {
    backgroundColor: 'white',
    borderRadius: '10px',
    padding: '1.5rem',
    boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  },
  projectTitle: {
    color: '#1e3a8a',
    fontSize: '1.3rem',
    margin: '1rem 0',
  },
  projectTech: {
    color: '#3b82f6',
    fontSize: '0.9rem',
    marginBottom: '1rem',
  },
  projectDesc: {
    color: '#64748b',
    lineHeight: '1.6',
  },
  contactForm: {
    maxWidth: '600px',
    margin: '0 auto',
    display: 'flex',
    flexDirection: 'column',
    gap: '1rem',
  },
  formInput: {
    padding: '0.8rem',
    border: '1px solid #bfdbfe',
    borderRadius: '5px',
    fontSize: '1rem',
  },
  formTextarea: {
    padding: '0.8rem',
    border: '1px solid #bfdbfe',
    borderRadius: '5px',
    fontSize: '1rem',
    resize: 'vertical',
  },
  submitButton: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    padding: '1rem',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    fontSize: '1rem',
    transition: 'background-color 0.3s ease',
  },
  footer: {
    backgroundColor: '#1e3a8a',
    color: 'white',
    textAlign: 'center',
    padding: '1.5rem',
    marginTop: '3rem',
  },
  menuIcon: {
    display: 'none',
    color: 'white',
    fontSize: '1.5rem',
    cursor: 'pointer',
  },
  // Responsive styles
  '@media (max-width: 768px)': {
    navLinks: {
      display: 'none',
      position: 'absolute',
      top: '100%',
      left: 0,
      right: 0,
      backgroundColor: '#1e3a8a',
      flexDirection: 'column',
      padding: '1rem',
    },
    menuIcon: {
      display: 'block',
    },
  },
};

export default App;