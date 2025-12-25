import { ArrowRight, Github, Linkedin, Mail, Download, ExternalLink, Code2, Terminal, Cpu, Database, Globe, Award, Calendar, MapPin, ChevronRight, Image as ImageIcon } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';
import { motion, useSpring, useMotionValue, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import memojiImage from '../assets/memoji.png';
import memojiWave from '../assets/memoji_wave.png';
import memojiThink from '../assets/memoji_think.png';
import memojiCelebrate from '../assets/memoji_celebrate.png';

const Home = () => {
    const navigate = useNavigate();
    const avatarRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);
    const [message, setMessage] = useState("Hi! I'm Vishnu 👋");
    const [isTalking, setIsTalking] = useState(false);
    const [funnyAction, setFunnyAction] = useState(null);

    const getAvatarImage = () => {
        if (funnyAction === 'hi') return memojiWave;
        if (funnyAction === 'think') return memojiThink;
        if (funnyAction === 'jump') return memojiCelebrate;
        return memojiImage;
    };

    // Motion values for smooth cursor tracking
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth springs for high-end feel
    const rotateX = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
    const rotateY = useSpring(useMotionValue(0), { stiffness: 100, damping: 30 });
    const springConfig = { stiffness: 200, damping: 20 };
    const scale = useSpring(1, springConfig);

    // Periodic actions and messages
    useEffect(() => {
        const interval = setInterval(() => {
            if (!isHovered) {
                const actions = ['hi', 'jump', 'squish', 'think'];
                const randomAction = actions[Math.floor(Math.random() * actions.length)];

                setFunnyAction(randomAction);

                if (randomAction === 'hi') {
                    setMessage("Hello there! 👋");
                    setIsTalking(true);
                } else if (randomAction === 'jump') {
                    setMessage("Let's build! 🚀");
                    setIsTalking(true);
                } else if (randomAction === 'think') {
                    setMessage("Looking for a dev? 🤔");
                    setIsTalking(true);
                }

                setTimeout(() => {
                    setIsTalking(false);
                    setFunnyAction(null);
                }, 3000);
            }
        }, 8000);

        return () => clearInterval(interval);
    }, [isHovered]);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;
            if (avatarRef.current) {
                const rect = avatarRef.current.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;

                // Calculate relative distance
                const dx = (clientX - centerX) / 20;
                const dy = (clientY - centerY) / 20;

                rotateY.set(dx); // Tilt towards mouse
                rotateX.set(-dy); // Tilt towards mouse (inverted Y for natural feel)
            }
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, [rotateX, rotateY]);

    return (
        <div className="main-content">
            {/* Hero Section */}
            <section id="home" style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', paddingTop: '80px', position: 'relative' }}>
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
                    <div className="animate-fade-in">
                        <div style={{
                            display: 'inline-block',
                            padding: '0.5rem 1rem',
                            background: 'rgba(59, 130, 246, 0.1)',
                            borderRadius: '20px',
                            color: 'var(--text-accent)',
                            marginBottom: '1.5rem',
                            fontWeight: 600,
                            border: '1px solid rgba(59, 130, 246, 0.2)'
                        }}>
                            SIH 2025 Winner 🏆
                        </div>

                        <h1 style={{ fontSize: 'clamp(3rem, 5vw, 4.5rem)', lineHeight: 1.1, marginBottom: '1.5rem' }}>
                            Hi, I'm <span className="gradient-text">Vishnu Varman</span>
                            <br />
                            <span style={{ fontSize: '0.6em', color: 'var(--text-secondary)', display: 'block', marginTop: '0.5rem' }}>
                                Full-Stack Developer & AI Innovator
                            </span>
                        </h1>

                        <p style={{ fontSize: '1.25rem', color: 'var(--text-secondary)', marginBottom: '2.5rem', lineHeight: 1.8, maxWidth: '90%' }}>
                            Pre-final year B.Tech student building intelligent systems with React, Spring Boot, and AI.
                            Passionate about solving real-world problems through scalable technology.
                        </p>

                        <div style={{ display: 'flex', gap: '1.2rem', alignItems: 'center', flexWrap: 'wrap' }}>
                            <a href="#contact" className="btn-unique-primary">
                                Contact me here <ArrowRight size={18} />
                            </a>
                            <a href="/resume.pdf" className="btn-unique-secondary" download>
                                Download CV <Download size={18} />
                            </a>

                            <div style={{ display: 'flex', gap: '0.75rem', marginLeft: '0.5rem' }}>
                                <RoundSocialLink href="https://linkedin.com/in/vishnu-varman-p" icon={<Linkedin size={20} />} />
                                <RoundSocialLink href="https://github.com/Vishnuvarman007" icon={<Github size={20} />} />
                                <RoundSocialLink href="https://leetcode.com/u/Vishnu273_" icon={<Code2 size={20} />} />
                            </div>
                        </div>
                    </div>

                    <div style={{ position: 'relative', width: '400px', height: '400px', margin: '0 auto' }}>
                        {/* Speech Bubble - Moved outside the circular container */}
                        <AnimatePresence>
                            {isTalking && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.5, y: 20 }}
                                    animate={{ opacity: 1, scale: 1, y: -80 }}
                                    exit={{ opacity: 0, scale: 0.5, y: 20 }}
                                    style={{
                                        position: 'absolute',
                                        top: '0',
                                        left: '50%',
                                        translateX: '-50%',
                                        background: 'white',
                                        color: '#0f172a',
                                        padding: '10px 25px',
                                        borderRadius: '25px',
                                        fontSize: '1.1rem',
                                        fontWeight: 800,
                                        whiteSpace: 'nowrap',
                                        boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
                                        zIndex: 100,
                                        border: '3px solid var(--primary)',
                                    }}
                                >
                                    {message}
                                    <div style={{
                                        position: 'absolute',
                                        bottom: '-12px',
                                        left: '50%',
                                        translateX: '-50%',
                                        width: '0',
                                        height: '0',
                                        borderLeft: '12px solid transparent',
                                        borderRight: '12px solid transparent',
                                        borderTop: '12px solid white'
                                    }} />
                                </motion.div>
                            )}
                        </AnimatePresence>

                        <motion.div
                            ref={avatarRef}
                            className="hero-image glass-card"
                            initial={{ opacity: 0, scale: 0.5, rotate: -20 }}
                            animate={{
                                opacity: 1,
                                scale: funnyAction === 'squish' ? [1, 1.2, 0.8, 1] : (isHovered ? 1.05 : 1),
                                rotate: funnyAction === 'hi' ? [0, 10, -10, 10, 0] : (isHovered ? 0 : [0, 5, -5, 0]),
                                y: funnyAction === 'jump' ? [0, -30, 0] : (isHovered ? 0 : [0, -10, 0]),
                            }}
                            transition={{
                                opacity: { duration: 1 },
                                scale: { duration: 0.5 },
                                rotate: { duration: funnyAction === 'hi' ? 0.4 : 2, repeat: funnyAction === 'hi' ? 2 : Infinity },
                                y: { duration: funnyAction === 'jump' ? 0.6 : 3, repeat: funnyAction === 'jump' ? 0 : Infinity, ease: "easeInOut" }
                            }}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderRadius: '50%',
                                overflow: 'hidden', // Circular again!
                                border: '4px solid var(--glass-border)',
                                boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                background: 'rgba(255, 255, 255, 0.05)',
                                backdropFilter: 'blur(10px)',
                                rotateX,
                                rotateY,
                                position: 'relative',
                                cursor: 'pointer'
                            }}
                            onMouseEnter={() => setIsHovered(true)}
                            onMouseLeave={() => {
                                rotateX.set(0);
                                rotateY.set(0);
                                setIsHovered(false);
                            }}
                        >
                            <AnimatePresence mode="wait">
                                <motion.img
                                    key={getAvatarImage()}
                                    src={getAvatarImage()}
                                    alt="Vishnu Varman P Memoji"
                                    initial={{ opacity: 0, scale: 0.8 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 1.1 }}
                                    transition={{ duration: 0.3 }}
                                    style={{
                                        width: '100%',
                                        height: '100%',
                                        objectFit: 'cover',
                                        display: 'block',
                                        pointerEvents: 'none'
                                    }}
                                />
                            </AnimatePresence>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section id="about" style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title">About Me</h2>

                    <div className="glass-card" style={{ padding: '3rem', position: 'relative', overflow: 'hidden' }}>
                        <div style={{ position: 'relative', zIndex: 1 }}>
                            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', marginBottom: '2rem', textAlign: 'center', maxWidth: '800px', margin: '0 auto 3rem' }}>
                                "I am a passionate developer specializing in Java, Python, React, and Spring Boot with experience in AI-powered systems,
                                smart hardware integration, and real-world problem solving. I have solved 2500+ problems and programs across LeetCode, SkillRack, GeeksforGeeks, and HackerRank,
                                demonstrating strong algorithmic foundations and DSA knowledge."
                            </p>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
                                <InfoCard
                                    icon={<Globe size={32} color="var(--primary)" />}
                                    title="Education"
                                    desc="B.Tech CSBS (Honors)"
                                    sub="R.M.K Engineering College (2023-2027)"
                                    footer="CGPA: 8.49 / 10"
                                />
                                <InfoCard
                                    icon={<Award size={32} color="var(--secondary)" />}
                                    title="Achievements"
                                    desc="SIH 2025 Winner"
                                    sub="Smart India Hackathon"
                                    footer="Hardware Edition"
                                />
                                <InfoCard
                                    icon={<Code2 size={32} color="var(--text-accent)" />}
                                    title="Problem Solving"
                                    desc="2500+ Problems Solved"
                                    sub="LeetCode, SkillRack, GFG, HackerRank"
                                    footer="DSA Knowledge"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Skills Section */}
            <section id="skills" style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title">Technical Skills</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                        <SkillCategory title="Languages & Databases">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {['Java', 'Python', 'MySQL', 'HTML/CSS'].map(skill => (
                                    <SkillTag key={skill} name={skill} />
                                ))}
                            </div>
                        </SkillCategory>

                        <SkillCategory title="Frameworks">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {['React.js', 'Spring Boot', 'Node.js', 'Django'].map(skill => (
                                    <SkillTag key={skill} name={skill} />
                                ))}
                            </div>
                        </SkillCategory>

                        <SkillCategory title="Tools & Technologies">
                            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                                {['Git', 'GitHub', 'VS Code', 'Eclipse', 'Figma', 'Postman', 'AWS'].map(tool => (
                                    <SkillTag key={tool} name={tool} />
                                ))}
                            </div>
                        </SkillCategory>
                    </div>
                </div>
            </section>

            {/* Experience Section */}
            <section id="experience" style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title">Experience & Timeline</h2>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', maxWidth: '800px', margin: '0 auto' }}>
                        <TimelineItem
                            year="2025"
                            title="Smart India Hackathon (SIH) - Winner"
                            company="Government of India"
                            desc="Secured First Place (Shared) with ₹75,000 prize. Led team 'VEL MOTIVES' to develop an AI-powered PPE compliance system for coal mines."
                            tags={['AI', 'IoT', 'Computer Vision', 'Spring Boot']}
                            onClick={() => navigate('/experience/sih')}
                            hasGallery={true}
                        />
                        <TimelineItem
                            year="2024"
                            title="Internship"
                            company="Neyveli Lignite Corporation (NLC)"
                            desc="Gained hands-on exposure to enterprise IT infrastructure, system operations, and industrial software workflows."
                            tags={['Enterprise IT', 'System Ops']}
                        />
                    </div>
                </div>
            </section>


            {/* Projects Section */}
            <section id="projects" style={{ padding: '80px 0' }}>
                <div className="container">
                    <h2 className="section-title">Featured Projects</h2>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2.5rem' }}>
                        <ProjectCard
                            title="Waterborne Smart Community Health Monitoring"
                            tagline="SIH 2025 Innovation"
                            desc="AI + IoT system to predict disease outbreaks 2-4 weeks early. Features offline-first mobile app, SMS alerts, and GPS-tagged water quality sensors."
                            tags={['React', 'IoT', 'AI Prediction', 'Offline-First']}
                            link="#"
                        />

                        <ProjectCard
                            title="QR Code Ticket Booking System"
                            tagline="Full Stack Application"
                            desc="Secure ticket booking platform with QR-based verification. Built with React frontend and Spring Boot backend with MySQL database integration."
                            tags={['Spring Boot', 'React', 'MySQL', 'REST API']}
                            link="#"
                        />

                        <ProjectCard
                            title="Smart Guardian for Mine Workers"
                            tagline="Safety Tech"
                            desc="Real-time PPE detection system using YOLOv8, integrated with smart textile sensors (RFID, pressure, SpO2) for worker safety."
                            tags={['YOLOv8', 'Computer Vision', 'Smart Textiles', 'Hardware']}
                            link="#"
                        />
                    </div>
                </div>
            </section>

            {/* Certifications & Appearances */}
            <section style={{ padding: '80px 0', background: 'var(--bg-secondary)' }}>
                <div className="container">
                    <h2 className="section-title">Certifications & Events</h2>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Award color="var(--primary)" /> Certifications</h3>
                            <ul className="list-styled">
                                <li>Oracle Certified Associate - MySQL</li>
                                <li>Udemy - Java for Programmers Crash Course</li>
                                <li>NPTEL - Operating Systems</li>
                                <li>NPTEL - Soft Skills</li>
                            </ul>
                        </div>
                        <div>
                            <h3 style={{ marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.75rem' }}><Calendar color="var(--secondary)" /> Appearances</h3>
                            <ul className="list-styled">
                                <li>E-Summit Hackathon – IIT Madras</li>
                                <li>ABACUS’25 – Anna University</li>
                                <li>IEEE Professional Member</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" style={{ padding: '100px 0 50px' }}>
                <div className="container" style={{ textAlign: 'center', maxWidth: '600px' }}>
                    <h2 className="section-title">Get In Touch</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '3rem', fontSize: '1.1rem' }}>
                        I'm currently looking for full-time opportunities. Whether you have a question or just want to say hi, I'll try my best to get back to you!
                    </p>

                    <a href="mailto:vishnuvarmanp@gmail.com" className="btn btn-primary" style={{ fontSize: '1.2rem', padding: '1rem 3rem' }}>
                        Say Hello <Mail />
                    </a>

                    <div style={{ marginTop: '4rem', display: 'flex', justifyContent: 'center', gap: '2rem' }}>
                        <SocialLink href="https://github.com/Vishnuvarman007" icon={<Github size={24} />} />
                        <SocialLink href="https://linkedin.com/in/vishnu-varman-p" icon={<Linkedin size={24} />} />
                        <SocialLink href="tel:+919791251129" icon={<MapPin size={24} />} label="Tamil Nadu, India" />
                    </div>

                    <footer style={{ marginTop: '5rem', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
                        <p>Designed & Built by Vishnu Varman P</p>
                    </footer>
                </div>
            </section>
        </div>
    );
};

