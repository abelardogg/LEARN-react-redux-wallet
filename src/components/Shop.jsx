import React from 'react';
import { connect } from 'react-redux';
import {
    updateCart,
} from '../redux/actions/cart';

class Shop extends React.Component{
    constructor(props){
        super(props);
    }

    addToCart = (e) => {
        let cartItems = this.props.cart.items;
        let target = document.getElementById(e.target.dataset.target);
        let newItem = {name: target.dataset.name, quantity: target.value}
        if(newItem.quantity < 1){
            alert('select a value gearter than 0')
            return;
        }
        
        if(itemAlreadyInCart(cartItems, newItem)){
            cartItems = mergeRepeatedItems(cartItems, newItem);
        } else {
            cartItems.push(newItem);
        }
        this.props.updateCart(cartItems);
    }

    componentWillMount(){
        console.info('Shop.jsx will mount');
        console.info(this.props)   
    }

    componentDidMount(){
        let quantityInputs = document.getElementsByClassName('quantity-input');

        Array.from(quantityInputs).forEach(input => {
            input.value=0
        })
    }

    render(){
        return (<>
            <h4>Shop</h4>
            <div id="shop">
                <div className="shop-row flex row space-between">
                    <span>Taco coin</span>
                    <input id="tacocoin" className="quantity-input" type="number" min="0" max="20"  data-name="tacocoin"/>
                    <button data-target="tacocoin" onClick={(e)=> this.addToCart(e)}>add to cart</button>
                </div>
                <br/>
                <div className="shop-row flex row space-between">
                    <span>Burguer coin</span>
                    <input id="burguercoin" className="quantity-input" type="number" min="0" max="20"  data-name="burguercoin"/>
                    <button data-target="burguercoin" onClick={(e)=> this.addToCart(e)}>add to cart</button>
                </div>
                <br/>
                <div className="shop-row flex row space-between">
                    <span>Pizza coin</span>
                    <input id="pizzacoin" className="quantity-input" type="number" min="0" max="20"  data-name="pizzacoin"/>
                    <button data-target="pizzacoin" onClick={(e)=> this.addToCart(e)}>add to cart</button>
                </div>
            </div>
        </>);
    }
}

function itemAlreadyInCart(cartItems, newItem){
    for(let i = 0; i < cartItems.length; i++){
        let item = cartItems[i];
        if(item.name === newItem.name){
            return true;
        }
    }

    return false;
}

function mergeRepeatedItems(cartItems, newItem){
    for(let i = 0; i < cartItems.length; i++){
        let item = cartItems[i];
        if(item.name === newItem.name){
            cartItems[i].quantity = Number(item.quantity) + Number(newItem.quantity);
            break;
        }
    }
    return cartItems;
}

const mapStateToProps = state => {
    return {cart: state.cart}
}
const mapDispatchToProps = () => {
    return {
        updateCart,
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Shop)