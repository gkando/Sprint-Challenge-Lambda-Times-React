import React, { useState, useEffect } from 'react';
import Card from './Card';
import PropTypes from "prop-types";

const Cards = props => {
  return (
    <div className="cards-container">
      {props.cards.map((card, index) => {
        return (
          <Card card={card} key={index} loggedIn={props.loginFlag} />
        )
      })}

    </div>
  )
}

// Make sure you include prop types for all of your incoming props
Cards.propTypes = {
  cards: PropTypes.array,
  loggedIn: PropTypes.bool
};
export default Cards;