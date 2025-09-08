import React from 'react'
import { motion } from 'framer-motion'

export default function Hero(){
  return (
    <section className="hero">
      <div className="hero-bg"></div>
      <div className="hero-content">
        <motion.div initial={{opacity:0, y:20}} animate={{opacity:1, y:0}} transition={{duration:0.7}} className="hero-text">
          <span className="tag">Studio • Design • Interaction</span>
          <h1>Crafting <span className="highlight">memorable</span> digital experiences.</h1>
          <p>We design and build websites with motion, personality, and performance in mind. Focused on conversion and delightful interactions.</p>
          <div className="hero-buttons">
            <motion.a whileHover={{scale:1.05}} whileTap={{scale:0.95}} href="#" className="btn primary">View our work</motion.a>
            <motion.a whileHover={{scale:1.05}} whileTap={{scale:0.95}} href="#" className="btn">Get in touch</motion.a>
          </div>
        </motion.div>
        <motion.div initial={{opacity:0, scale:0.9}} animate={{opacity:1, scale:1}} transition={{duration:0.8}} className="hero-card">
          <div className="card">
            <div className="card-content">
              <small>Featured Project</small>
              <h2>Interactive Brand Site</h2>
              <p>A modern animated landing combining 3D, motion and accessibility-first design.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
