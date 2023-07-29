import './CardsContainer.css';
import React, { useState, useEffect } from 'react';

function CardsContainer(props) {

    function isCardShown(card) {
        return card.tags.includes(props.selectedTag) || props.selectedTag == '';
    }

    return (
        <>
            <div className="CardsContainer">

                {props.cards.map((card) => (isCardShown(card) &&

                    <div className="Card" key={card.imageUrl}>
                        {/* <div className="CardImage" style={{ backgroundImage: 'url(' + card.imageUrl + ')' }} /> */}
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

                ))}

            </div>
            {/* <div class="awards-cards">
                <div class="award-card__wrapper">
                    <div class="w1">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w1">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w2">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w2">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w1">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w2">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w1">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w2">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w2">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w1">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w2">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w3">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w1">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w2">data inside</div>
                </div>
                <div class="award-card__wrapper">
                    <div class="w1">data inside</div>
                </div>

            </div> */}
        </>
    );
}

export default CardsContainer;