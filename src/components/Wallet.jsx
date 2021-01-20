import React from 'react';
import { connect } from 'react-redux';


class Wallet extends React.Component{
    constructor(props){
        super(props);
    }

    componentWillMount(){
        console.info('Wallet.jsx will mount');
        console.info(this.props)   
    }

    render(){
        const wallet = this.props.wallet;
        return (<>
            <h4>Cart</h4>
            <div className="flex row space-between">
                <div id="wallet" className="container">
                    <WalletItems items={this.props.wallet.items}/>
                </div>
                <div id="balance" className="container">
                    <h2>Balance: ${wallet.balance}</h2>
                </div>
            </div>
        </>);
    }
}

const WalletItems = (props) =>{
    const items = props.items;
    const itemListEl = items.map((item, itemIndex)=>{
        return(
        <div key={itemIndex} className="flex row space-between wallet-row">
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
        
    }
}
export default connect(mapStateToProps, mapDispatchToProps())(Wallet)