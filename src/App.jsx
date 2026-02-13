import { useEffect, useRef, useState } from 'react';
import './App.css';
import profileImg from './assets/profile.png';

const services = [
  { title: 'Patient Care', color: '#2b7a78' },
  { title: 'Emergency Nursing', color: '#e74c3c' },
  { title: 'Health Education', color: '#f4b400' },
  { title: 'Wound Management', color: '#5ac8fa' },
];

const skillsLeft = [
  { label: 'Critical Care Nursing', value: 95 },
  { label: 'Patient Assessment', value: 90 },
  { label: 'IV Therapy & Medication', value: 88 },
  { label: 'Emergency Response', value: 85 },
];

const skillsRight = [
  { label: 'Electronic Health Records', value: 92 },
  { label: 'Wound Care Management', value: 87 },
  { label: 'Patient Education', value: 90 },
  { label: 'Team Collaboration', value: 95 },
];

const portfolioImages = [
  { src: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=900&q=80', label: 'Healthcare Excellence' },
  { src: 'https://images.unsplash.com/photo-1551190822-a9ce113ac100?auto=format&fit=crop&w=900&q=80', label: 'Patient Care' },
  { src: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=900&q=80', label: 'Medical Team' },
  { src: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=900&q=80', label: 'Hospital Environment' },
  { src: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=900&q=80', label: 'Nursing in Action' },
  { src: 'https://images.unsplash.com/photo-1631815588090-d4bfec5b1ccb?auto=format&fit=crop&w=900&q=80', label: 'Health & Wellness' },
];

/* Hook: triggers "visible" class when element enters viewport */
function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('visible');
          observer.unobserve(el);
        }
      },
      { threshold: 0.15 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

/* Animated skill bars only start when visible */
function SkillBar({ label, value }) {
  const ref = useRef(null);
  const [animatedWidth, setAnimatedWidth] = useState('0%');

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimatedWidth(`${value}%`);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [value]);

  return (
    <div className="skill-item" ref={ref}>
      <div className="skill-head">
        <span>{label}</span>
        <span>{value}%</span>
      </div>
      <div className="skill-bar">
        <span style={{ width: animatedWidth }} />
      </div>
    </div>
  );
}

/* Reveal wrapper */
function RevealSection({ children, className = '', ...rest }) {
  const ref = useReveal();
  return (
    <section ref={ref} className={`reveal ${className}`} {...rest}>
      {children}
    </section>
  );
}

function App() {
  return (
    <main className="site">
      {/* ===== HERO ===== */}
      <section className="hero-card">
        <header className="top-nav">
          <div className="brand">Ashish<span>.</span></div>
          <nav>
            <a href="#">Home</a>
            <a href="#services">Services</a>
            <a href="#works">Gallery</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>
          </nav>
          <button className="hire-btn">Get In Touch</button>
        </header>

        <div className="hero-content">
          <div className="hero-text">
            <p className="eyebrow">Hi, I&apos;m</p>
            <h1>Ashish Joshi</h1>
            <h3>Registered Nurse | Houston Methodist Hospital, TX</h3>
            <p className="description">
              Compassionate and dedicated Registered Nurse with years of experience in
              patient care, emergency response, and clinical excellence at one of
              Texas&apos;s leading healthcare institutions.
            </p>
            <div className="hero-actions">
              <button className="primary">Download CV</button>
              <button className="secondary">Contact Me</button>
            </div>
          </div>
          <div className="hero-image-wrap">
            <div className="hero-circle" />
            <img
              src={profileImg}
              alt="Portrait"
            />
          </div>
        </div>

        <div className="stats">
          <div className="stat">
            <h4>8+ Years</h4>
            <p>Nursing Experience</p>
          </div>
          <div className="stat">
            <h4>5,000+ Patients</h4>
            <p>Cared For</p>
          </div>
          <div className="stat">
            <h4>24/7 Dedicated</h4>
            <p>Patient Support</p>
          </div>
        </div>
      </section>

      {/* ===== SERVICES ===== */}
      <RevealSection className="services" id="services">
        <div className="services-intro">
          <p className="section-tag">Services</p>
          <h2>Specialized Nursing Care Services</h2>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <article className="service-card" key={service.title}>
              <span style={{ backgroundColor: service.color }} className="service-dot" />
              <h3>{service.title}</h3>
              <p>Providing expert, compassionate care with clinical precision and a patient-first approach.</p>
            </article>
          ))}
        </div>
      </RevealSection>

      {/* ===== SKILLS ===== */}
      <RevealSection className="skills">
        <p className="section-tag">Why Choose Me</p>
        <h2>My Clinical Expertise</h2>
        <div className="skills-grid">
          {[skillsLeft, skillsRight].map((column, idx) => (
            <div key={idx}>
              {column.map((skill) => (
                <SkillBar key={skill.label} label={skill.label} value={skill.value} />
              ))}
            </div>
          ))}
        </div>
      </RevealSection>

      {/* ===== PORTFOLIO ===== */}
      <RevealSection className="portfolio" id="works">
        <p className="section-tag">Gallery</p>
        <h2>Healthcare In Action</h2>
        <div className="portfolio-grid">
          {portfolioImages.map((item, index) => (
            <div className="portfolio-item" key={item.src}>
              <img src={item.src} alt={`Portfolio ${index + 1}`} />
              <div className="portfolio-overlay">
                <span>{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </RevealSection>
    </main>
  );
}

export default App;
