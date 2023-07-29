import './CardsContainer.css';

function CardsContainer(props) {

    return (
        <div className="mx-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {props.cards.map((card) => (

                    <div className="col" key={card.imageUrl} style={{ width: '33%' }} >
                        <div className="card">
                            <img src={card.imageUrl} className="card-img-top" />
                            <div className="card-body parent">
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
        </div>
    );
}

export default CardsContainer;