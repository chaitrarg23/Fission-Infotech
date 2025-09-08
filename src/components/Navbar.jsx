import React, {useState} from 'react'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar({scrolled}){
  const [open, setOpen] = useState(false)
  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="logo">R G<span>Designer Studio </span></div>
        <nav className="nav-links">
          <a>Work</a>
          <a>Services</a>
          <a>About</a>
          <a>Contact</a>
          <button className="btn">Get in touch</button>
        </nav>
        <div className="nav-toggle" onClick={()=>setOpen(!open)}>
          <span>{open ? '✕' : '☰'}</span>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div initial={{height:0, opacity:0}} animate={{height:'auto', opacity:1}} exit={{height:0, opacity:0}} className="mobile-menu">
            <a>Work</a>
            <a>Services</a>
            <a>About</a>
            <a>Contact</a>
            <button className="btn">Get in touch</button>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
