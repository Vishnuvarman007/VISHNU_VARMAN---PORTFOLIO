import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import memojiImage from '../assets/memoji.png';

const NavbarBuddy = ({ activeRect, isVisible }) => {
    const [message, setMessage] = useState("Hello! 👋");
    const [isTalking, setIsTalking] = useState(false);

    useEffect(() => {
        if (isVisible) {
            setIsTalking(true);
            const timer = setTimeout(() => setIsTalking(false), 3000);
            return () => clearTimeout(timer);
        }
    }, [isVisible]);

    // Funny random messages when moving
    useEffect(() => {
        if (activeRect) {
            const messages = [
                "Let's go! 🚀",
                "Nice choice! ✨",
                "Check this! 🔍",
                "Sup? 😎",
                "Catch me! 🏃‍♂️",
                "Look at this! 🤩",
                "Smooth! 🌊",
                "Interesting... 🤔"
            ];
            const randomMsg = messages[Math.floor(Math.random() * messages.length)];
            setMessage(randomMsg);
            setIsTalking(true);
            const timer = setTimeout(() => setIsTalking(false), 1500);
            return () => clearTimeout(timer);
        }
    }, [activeRect]);

    if (!activeRect || !isVisible) return null;

    return (
        <motion.div
            initial={false}
            animate={{
                x: activeRect.left + (activeRect.width / 2) - 25, // Center above the link
                y: activeRect.top - 60, // Position above the navbar
                opacity: 1,
                scale: 1,
            }}
            transition={{
                type: "spring",
                stiffness: 300,
                damping: 30,
                mass: 1
            }}
            style={{
                position: 'fixed',
                zIndex: 2000,
                width: '50px',
                height: '50px',
                pointerEvents: 'none'
            }}
        >
            {/* Speech Bubble */}
            <AnimatePresence>
                {isTalking && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.5 }}
                        animate={{ opacity: 1, y: -45, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.5 }}
                        style={{
                            position: 'absolute',
                            left: '50%',
                            translateX: '-50%',
                            background: 'white',
                            color: '#0f172a',
                            padding: '4px 12px',
                            borderRadius: '12px',
                            fontSize: '0.75rem',
                            fontWeight: 'bold',
                            whiteSpace: 'nowrap',
                            boxShadow: '0 5px 15px rgba(0,0,0,0.3)',
                        }}
                    >
                        {message}
                        <div style={{
                            position: 'absolute',
                            bottom: '-6px',
                            left: '50%',
                            translateX: '-50%',
                            width: '0',
                            height: '0',
                            borderLeft: '6px solid transparent',
                            borderRight: '6px solid transparent',
                            borderTop: '6px solid white'
                        }} />
                    </motion.div>
                )}
            </AnimatePresence>

            {/* The Avatar */}
            <motion.div
                animate={{
                    rotate: [0, -10, 10, -10, 0],
                    y: [0, -5, 0]
                }}
                transition={{
                    rotate: { duration: 2, repeat: Infinity, ease: "easeInOut" },
                    y: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
                }}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    background: 'rgba(59, 130, 246, 0.2)',
                    backdropFilter: 'blur(10px)',
                    border: '2px solid rgba(59, 130, 246, 0.5)',
                    padding: '4px',
                    boxShadow: '0 10px 20px rgba(0,0,0,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <img
                    src={memojiImage}
                    alt="Navbar Buddy"
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        borderRadius: '50%'
                    }}
                />
            </motion.div>
        </motion.div>
    );
};

export default NavbarBuddy;
