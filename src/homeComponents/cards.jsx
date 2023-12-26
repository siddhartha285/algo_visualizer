import React, {Component} from 'react';
import ImgMediaCard from "./card";
import ImgMediaCard2 from "./card2";
import "./style.css";
import {Link} from "react-router-dom";

import primes from "./images/primes.jpg"
import sort from "./sort.png"

import binSearch from './images/binaryTree.png'
import {getDetails} from "./cardDetails";
import TextField from "@material-ui/core/TextField";
class Cards extends Component {

    state = {
        cards:[],
        filter:""
    }

    componentDidMount() {
        this.setState({cards:getDetails()});
    }
    getData = (e)=>{
        console.log(e.target.value);
        this.setState({filter:e.target.value});
    }
    render() {
        return (
           <div className='home_window' style={{ backgroundColor: 'black' }}>
               <div className="d-flex justify-content-end Cards">
                   <TextField
                       id="standard-basic" label="Search"
                       
                       onChange={this.getData}
                   />
               </div>
               <div className="d-flex flex-wrap justify-content-center Cards p-lg-5" >
                   {
                       this.state.cards.filter((card) => card.title.toLowerCase().includes(this.state.filter.toLowerCase())||card.description.toLowerCase().includes(this.state.filter.toLowerCase())).map(card=>(
                           <div>
                               <ImgMediaCard2
                                   className="d-flex flex-wrap home_window"
                                   key={card.id}
                                   card={card}/>
                           </div>
                       ))
                   }

               </div>
           </div>
        );
    }
}

export default Cards;
/*
<div>
   <ImgMediaCard2
       className="d-flex flex-wrap"
       key={card.id}
       card={card}/>
</div>
 */