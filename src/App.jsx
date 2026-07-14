import React from 'react'
import Header from './components/Header.jsx'
import Hero from './components/Hero.jsx'
import Problem from './components/Problem.jsx'
import Solutions from './components/Solutions.jsx'
import Process from './components/Process.jsx'
import Cases from './components/Cases.jsx'
import ChatDemo from './components/ChatDemo.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

export default function App() {
  return (
    <div className="min-h-screen bg-ink-900 font-sans text-paper">
      <Header />
      <main>
        <Hero />
        <Problem />
        <Solutions />
        <Process />
        <Cases />
        <ChatDemo />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
