import React from 'react'
import '../App.css';
import ReactDOM from 'react-dom';
import Product from './Product';
import data from "../data";


export default function Main(props)
{
    const {products, onAdd} = props;
    return(
    <main >
      
        <div>
            {/* Klucze pomagają zidentyfikować, które elementy uległy zmianie(Np. dodawanie/usuwanie elementów). Klucz powienien być unikatowy jak np. ID*/}
        {products.map((product) =>(
            
             <Product key = {product.id} product={product} onAdd={onAdd}></Product>
             ))}</div>
    </main>
    );
}
