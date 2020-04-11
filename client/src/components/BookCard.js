import React from 'react';
// import Saved from '../pages/Saved';
import { Link } from "react-router-dom";


const BookCard = (props) => {

    return (
        <div className='card- container m-auto bg-light my-5 mx-3'>
            <div className="row">
                <div className="col-4 float-left" >
                <img src={props.image} className="my-5" alt=''/>
                </div>
          
                <div className="col-8 float-right my-4">
                <div className= 'desc'>
                    <h2>{props.title}</h2>
                    <h3>{props.author}</h3>
                    <p>{props.description}</p>
                </div>
              
                <div>
            
            <Link to ="/Saved">
             <button onClick = {()=> {

                 props.saveBook({
                    "title":  props.title,
                    "description": props.description,
                    "link": props.previewLink,
                    "image": props.image,
                    "googleId": props.id
                 })
             }}>SAVE</button>
             </Link>
                <button onClick={props.onClick}><a href={props.previewLink}>VIEW</a></button>
                </div>
            
            </div>
        </div> 
    </div>
    )
}

export default BookCard;