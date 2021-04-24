import React from 'react';
import Product from '../product';
import './practise.css';

import {useFetch} from '../customHook';

const url = 'https://course-api.com/react-prop-types-example';

const Index = () => {
    const {products} = useFetch(url);
    return(
        <div>
            <h1>Products</h1>

            <section className="products">
                {products.map((product) => {
                    return <Product key={product.id} {...product} />;
                })}
            </section>
        </div>
    );
};

export default Index;