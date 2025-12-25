import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowLeft, Users, Briefcase, Award, MapPin, Building, ShieldCheck, Cpu, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

// Asset imports
import sih1 from '../assets/sih_1.jpg';
import sih2 from '../assets/sih_2.png';
import sih3 from '../assets/sih_3.jpg';

const SIHDetail = () => {
    const navigate = useNavigate();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const team = {
        leader: "Ms. K. Savarna, III Year CSBS",
        members: [
            "Ms. P. Harini, IV Year CSBS",
            "Ms. V. Keerthana, IV Year CSBS",
            "Mr. M. Sandeep, III Year CSBS",
            "Mr. P. Vishnu varman, III Year CSBS",
            "Mr. B. R. Yaswanthan, III Year CSBS"
        ],
        mentors: [
            { name: "Mr. C. M. VARUN", role: "ASP/CSBS", type: "Faculty Mentor" },
            { name: "Mr. P. Puneeth Ram", role: "", type: "Industry Mentor" }
        ]
    };

    const projectPoints = [
        "Designed an AI-powered PPE compliance system for coal mines to automatically verify worker safety gear before underground entry.",
        "Implemented real-time PPE detection using YOLOv8 and face recognition (MobileFaceNet) integrated with entry kiosks.",
        "Built smart textile-based wearable sensors (RFID, pressure, capacitive, SpO₂) embedded into helmets, vests, gloves, boots, goggles, and masks.",
        "Developed a hardware–software integrated platform with Bluetooth/RFID communication for continuous underground monitoring.",
        "Enabled automated alerts, entry denial, attendance logging, and compliance reports via web and mobile dashboards.",
        "Applied predictive analytics to identify potential PPE non-compliance and trigger preemptive safety warnings.",
        "Integrated an ERP-based system for worker tracking, hazard detection, rescue actions, and PPE inventory management.",
        "Designed for offline operability, scalability, data security, and harsh mining conditions (dust, heat, moisture)."
    ];

    return (
        <div className="sih-detail" style={{ minHeight: '100vh', padding: '120px 0 80px', background: 'var(--bg-primary)' }}>
            <div className="container">
                {/* Back Button */}
                <motion.button
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    onClick={() => navigate('/')}
                    className="btn btn-pill"
                    style={{ marginBottom: '2rem', background: 'rgba(255,255,255,0.05)', border: '1px solid var(--glass-border)' }}
                >
                    <ArrowLeft size={18} /> Back to Portfolio
                </motion.button>

                {/* Hero section on detail page */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="glass-card"
                    style={{ padding: '3rem', marginBottom: '3rem', textAlign: 'center', border: '1px solid rgba(59, 130, 246, 0.3)' }}
                >
                    <div style={{ display: 'inline-flex', padding: '1rem', background: 'rgba(59, 130, 246, 0.1)', borderRadius: '50%', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                        <Award size={48} />
                    </div>
                    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem', background: 'linear-gradient(90deg, #fff, var(--primary))', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                        Smart India Hackathon (SIH) 2025
                    </h1>
                    <p style={{ fontSize: '1.25rem', color: 'var(--text-accent)', fontWeight: 600, marginBottom: '0.5rem' }}>
                        Secured the First Place (Shared)
                    </p>
                    <div style={{ fontSize: '1.5rem', fontWeight: 700, color: '#10b981', marginBottom: '1.5rem' }}>
                        ₹75,000 Cash Prize
                    </div>
                    <p style={{ color: 'var(--text-secondary)', maxWidth: '800px', margin: '0 auto' }}>
                        Smart India Hackathon is a nationwide initiative to provide students with a platform to solve some of the pressing problems we face in our daily lives.
                    </p>
                </motion.div>

                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '2rem' }}>
                    {/* Project Information */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <section className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                <Briefcase size={24} />
                                <h2 style={{ fontSize: '1.5rem' }}>The Project</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Problem Statement</span>
                                    <p style={{ marginTop: '0.5rem', fontWeight: 500 }}>Smart PPE Compliance Monitoring and Reporting System for Underground Coal Mines</p>
                                </div>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                                    <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Category</span>
                                        <p style={{ marginTop: '0.5rem', color: 'var(--text-primary)' }}>Hardware</p>
                                    </div>
                                    <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                                        <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Organization</span>
                                        <p style={{ marginTop: '0.5rem', color: 'var(--text-primary)' }}>Ministry of Coal</p>
                                    </div>
                                </div>
                                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px' }}>
                                    <span style={{ fontSize: '0.8rem', color: 'var(--text-secondary)', textTransform: 'uppercase', letterSpacing: '1px' }}>Venue</span>
                                    <p style={{ marginTop: '0.5rem', color: 'var(--text-primary)' }}>Sri Sairam Engineering College, Chennai</p>
                                </div>
                            </div>
                        </section>

                        <section className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                <Zap size={24} />
                                <h2 style={{ fontSize: '1.5rem' }}>Technical Innovation</h2>
                            </div>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                {projectPoints.map((point, idx) => (
                                    <div key={idx} style={{ display: 'flex', gap: '0.75rem', fontSize: '0.95rem', color: 'var(--text-secondary)' }}>
                                        <div style={{ color: 'var(--primary)', marginTop: '0.2rem' }}>•</div>
                                        <p>{point}</p>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Team Information */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                        <section className="glass-card" style={{ padding: '2rem' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>
                                <Users size={24} />
                                <h2 style={{ fontSize: '1.5rem' }}>Team VEL MOTIVES</h2>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-accent)', marginBottom: '0.5rem', textTransform: 'uppercase' }}>Team Leader</h3>
                                <p style={{ fontSize: '1.1rem', fontWeight: 600 }}>{team.leader}</p>
                            </div>

                            <div style={{ marginBottom: '1.5rem' }}>
                                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>Team Members</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                                    {team.members.map((member, idx) => (
                                        <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text-primary)' }}>
                                            <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--primary)' }} />
                                            {member}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div>
                                <h3 style={{ fontSize: '0.9rem', color: 'var(--text-accent)', marginBottom: '1rem', textTransform: 'uppercase' }}>Mentors</h3>
                                <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                    {team.mentors.map((mentor, idx) => (
                                        <div key={idx} style={{ padding: '1rem', background: 'rgba(255,255,255,0.03)', borderRadius: '8px', borderLeft: '3px solid var(--primary)' }}>
                                            <p style={{ fontWeight: 600 }}>{mentor.name}</p>
                                            <p style={{ fontSize: '0.85rem', color: 'var(--text-secondary)' }}>{mentor.role} • {mentor.type}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </section>

                        <div className="glass-card" style={{ padding: '2rem', textAlign: 'center', background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), rgba(59, 130, 246, 0.1))' }}>
                            <ShieldCheck size={40} color="#10b981" style={{ marginBottom: '1rem' }} />
                            <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Winning Moment</h2>
                            <p style={{ color: 'var(--text-secondary)', fontStyle: 'italic' }}>
                                "Hearty congratulations to the winning team and mentors for this stellar achievement in national-level innovation."
                            </p>
                        </div>
                    </div>
                </div>

                {/* Gallery at bottom */}
                <h2 style={{ fontSize: '2rem', margin: '4rem 0 2rem', textAlign: 'center' }}>Event Gallery</h2>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '1.5rem' }}>
                    {[sih1, sih2, sih3].map((img, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ scale: 1.02 }}
                            className="glass-card"
                            style={{ borderRadius: '15px', overflow: 'hidden', height: '400px', border: '1px solid var(--glass-border)' }}
                        >
                            <img src={img} alt={`SIH Winner ${idx + 1}`} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SIHDetail;
