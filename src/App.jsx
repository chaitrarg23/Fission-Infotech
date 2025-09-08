import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

export default function App(){
  const [scrolled, setScrolled] = useState(false)
  useEffect(()=>{
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return ()=>window.removeEventListener('scroll', onScroll)
  },[])

  return (
    <div>
      <Navbar scrolled={scrolled} />
      <main>
        <Hero />
        <section className="section approach">
          <h2>Our Approach</h2>
          <div className="cards">
            <div className="card">
              <div className="icon">🎨</div>
              <h3>Design</h3>
              <p>Pixel-perfect UI/UX with creativity and precision.</p>
            </div>
            <div className="card">
              <div className="icon">⚡</div>
              <h3>Performance</h3>
              <p>Fast-loading, responsive and scalable frontends.</p>
            </div>
            <div className="card">
              <div className="icon">🚀</div>
              <h3>Innovation</h3>
              <p>Interactive experiences that delight and convert.</p>
            </div>
          </div>
        </section>
        <section className="section case-study">
          <h2>Case Study</h2>
          <div className="case">
            <img src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop" alt="Case Study" />
            <div className="overlay">
              <h3>Interactive Brand Site</h3>
              <p>A showcase project combining design, animation and strategy.</p>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
