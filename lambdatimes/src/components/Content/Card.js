import React, { useState }  from 'react';
import PropTypes from "prop-types";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import styled from 'styled-components';


const Headline = styled.div`
  font-size: 25px;
  font-family: Didot, serif;
  cursor: pointer;
  :hover{
    opacity: 0.6;
  }
  // font-weight: 400;
`;

const Card = props => {
  const [modal, setModal] = useState(false)
 
    const toggle = () => {
      setModal(!modal)
    }

  return (
    <div className="card">
      {/* <div className="headline">{props.card.headline}</div> */}
      <Headline onClick={toggle} color='link'>{props.card.headline}</Headline>
      <Modal size='xl' isOpen={modal} toggle={toggle}>
        <ModalHeader toggle={toggle} charCode="X">
        {props.card.headline}
        <br></br>
        <span class='byline'>By {props.card.author}</span>
        
        </ModalHeader>
            <ModalBody className='modal-article'>
              {props.card.article}
            </ModalBody>
            <ModalFooter>
              <Button color="link" onClick={toggle}>Return to Homepage</Button>{' '}
              {/* <Button color="secondary" onClick={toggle}>Cancel</Button> */}
            </ModalFooter>
        </Modal>
      <div className="author">
        <div className="img-container">
          <img src={props.card.img} alt='card-img' />
        </div>
        <span>By {props.card.author}</span>
      </div>
    </div>
  );
};

// Make sure to include PropTypes.
Card.propTypes = {
  card: PropTypes.shape({
      headline: PropTypes.string,
      tab: PropTypes.string,
      img: PropTypes.string,
      author: PropTypes.string,
      article: PropTypes.string
  })
};
export default Card;
