import { brand } from '../data/site.js'
import { profile, approach } from '../data/content.js'
import { images } from '../data/images.js'
import Reveal from '../components/Reveal.jsx'
import './About.css'

export default function About() {
  return (
    <section id="sobre-mi" className="section section--dark about" aria-labelledby="about-title">
      <div className="container">
        <div className="about__grid">
          <Reveal className="about__intro">
            <div className="about__photo">
              <img src={images.profile.src} alt={images.profile.alt} width="319" height="354" loading="lazy" />
            </div>
            <p className="eyebrow">{profile.eyebrow}</p>
            <h2 id="about-title">{profile.title}</h2>
            <p className="about__name">{brand.owner}</p>
            <p className="about__lead">{profile.intro}</p>
          </Reveal>

          <div className="about__training">
            <Reveal as="h3" className="about__subtitle">
              {profile.trainingTitle}
            </Reveal>
            <ol className="about__list">
              {profile.training.map(({ icon: Icon, text }, i) => (
                <Reveal as="li" key={text} delay={i * 70}>
                  <span className="about__num">{String(i + 1).padStart(2, '0')}</span>
                  <span className="about__icon">
                    <Icon size={22} aria-hidden="true" />
                  </span>
                  <span>{text}</span>
                </Reveal>
              ))}
            </ol>
          </div>
        </div>

        <div className="approach">
          <Reveal as="h3" className="approach__title">
            {approach.title}
          </Reveal>
          <ul className="approach__grid">
            {approach.items.map(({ icon: Icon, label }, i) => (
              <Reveal as="li" key={label} delay={i * 90} className="approach__item">
                <span className="approach__icon">
                  <Icon size={30} aria-hidden="true" />
                </span>
                {label}
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
