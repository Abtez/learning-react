import React from 'react';
import {useFetch} from '../customHook';

const url = 'https://course-api.netlify.app/api/javascript-store-products';

const Example = () => {
    const {loading, products} = useFetch(url);
    return(
        <div>
            <h2>{loading ? 'loading...' : 'data'}</h2>
        </div>
    );
};

export default Example;