import React from 'react'

const Advantage = (props) => {
  return (
    <div className="Advantages__item">
      <div className="Advantages__content">
        <img src={props.item.icon} alt={props.item.title} />
        <div className="Advantages__texts">
          <p>{props.item.title}</p>
          <span>{props.item.description}</span>
        </div>
      </div>
    </div>
  )
}

export default Advantage