// Sub-components for cleanliness
const SocialLink = ({ href, icon, label }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        style={{ color: 'var(--text-secondary)', transition: 'var(--transition)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}
        onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
        onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}
        title={label}
    >
        <span className="hover-lift">{icon}</span>
        {label && <span>{label}</span>}
    </a>
);

const RoundSocialLink = ({ href, icon, title }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="round-social-btn"
        title={title}
    >
        {icon}
    </a>
);

const InfoCard = ({ icon, title, desc, sub, footer }) => (
    <div className="glass-card" style={{ padding: '1.5rem', textAlign: 'center' }}>
        <div style={{ marginBottom: '1rem' }}>{icon}</div>
        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{title}</h3>
        <p style={{ color: 'var(--text-primary)', fontWeight: 500 }}>{desc}</p>
        <p style={{ color: 'var(--text-secondary)', fontSize: '0.9rem' }}>{sub}</p>
        <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--glass-border)', color: 'var(--text-accent)', fontSize: '0.9rem', fontWeight: 600 }}>
            {footer}
        </div>
    </div>
);

const SkillCategory = ({ title, children }) => (
    <div className="glass-card" style={{ padding: '2rem' }}>
        <h3 style={{ marginBottom: '1.5rem', fontSize: '1.25rem' }}>{title}</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            {children}
        </div>
    </div>
);

