import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import ValueStrip from './components/ValueStrip.jsx'
import Why from './components/Why.jsx'
import Problem from './components/Problem.jsx'
import Solutions from './components/Solutions.jsx'
import Process from './components/Process.jsx'
import Architecture from './components/Architecture.jsx'
import Advantages from './components/Advantages.jsx'
import Cases from './components/Cases.jsx'
import Faq from './components/Faq.jsx'
import About from './components/About.jsx'
import ChatDemo from './components/ChatDemo.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 font-sans text-paper">
      <Header />
      <main>
        <Hero />
        <ValueStrip />
        <Why />
        <Problem />
        <Solutions />
        <Process />
        <Architecture />
        <Advantages />
        <Cases />
        <Faq />
        <About />
        <ChatDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
