import React from 'react';
import './App.css';

//import js.files
import Button from './Button.js';
import Product from './Product.js';
import Tile from './Tile.js';

//import pics
import bag_1 from './assets/bag_1.png';
import bag_2 from './assets/bag_2.png';
import bag_3 from './assets/bag_3.png';
import bag_4 from './assets/bag_4.png';
import brand from './assets/brand.png';
import our_story from './assets/our_story.png';

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

        <footer>
        <Tile
        title={'the brand'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis, facere laborum laudantium libero repellendus vel? Aspernatur illum nihil veritatis.'}
        text2={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam corporis, facere laborum laudantium libero repellendus vel? Aspernatur illum nihil veritatis.'}
        />

        <Tile
        hasImage={true}
        image={brand}
        />

        <Tile
        hasImage={true}
        image={our_story}
        />

        <Tile
        title={'our story'}
        text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consequuntur dolorum, ea harum iste maiores minus modi obcaecati odio, praesentium quae quam quibusdam repudiandae similique soluta tenetur veniam veritatis voluptatem!'}
        />

        </footer>
        </>
    );
}


export default App;


