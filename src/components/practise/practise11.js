import React from 'react';
import {useFetch} from '../customHook';

const url = 'https://type.fit/api/quotes';

const Example = () => {
    const {loading} = useFetch(url);
    return(
        <div>
            <h2>{loading ? 'loading...' : 'data'}</h2>
        </div>
    );
};

export default Example;