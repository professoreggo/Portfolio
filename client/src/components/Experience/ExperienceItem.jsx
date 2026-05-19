import useScrollReveal from '../../hooks/useScrollReveal'
import './ExperienceItem.css'

function ExperienceItem({ company, role, period, bullets, logo, image, index }) {
  const ref = useScrollReveal({ threshold: 0.25 })

  const delayClass = index < 5 ? `reveal--delay-${index + 1}` : ''

  return (
    <div
      className={`experience-item reveal ${delayClass}`}
      ref={ref}
    >
      <div className="experience-item__body">

        <div className="experience-item__header">
          {logo && (
            <div className="experience-item__logo-wrapper">
              <img
                src={logo}
                alt={`${company} logo`}
                className="experience-item__logo"
              />
            </div>
          )}
          <div className="experience-item__info">
            <h3 className="experience-item__role">{role}</h3>
            <p className="experience-item__company">{company}</p>
          </div>
          <span className="experience-item__period">{period}</span>
        </div>

        <ul className="experience-item__bullets">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

      </div>

      {image && (
        <div className="experience-item__image-wrapper">
          <img
            src={image}
            alt={`${company} workplace`}
            className="experience-item__image"
          />
        </div>
      )}

    </div>
  )
}

export default ExperienceItem