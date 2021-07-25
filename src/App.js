import './App.css';
import Navbar from "./Components/Navbar";
import Slider from "./Components/Slider";
import Main from "./Components/Main";
import { render } from '@testing-library/react';
import data from "./data";
import  {useState } from 'react';
import Basket from './Basket';

function App() {
  const { products } = data; //Przekazanie pliku data.js do zmiennej const  
  const [cartItems, setCartItems] = useState([]); //Deklaracja zmiany stanu

  //------------------------- Przycisk służący do zwiększenia ilości produktów w koszyku -------------------------

  const onAdd = (product) => {
    const exist = cartItems.find (x => x.id === product.id);
  if (exist){//Jeżeli produkt istnieje to:
    setCartItems(
      cartItems.map(x => x.id === product.id ? {...exist, qty: exist.qty +1}: x) //jeżeli id zmiennej x odpowiada id produktu to po kliknięciu dodaj +1
        );
  }else{//W przeciwnym wypadku:
    setCartItems([...cartItems, {...product, qty: 1}])
  }
};




//------------------------- Przycisk służący do zmniejszenia ilości produktów w koszyku -------------------------
const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if(exist.qty === 1)//Jeżeli jest jeden produkt w koszyku to:
  {
    setCartItems(cartItems.filter((x)=> x.id !== product.id));
  }else { //W przeciwnym wypadku:
    setCartItems (
      cartItems.map((x) => 
      x.id === product.id ? {...exist, qty: exist.qty - 1} : x) //jeżeli id zmiennej x odpowiada id produktu to po kliknięciu odejmij -1
    );
     
  }
};



//------------------------- Przycisk zrobiony na podstawie przycisku wyżej, pierwsze kliknięcie sprowadza wartośc do 0 następne usuwa z produkt z listy -------------------------
const onDelete = (product) => 
{
  const exist = cartItems.find((x) => x.id ===product.id);
  if(exist.qty === 0) //Jeżeli wartość produktu w koszyku jest równa 0 to:
  {
    setCartItems(cartItems.filter((x)=> x.id !== product.id));
  }else {//W przeciwnym wypadku:
  setCartItems(
    cartItems.map((x) =>
    x.id === product.id ? {...exist, qty: exist.qty - exist.qty} : x)   //jeżeli id zmiennej x odpowiada id produktu to po kliknięciu odejmij tyle ile jest w produktów(ilośc produktów - ilość produktów)
  );
  }
};
  return (

<div className = "App"> 
  <Navbar /> {/* Wywołanie funkcji Navbar znajdującej się w Navbar.js*/}
  <Slider/>
 <Main onAdd={onAdd} products = {products}></Main>
<Basket onAdd={onAdd} onRemove={onRemove} onDelete={onDelete} cartItems={cartItems} ></Basket> {/*Do koszyka zostały dodane funkcje odAdd(Dodawanie w koszyku), onRemove(Zmniejsznaie ilośći w koszyku), onDelete(Usuwanie w koszyku) oraz cartItems*/}

 </div>
);
}
export default App;
