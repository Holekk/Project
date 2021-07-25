import React from 'react'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { DragHandle } from '@material-ui/icons';




export default function Product(props) {
    const {product, onAdd} = props;
    const [count, setCount] = React.useState(false)// Ustawienie false pozwala na ukrycie koszyka na początku(Przestawienie na true pokaże koszyk od początku )
    const show = () => setCount(true) // funkcja strzałkowa(skrócony zapis zwykłej funkcji) -> ustawienie na true(jeżeli będzie true to Results() zostanie wykonany)
    const hidden = () => setCount(false)// funkcja strzałkowa(skrócony zapis zwykłej funkcji)-> ustawienie na false(jeżeli będzie false to Results() zostanie ,,cofnięty")

    return (
        <div className="ProductCart">
        <div className="Cart"  onMouseLeave={hidden}  onMouseEnter={show}> {/* Karta produktów która posiada funkcje ukrywania oraz wyświetlania przycisku koszyka po najechaniu myszką */}
        <img className="image" src={product.image} alt={product.name}></img> {/* Zdjęcie produkt oraz w przypadku nie wyświetlnia się zdjęcia - nazwa  */}
              { count ? <button type="button" onClick={()=>onAdd(product)}><ShoppingCartIcon/></button>  : false } {/* Jeżeli najedziemy myszką to zostanie utworzony przycisk z ikoną z funkcją dodawania do koszyka */}
        </div>
        <div className="info">
        <h3>{product.name}</h3> {/* nazwa produktu  */}
            ${Math.round(product.price  ) /100 }{/* Cena produktu */}
        </div>
        </div>
    )
}
