import React, {useEffect, useState} from 'react';
import CountBtn from './CountBtn/countbtn'
import SearchBar from './SearchBar/searchbar'
import Booklist from './booklist/booklist'
import StateCount from './practise/practise'
import UseEffectBasic from './practise/practise2'
import UseEffectCleanUp from './practise/practise3'
import MultipleReturn from './practise/practise4'
import ShowHide from './practise/practise6'
import ControlledInput from './practise/practise7'
import MultipleInputs from './practise/practise8'
import PropDrilling from './practise/practise9'
import ContextApi from './practise/practise10'
import Example from './practise/practise11'
import Index from './practise/practise12'
import UseEffectGit from './git/git'
import ReactRouterSetup from './router';


export const books = [
    {
    id : 1,
    img : 'https://images-na.ssl-images-amazon.com/images/I/91AQs6qv9ML._AC_UL200_SR200,200_.jpg',
    title : 'Untamed',
    author : 'Abzed Tetz',
},    
{
    id :2,
    img : 'https://images-na.ssl-images-amazon.com/images/I/81RuAzKrHkL._AC_UL200_SR200,200_.jpg',
    title : 'The 5 Love Languages',
    author : 'Gary Chapman',
}
]

const App = () => {
    
    const [productState, setProductState] = useState([])

    useEffect(() => {

        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then((productsArray) => {
                const newProductState = productsArray.map( (products) => {
                    
                    return products.title
                })
                setProductState(newProductState)
            })
    }, [productState])

    const hasProduct = productState.length > 0
    

    return ( 

        <div className="container">

        <div>
            <StateCount />
        </div>

        <div>
            <UseEffectBasic />
        </div>

        <div>
            <UseEffectCleanUp />
        </div>

        <div>
            <Index />
        </div>

        <div>
            <ReactRouterSetup />
        </div>

        <div>
        {hasProduct ? <SearchBar products={ productState } /> : "Loading..."}
            <Example />
        </div>

        <div>
            <ContextApi />
        </div>

        <div>
            <PropDrilling />
        </div>

        <div>
            <MultipleInputs />
        </div>

        <div>
            <ControlledInput />
        </div>

        <div>
            <ShowHide />
        </div>

            <div>
            <MultipleReturn />
            </div>

            <div>
            <UseEffectGit />
            </div>
            
            <CountBtn incrementBy={1} buttonColor={ "blue" }/>
            <CountBtn incrementBy={5} buttonColor={ "green" }/>
            <CountBtn incrementBy={10} buttonColor={ "pink" }/> 

            <section className="booklist">

            {books.map( (book) => {

                return <Booklist key={book.id} book={book} />

            })}

            </section>

        </div>

        //     <StateCount />
        //     <UseEffectBasic />
        //     <UseEffectCleanUp />
            
        // </div>
      
    )
}

export default App