const SkillTag = ({ name }) => (
    <span style={{
        padding: '0.5rem 1rem',
        background: 'rgba(59, 130, 246, 0.1)',
        borderRadius: '8px',
        border: '1px solid rgba(59, 130, 246, 0.2)',
        fontSize: '0.9rem',
        color: 'var(--text-primary)',
        transition: 'all 0.3s ease',
        cursor: 'default'
    }}
        onMouseEnter={(e) => {
            e.target.style.background = 'rgba(59, 130, 246, 0.2)';
            e.target.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
            e.target.style.background = 'rgba(59, 130, 246, 0.1)';
            e.target.style.transform = 'translateY(0)';
        }}
    >
        {name}
    </span>
);

const TimelineItem = ({ year, title, company, desc, tags, onClick, hasGallery }) => {
    return (
        <motion.div
            whileHover={onClick ? { scale: 1.02 } : {}}
            className={`glass-card timeline-item ${onClick ? 'clickable' : ''}`}
            onClick={onClick}
            style={{
                padding: '2rem',
                display: 'flex',
                gap: '1.5rem',
                position: 'relative',
                cursor: onClick ? 'pointer' : 'default',
                transition: 'all 0.3s ease',
            }}
        >
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                minWidth: '60px',
                fontWeight: 700,
                color: 'var(--text-accent)'
            }}>
                {year}
            </div>
            <div style={{ flex: 1 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.25rem' }}>{title}</h3>
                    {hasGallery && (
                        <div style={{ color: 'var(--text-accent)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.8rem', background: 'rgba(59, 130, 246, 0.1)', padding: '0.25rem 0.75rem', borderRadius: '15px' }}>
                            <ImageIcon size={14} />
                            View Winner Details
                            <ChevronRight size={14} />
                        </div>
                    )}
                </div>
                <p style={{ color: 'var(--primary)', marginBottom: '1rem', fontWeight: 500 }}>{company}</p>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '1rem' }}>{desc}</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
                    {tags.map(tag => (
                        <span key={tag} style={{ fontSize: '0.8rem', padding: '0.25rem 0.75rem', borderRadius: '15px', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-primary)' }}>
                            #{tag}
                        </span>
                    ))}
                </div>
            </div>
        </motion.div>
    );
};

const ProjectCard = ({ title, tagline, desc, tags, link }) => (
    <div className="glass-card" style={{
        padding: '2rem',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        transition: 'transform 0.3s ease',
    }}
        onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
        onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
        <div style={{ marginBottom: 'auto' }}>
            <div style={{ color: 'var(--text-accent)', fontSize: '0.85rem', fontWeight: 600, marginBottom: '0.5rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                {tagline}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem', fontSize: '0.95rem' }}>
                {desc}
            </p>
        </div>

        <div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                {tags.map(tag => (
                    <span key={tag} style={{ fontSize: '0.8rem', padding: '0.25rem 0.5rem', borderRadius: '4px', background: 'rgba(255, 255, 255, 0.05)', color: 'var(--text-secondary)' }}>
                        {tag}
                    </span>
                ))}
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                <a href={link} className="btn-link" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)', fontWeight: 600 }}>
                    Details <ExternalLink size={16} />
                </a>
            </div>
        </div>
    </div>
);

export default Home;
