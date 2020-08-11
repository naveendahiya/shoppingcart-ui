import React, { Component } from 'react';
import cart from '../images/cart.png';
import user from '../images/user.png';
import '../styles/pages/header.scss';

const items = [
    {
        title: 'HOME',
    },
    {
        title: 'SHOP ALL',
    },
    {
        title: 'FOR FACE',
    },
    {
        title: 'FOR HAIR',
    },
    {
        title: 'ABOUT',
    },
    {
        title: 'CONTACT',
    },
    {
        title: 'FAQ',
    }
]


class Header extends Component {

    constructor(props){
        super(props);
        this.setState = {
        }
        this.listItems = this.listItems.bind(this);
    }

    listItems(){
        const list = items.map((item) => 
        <div className='hvr-overline-from-center'>{item.title}</div>
        )
        return(
            list
        )
    } 

    render(){
        return(
          <>
            <div className="header">
                <div className="logo">LOGO</div>
                 {this.listItems()}
                <div className='logo'>
                    <img src={cart} />
                </div>
                <div className='logo'>
                    <img  src={user} />
                </div>
            </div>
          </>
        )
    }
}

export default Header;