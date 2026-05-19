import AchievementCard from './AchievementCard'
import './Achievement.css'

function Achievements({ achievements }) {
  return (
    <section className="achievements" id="achievements">
      <div className="achievements__container">

        <h2 className="section__title">Achievements</h2>

        <div className="achievements__list">
          {achievements.map((achievement, index) => (
            <AchievementCard
              key={achievement.id}
              place={achievement.place}
              title={achievement.title}
              location={achievement.location}
              year={achievement.year}
              image={achievement.image}
              index={index}
            />
          ))}
        </div>

      </div>
    </section>
  )
}

export default Achievements