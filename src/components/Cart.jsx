import React from 'react';
import { connect } from 'react-redux';
import {
    updateCart,
    purgeCart
} from '../redux/actions/cart';
import { updateWallet } from '../redux/actions/wallet'

class Cart extends React.Component{
    constructor(props){
        super(props);
    }

    getArchive = () => {
        // TODO implement endpoint call
        return null;
    }

    purgeCart = () => {
        this.props.purgeCart();
    }

    pay = () => {
        const cartItems = this.props.cart.items;
        let walletItems = this.props.wallet.items;
        walletItems.push(...cartItems)
        this.props.updateWallet(walletItems);
        this.purgeCart()

    }

    componentWillMount(){
        console.info('Cart.jsx will mount');
        console.info(this.props)   
    }

    render(){

        if(this.props.cart.items.length < 1){
            return (<>
                <h4>Cart</h4>
                <div id="cart">
                    <h2>Empty cart!!!</h2>                    
                </div>
            </>);
        }

        return (<>
            <h4>Cart</h4>
            <div id="cart">
                <CartItems items={this.props.cart.items}/>
            </div>
            <div className="cart-options">
                <button className="purge" onClick={()=>this.purgeCart()}>PURGE</button>
                <button className="pay" onClick={()=>this.pay()}>PAY</button>
            </div>
        </>);
    }
}
const CartItems = (props) =>{
    const items = props.items;
    const itemListEl = items.map((item, itemIndex)=>{
        return(
        <div key={itemIndex} className="flex row space-between cart-row">
            <span>Name: {item.name}</span>
            <span>Quantity: {item.quantity}</span>    
        </div>
        );
    });
    return itemListEl;
}

const mapStateToProps = state => {
    return {
        cart: state.cart,
        wallet: state.wallet
    }
}
const mapDispatchToProps = () => {
    return {
        updateCart,
        purgeCart,
        updateWallet
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Cart)