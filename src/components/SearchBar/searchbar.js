import React, { useState } from 'react';
import "./searchbar.css";

const SearchBar = (props) => {

    const [searchValue, setSearchValue] = useState()

    const handleInputChange = (event) => {
        setSearchValue(event.target.value)
    }

    const handleClearClick = () => {
        setSearchValue("")
    }

    // const shouldDisplayButton = searchValue.length > 0

    const filterPrducts = props.products.filter( (products) => {
        return products.includes("")
    })

    return <div id="search">
        <input type="text" name="" value={searchValue} onChange={handleInputChange} />

        {/* {shouldDisplayButton &&  <button onClick={handleClearClick}>Clear</button>} */}

        <button onClick={handleClearClick}>Clear</button>

        <h3>My Products</h3>

        <ul>
        {filterPrducts.map((products) => {
            return <li key={products}>{products}</li>
        })}
        </ul>
       
    </div>
}

export default SearchBar

