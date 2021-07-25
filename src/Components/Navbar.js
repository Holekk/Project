import React from 'react'
import '../App.css';
import SearchIcon from '@material-ui/icons/Search';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
  } from "react-router-dom";


 /*Navbar zrobiony za pomocą tutorialu https://www.youtube.com/watch?v=nLTMn19vupw */
function Navbar()
{
    return <div className = "Navbar"> {/*Zwrócenie diva o klasie Navbar */} {/* */}
    <div className ="leftSide">{/*Lewa strona*(W css navbar został podzielony na 50%) */}
    <div className="subPages">
        <a id="hello">Hello World </a>  {/* Podstrony zawarte w zadaniu traktowane są jako zwykły tekst bez odnośników*/}
        <a>Home</a>
        <a href="#">Products</a>
        <a >Blog</a>
        <a href="#">Cart</a>
        <a>Contact</a>
        </div> 
        </div>
    <div className ="rightSide"> {/*Prawa strona*(W css navbar został podzielony na 50%) */}
    <input type="text" placeholder="" />{/* Input do wprowadzania tekstu, nie zawierający logiki */}{/* Placeholder służący do wpisania tekstu, który bedzie się wyświetlał w input */}
    <button> <SearchIcon style={{ color: 'white' }}/> </button> {/*Przycisk oraz ikona pobrana z material-ui.com z pomoca tutorialu https://material-ui.com/components/icons/ */}
    
     </div>    
     </div> 
     
}

export default Navbar;