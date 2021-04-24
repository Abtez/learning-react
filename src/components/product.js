import React from 'react';
import PropTypes from 'prop-types';
import './practise/practise.css';
import defaultImage from '../assets/default-image.jpg';

const Product = ({image,name,price}) => {
    const ifImage = image && image.url;
    console.log(image,name,price);
    return(

        <article className="product">
        <img src={ifImage || defaultImage} alt={name} />
            <h4>{name || 'default name'}</h4>
            <p>${price || 3.99}</p>
        </article>
    )
}
    Product.propTypes = {
        image:PropTypes.object.isRequired,
        name:PropTypes.string.isRequired,
        image:PropTypes.number.isRequired,
    };

    // Product.defaultProps = {
    //     name : 'default name',
    //     price : 3.99,
    //     image : defaultImage
    // }
    
export default Product;