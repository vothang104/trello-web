import React from 'react'
import './Card.scss'
import PropTypes from 'prop-types'

function Card({ card }) {
  return (
    <li className="item">
      {
      card.cover && 
      <img className='img'
      src={card.cover} alt="" />
      }
      <span className='text'>{card.title}</span>
    </li>
  )
}
Card.propTypes = {
  card: PropTypes.object
}

export default Card