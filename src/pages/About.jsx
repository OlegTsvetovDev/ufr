import React from 'react'

const About = () => {
  return (
    <div className="app__content">
      <h1 className="content__header">О приложении</h1>
      <p className="content__text">Это приложение было создано на основании уроков в видео:</p>
      <iframe width="1120" height="630" src="https://www.youtube.com/embed/GNrdg3PzpJQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
  )
}

export default About
