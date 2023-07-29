import './CardsContainer.css';
import React, { useState, useEffect } from 'react';

function CardsContainer(props) {

    function isCardShown(card) {
        return card.tags.includes(props.selectedTag) || props.selectedTag == '';
    }

    return (
        <div className=" CardsContainer mx-md-5 mx-4">
            {props.cards.map((card) => (isCardShown(card) &&

                <div key={card.imageUrl}>
                    <div className="Card" >
                        <div className="CardImageFrame">
                            <img className="CardImage" src={card.imageUrl} />
                        </div>
                        <div className="CardBody">
                            <div className="CardText">{card.shutterSpeed}</div>
                            <div className="vr" />
                            <div className="CardText">ƒ {card.aperture}</div>
                            <div className="vr" />
                            <div className="CardText">ISO {card.iso}</div>
                            <div className="vr" />
                            <div className="CardText">{card.focalLength} mm</div>
                        </div>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default CardsContainer;