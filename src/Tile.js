import React from 'react';

function Tile ({hasImage, image, title, text, text2, text3}) {
    if (hasImage) {
        return (<section>
            <img src={image} alt={image}/>
        </section>);
    } else {
        return (<section>
            <h2>{title}</h2>
            <p>{text}</p>
            <p>{text2}</p>
            <p>{text3}</p>
        </section> );

    }
}


export default Tile;