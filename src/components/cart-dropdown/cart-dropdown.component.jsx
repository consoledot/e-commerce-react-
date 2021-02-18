import CustomButton from '../custom-button/custom-button.component'
import CartItem from '../cart-item/cart-item.component'
import {connect} from 'react-redux'
import './cart-dropdown.style.scss'
import {selectCartItems} from '../../redux/cart/cart.selectors'
import {toggleCartHidden} from '../../redux/cart/cart.action'
import {createStructuredSelector} from 'reselect'
import {withRouter} from 'react-router-dom'

const CartDropdown = ({cartItems, history, toggleCartHidden})=>(
    <div className="cart-dropdown">
        <div className="cart-items">
        {
            cartItems.length ?
            cartItems.map(cartItem=> <CartItem key={cartItem.id} item={cartItem}/>)
            : <span className="empty-message">You cart is empty</span>
        }
        </div>
        <CustomButton onClick={()=> {
            history.push("/checkout")
            toggleCartHidden()
            }}>GO TO CHECKOUT</CustomButton>
    </div>
)
const mapStateToProps = createStructuredSelector({
    cartItems: selectCartItems
})
const mapDispatchToProps= dispath=>({
    toggleCartHidden: ()=> dispath(toggleCartHidden())
})
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown))