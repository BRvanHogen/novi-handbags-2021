import React from 'react';
import './App.css';

//import js.files
import Button from './Button.js';
import Product from './Product.js';

//import pics
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';

function App() {

    return (
        <>
        <nav>
            <h1>Handbags & Purses</h1>

            <Button
                buttonText={'to the collection'}/>

            <Button
                buttonText={'shop all bags'}/>

            <Button isDisabled={true}
                    buttonText={'pre-orders'}/>
        </nav>

        <main>
            <Product
            span="fakking duur!"
            image ={bag_1}
            name="The handy bag"
            price="400"
            />

            <Product
            span="bestseller"
            image={bag_2}
            name="The stylish bag"
            price="250"
            />

            <Product
                span="new collection"
                image={bag_3}
                name="The simple bag"
                price="250"
            />

            <Product
            span="new collection"
            image={bag_4}
            name="The trendy bag"
            price="150"
            />
        </main>
        </>
    );
}


export default App;



