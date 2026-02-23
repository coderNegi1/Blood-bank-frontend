"use client"; // Next.js ko batane ke liye ki ye client-side code hai

import { useState, useEffect } from 'react';

const WelcomePopup = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Next.js mein check karna zaroori hai ki window load ho chuki hai
    const hasVisited = localStorage.getItem('hasSeenHomePopup');
    
    if (!hasVisited) {
      setIsOpen(true);
      localStorage.setItem('hasSeenHomePopup', 'true');
    }
  }, []);

  if (!isOpen) return null;

  return (
    <div style={styles.overlay}>
      <div style={styles.modal}>
        <button className='px-2' onClick={() => setIsOpen(false)} style={styles.closeBtn}>×</button>
        
        {/* Aapki Image */}
        <img 
          src="/popup-image.jpg" // Public folder mein image rakhein aur yahan path dein
          alt="Welcome" 
          style={styles.image}
        />
        
        
      </div>
    </div>
  );
};

const styles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
    backgroundColor: 'rgba(0,0,0,0.85)', display: 'flex', 
    justifyContent: 'center', alignItems: 'center', zIndex: 9999
  },
  modal: {
    backgroundColor: 'white', borderRadius: '15px', overflow: 'hidden',
    width: '90%', maxWidth: '450px', position: 'relative'
  },
  closeBtn: {
    position: 'absolute', top: '10px', right: '15px', border: 'none',
    background: 'white', borderRadius: '50%', cursor: 'pointer', fontSize: '20px'
  },
  image: { width: '100%', height: 'auto', display: 'block' },
  content: { padding: '20px', textAlign: 'center' }
};

export default WelcomePopup;