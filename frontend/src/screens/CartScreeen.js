import './CartScreen.css'

//component
import CartItem from '../component/CartItem'

const CartScreen = () => {
    return (
    <div className="CartScreen">
        <div className="cartscreen__left">
            <h2>Shopping Cart</h2>

           <CartItem/>
           <CartItem/>
           <CartItem/>
           <CartItem/>

        </div>
        <div className="cartscreen__right">
            <div className="cartscreen__info">
                <p>Subtotal (0) items</p>
                <p>$4532</p>

            </div>
            <div>
                <button type='button'>Proceed to Checkout</button>
            </div>

        </div>
    </div>
    )
}
 
export default CartScreen;