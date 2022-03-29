import React from 'react'
import './Card.scss'
import PropTypes from 'prop-types'

function Card({ card }) {
  return (
    <div className="item card-drag-handle">
      {
      card.cover && 
      <img draggable='false' className='img'
      src={card.cover} alt="" />
      }
      <span className='text'>{card.title}</span>
    </div>
  )
}
Card.propTypes = {
  card: PropTypes.object
}

export default Card