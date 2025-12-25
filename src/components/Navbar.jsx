import { useState, useEffect } from 'react';
import { Menu, X, Code2 } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';
import '../index.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [activeSection, setActiveSection] = useState('home');
    const location = useLocation();
    const navigate = useNavigate();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);

            // Active section detection
            const sections = navLinks.map(l => l.path.substring(1));
            const current = sections.find(section => {
                const el = document.getElementById(section);
                if (el) {
                    const rect = el.getBoundingClientRect();
                    return rect.top <= 100 && rect.bottom >= 100;
                }
                return false;
            });
            if (current) setActiveSection(current);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', path: '#home' },
        { name: 'About', path: '#about' },
        { name: 'Skills', path: '#skills' },
        { name: 'Experience', path: '#experience' },
        { name: 'Projects', path: '#projects' },
        { name: 'Contact', path: '#contact' },
    ];

    const scrollToSection = (e, path) => {
        e.preventDefault();
        const sectionId = path.substring(1);
        setActiveSection(sectionId);

        if (location.pathname !== '/') {
            navigate('/' + path);
            setIsOpen(false);
            return;
        }

        const element = document.querySelector(path);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setIsOpen(false);
        }
    };

    return (
        <nav className={`glass-nav ${scrolled ? 'scrolled' : ''}`} style={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 1000,
            padding: scrolled ? '0.5rem 0' : '1rem 0',
            transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
        }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '60px' }}>
                <a href="#home" onClick={(e) => scrollToSection(e, '#home')} style={{ fontSize: '1.5rem', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '0.6rem', letterSpacing: '-0.5px', textDecoration: 'none' }}>
                    <div style={{ background: 'var(--primary)', padding: '6px', borderRadius: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 0 15px var(--glow-primary)' }}>
                        <Code2 color="white" size={22} />
                    </div>
                    <span className="gradient-text" style={{ fontWeight: 800 }}>PORTFOLIO</span>
                </a>

                {/* Desktop Menu */}
                <ul className="desktop-menu" style={{ display: 'flex', gap: '0.5rem', background: 'rgba(255, 255, 255, 0.03)', padding: '6px', borderRadius: '100px', border: '1px solid var(--glass-border)' }}>
                    {navLinks.map((link) => (
                        <li key={link.name} style={{ listStyle: 'none' }}>
                            <a
                                href={link.path}
                                onClick={(e) => scrollToSection(e, link.path)}
                                className={`nav-chip ${activeSection === link.path.substring(1) ? 'active' : ''}`}
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                {/* Mobile Menu Button */}
                <button
                    className="mobile-toggle"
                    onClick={() => setIsOpen(!isOpen)}
                    style={{ background: 'none', border: 'none', color: 'var(--text-primary)', cursor: 'pointer', display: 'none' }}
                >
                    {isOpen ? <X size={28} /> : <Menu size={28} />}
                </button>

                {/* Mobile Menu Dropdown */}
                {isOpen && (
                    <div style={{
                        position: 'absolute',
                        top: '80px',
                        left: 0,
                        width: '100%',
                        background: 'rgba(10, 15, 28, 0.95)',
                        backdropFilter: 'blur(20px)',
                        padding: '2rem',
                        borderBottom: '1px solid var(--glass-border)',
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1.5rem'
                    }}>
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.path}
                                onClick={(e) => scrollToSection(e, link.path)}
                                style={{
                                    fontSize: '1.25rem',
                                    color: 'var(--text-primary)',
                                    textAlign: 'center'
                                }}
                            >
                                {link.name}
                            </a>
                        ))}
                    </div>
                )}
            </div>

            <style>{`
        @media (max-width: 768px) {
          .desktop-menu { display: none !important; }
          .mobile-toggle { display: block !important; }
        }
      `}</style>
        </nav>
    );
};

export default Navbar;
