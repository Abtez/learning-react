import {useState, useEffect} from 'react';

export const useFetch = (url) => {
    const [loading, setLoading] = useState(true);
    const [products, setProduct] = useState([]);

    const getProducts = async () => {
        const response = await fetch(url);
        const products = await response.json();
        setProduct(products);
        setLoading(false);
    };

    useEffect(() => {
        getProducts();
    });
    return {loading, products};
};