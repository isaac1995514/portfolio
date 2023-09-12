import {
  About,
  Contact,
  Experience,
  Feedbacks,
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from './components'

export default function Home() {
  return (
    <div className="relative z-0 min-w-min bg-primary">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Tech />
      {/* <Works /> */}
      {/* <Feedbacks /> */}
      <Contact />
      <StarsCanvas />
    </div>
  )
}
