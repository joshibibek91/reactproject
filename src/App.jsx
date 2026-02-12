import './App.css';

const services = [
  { title: 'UI/UX Design', color: '#8a2be2' },
  { title: 'Web Design', color: '#f4b400' },
  { title: 'Digital Marketing', color: '#ff4f7b' },
  { title: 'App Development', color: '#5ac8fa' },
];

const skillsLeft = [
  { label: 'Facebook Marketing', value: 90 },
  { label: 'Search Engine Optimization', value: 80 },
  { label: 'Content Writing', value: 95 },
  { label: 'Youtube Marketing', value: 72 },
];

const skillsRight = [
  { label: 'Affiliate Marketing', value: 50 },
  { label: 'Graphic Design', value: 90 },
  { label: 'Web UI Design', value: 49 },
  { label: 'Web Design', value: 70 },
];

const portfolioImages = [
  'https://images.unsplash.com/photo-1473116763249-2faaef81ccda?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1487014679447-9f8336841d58?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1526498460520-4c246339dccb?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=900&q=80',
  'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=900&q=80',
];

function App() {
  return (
    <main className="site">
      <section className="hero-card">
        <header className="top-nav">
          <div className="brand">Dora<span>.</span></div>
          <nav>
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#works">Works</a>
            <a href="#blog">Blog</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="hire-btn">Hire Me</button>
        </header>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Hi, I&apos;m</p>
            <h1>Mary Hardy</h1>
            <h3>Digital Marketing Expert</h3>
            <p className="description">
              Shot what able cold new the see hold. Friendly as an betrayed formerly he.
              Morning because as to society behaved moments.
            </p>
            <div className="hero-actions">
              <button className="primary">Download CV</button>
              <button className="secondary">Contact</button>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-circle" />
            <img
              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=900&q=80"
              alt="Portrait"
            />
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <h4>8 years job</h4>
            <p>Experience</p>
          </div>
          <div className="stat">
            <h4>500+ Projects</h4>
            <p>Completed</p>
          </div>
          <div className="stat">
            <h4>Support</h4>
            <p>Online 24/7</p>
          </div>
        </div>
      </section>

      <section className="services" id="services">
        <div className="services-intro">
          <p className="section-tag">Services</p>
          <h2>I Provide Wide Range Of Digital Services</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span style={{ backgroundColor: service.color }} className="service-dot" />
              <h3>{service.title}</h3>
              <p>Rare to hill enough unto that devourer age your addcosed men Mageeet spirits.</p>
            </article>
          ))}
        </div>
      </section>

      <section className="skills">
        <p className="section-tag">Why Choose Me</p>
        <h2>My Experience Area</h2>
        <div className="skills-grid">
          {[skillsLeft, skillsRight].map((column, idx) => (
            <div key={idx}>
              {column.map((skill) => (
                <div className="skill-item" key={skill.label}>
                  <div className="skill-head">
                    <span>{skill.label}</span>
                    <span>{skill.value}%</span>
                  </div>
                  <div className="skill-bar">
                    <span style={{ width: `${skill.value}%` }} />
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      <section className="portfolio" id="works">
        <p className="section-tag">Portfolio</p>
        <h2>My Amazing Works</h2>
        <div className="portfolio-grid">
          {portfolioImages.map((img, index) => (
            <img key={img} src={img} alt={`Portfolio ${index + 1}`} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default App;
