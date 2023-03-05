import React from 'react';
import Review from './Revew';
import './Rewstylw.css'

function RewContr(props) {
    return (
        <div>
            <section className="container">
         <div className="title">
  <h2>Our Reviews</h2>
<div className="underline"></div>
    </div>
    <Review/>
    </section>
            
        </div>
    );
}

export default RewContr;