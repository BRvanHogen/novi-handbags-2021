import React from 'react';

function Product ({span, image, name, price}) {
    return (
        <article>
            <span>{span}</span>
            <img src={image} alt={image}/>
            <p>{name}</p>
            <h4>&euro;{price},-</h4>
        </article>
    )
}

export default Product;