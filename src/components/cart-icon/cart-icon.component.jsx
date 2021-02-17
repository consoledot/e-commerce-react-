import './cart-icon.style.scss'
import {connect} from 'react-redux'
import {toggleCartHidden} from '../../redux/cart/cart.action'


import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg'

const CartIcon = ({toggleCartHidden, cartItems})=>(
    <div className="cart-icon" onClick={toggleCartHidden}>
        <ShoppingIcon className="shopping-icon"/>
        <span className="item-count">{cartItems.length}</span>

    </div>
)
const mapDispatchToProps= dispath=>({
    toggleCartHidden: ()=> dispath(toggleCartHidden())
})
const mapStateToProps = ({cart:{cartItems}})=>({
    cartItems
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon)