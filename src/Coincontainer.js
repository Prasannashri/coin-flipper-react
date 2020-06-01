import React , { Component } from 'react';
import Coin from './Coin'
import { choice } from './helpers'
import  coinHead  from './coin-head.jpg'
import  coinTail  from './coin-tail.jpg'
class Coincontainer extends Component {
    static defaultProps = {
        coins : [
            {side : 'heads' ,imgSrc :  coinHead },
            {side : 'tails' ,imgSrc :  coinTail },
        ]
    }
    constructor(props){
        super(props);
        this.state = {
            currCoin : null,
            nFlips : 0,
            nHeads : 0,
            nTails :0
        }
    }
    flipCoin = () =>{
        const newCoin = choice(this.props.coins);
        console.log(newCoin)
        this.setState( st =>{
            return {
                currCoin : newCoin,
                nFlips : st.nFlips + 1,
                nHeads : st.nHeads + (newCoin.side === 'heads' ? 1 : 0),
                nTails : st.nTails + (newCoin.side === 'tails' ? 1 : 0)
            }
        })
    }
    render(){
        return (
            <div className = "Coincontainer">
                <h2>Flip the Coin here!!</h2>
                { this.state.currCoin && <Coin info={this.state.currCoin}/>}
                <button onClick= {this.flipCoin}>Flip Coin!</button>
                <p>Out of {this.state.nFlips } Flips , {this.state.nHeads } Heads and {this.state.nTails} tails</p>
            </div>
        )
    }
}
export default Coincontainer;