import React from 'react';
import giraffe from '../giraffe.jpeg';
import '../App.css';

const Jumbotron = (props) => {
    return (
        <div className='jumbotron jumbotron-fluid text-center' styles= {{backgroundImage: `url(${giraffe})`}}>
        <div className='container'>
            <h3 className='display-4' id='h3Title'>NEED A NOVEL IDEA?</h3>
            <p className='lead' id='pTitle'>Pick up a book.<br />
            Netflix can wait.</p>
        </div>
        </div>
    )
}

export default Jumbotron;