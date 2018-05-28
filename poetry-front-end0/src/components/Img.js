import React from 'react';

const Img = props => (

  <div className="img-wrap">
    <img className="image" src={props.url} width="400" height="300" alt=""/>
    <div class="text-block">
      <h4>Nature</h4>
      <p>What a beautiful sunrise</p>
    </div>
  </div>
);

export default Img
