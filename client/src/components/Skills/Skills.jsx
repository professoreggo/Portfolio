import { useState, useMemo } from 'react'
import SkillBadge from './SkillBadge'
import './Skills.css'

const Categories = ['all', 'backend', 'frontend', 'database', 'devops', 'other']

function Skills({ skills }) {
  const [activeFilter, setActiveFilter] = useState('all')

  const filteredSkills = useMemo(() => {
    if (activeFilter === 'all') return skills
    return skills.filter(skill => skill.category === activeFilter)
  }, [activeFilter, skills])

  return (
    <section className="skills" id="skills">

      <div className="skills__container">

        <h2 className="section__title">Skills</h2>

        {/* Filter buttons */}
        <div className="skills__filters">
          {Categories.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`filter-btn ${activeFilter === filter ? 'filter-btn--active' : ''}`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Skill badges */}
        <div className="skills__grid">
          {filteredSkills.map(skill => (
            <SkillBadge
              key={skill.id}
              name={skill.name}
              category={skill.category}
            />
          ))}
        </div>

      </div>

    </section>
  )
}

export default Skills