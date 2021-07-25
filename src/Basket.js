import React from 'react'
import ClearIcon from '@material-ui/icons/Clear';

export default function Basket(props) {
    const {cartItems, onAdd, onRemove, onDelete} = props; //Dodanie używanych funkcji do props
    const itemsPrice = cartItems.reduce ((a,c) => a+c.price * c.qty, 0);
    const totalPrice = itemsPrice ; //Przekazanie itemsPrice
    <hr/>
    return (
        <div>
            {cartItems.length === 0 && <div className="Empty" style={{ marginLeft: "80px" }}> <p>Koszyk jest pusty</p> </div> }

{cartItems.map((item) =>(
    
<div key={item.id} className="ProductInBasket">

    <img className="Photo" src={item.image}/>  {/* Pobranie obrazu jako ,,src"*/}
    <div className="Name"><strong>{item.name}</strong></div>{/* Pobranie nazwy produktu */}
    <div className="Buttons"> {/* Przyciski */}
    <button  onClick={()=>onRemove(item)} className="remove">-</button>{/* Dodanie do pierwszego przycisku funkcji zmniejszenia ilości  */}
    <th>{item.qty}</th>
        <button onClick={()=>onAdd(item)} className="add">+</button> {/* Dodanie do drugiego przycisku funkcji zwiększania ilośći*/}
    </div>
    <div className="Price"> 
    <strong>  ${item.price.toFixed(2)}</strong> {/*Wyświetlanie  ceny do dwóch miejsC po przecinku(Określa to cyfra/liczba w nawiasie)*/}
    </div>
    <div className="Delete">< ClearIcon onClick={()=>onDelete(item)} style={{ color: "red", fontSize: '40px', border: "none",  cursor:"pointer" }}/></div>
   {/* Przycisk usuwania posiadający wewnątrz ikonę oraz funkcje zerowania produtku(Po ponownym kliknięciu usuwa z koszyka produkt).  */}

</div>


))}

{cartItems.length !== 0 &&( //Jeżeli cartitems.length jest różna od zera to(w przypadku braku elementów cena końcowa nie wyświetli się):

<div className="Total">

    <div><h1>Total ${totalPrice.toFixed(2)}</h1></div> {/*Wyświetlanie podsumowanej ceny do dwóch miejsC po przecinku(Określa to cyfra/liczba w nawiasie)*/}
</div>
)}
        </div>
    );
}
