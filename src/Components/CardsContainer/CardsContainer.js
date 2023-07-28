import './CardsContainer.css';

function CardsContainer() {
    const cards = [
        {
            imageUrl: 'https://preview.redd.it/dramatic-skies-olympus-om-10-zuiko-50mm-f-1-8-fomapan-400-v0-1uewnyt06zxa1.jpg?width=640&crop=smart&auto=webp&s=b837d6572aafa50fdd663aa0687938fdd00dc967',
            shutterSpeed: '1/300',
            aperture: '1.8',
            iso: '100',
            focalLength: '50'
        },
        {
            imageUrl: 'https://external-preview.redd.it/dramatic-skies-after-work-olympus-om-2n-50mm-cinestilll-800t-v0-Pfr01Cuz_Ietnb3h5J_oPqXYcFEWP15smVQWSE6kFXc.jpg?width=640&crop=smart&auto=webp&s=1053662e84ef2c0ac6d65da7241e3368e9899655',
            shutterSpeed: '1/300',
            aperture: '1.8',
            iso: '100',
            focalLength: '50'
        },
        {
            imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbRHkQpxwJz7Ymro07owA-_JvtZCARcdXnBN2dht_XjY3OAF4WrouLSHhvL4ppsDYkEPI&usqp=CAU',
            shutterSpeed: '1/300',
            aperture: '1.8',
            iso: '100',
            focalLength: '50'
        },
        {
            imageUrl: 'https://eloquentnature.files.wordpress.com/2020/08/a7siigcmjul2020_dsc1080cometneowisebigdippermeteor_gcm.jpg?w=584',
            shutterSpeed: '1/300',
            aperture: '1.8',
            iso: '100',
            focalLength: '50'
        }
    ]



    return (
        <div className="mt-5 mx-5">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {cards.map((card) => (

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