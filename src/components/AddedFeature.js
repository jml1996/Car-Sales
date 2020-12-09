import React from 'react';
import { connect } from 'react-redux';
import { removeFeatureFromCar } from './../actions';


const AddedFeature = props => {
  console.log(props);
  const handleClick = e => {
    props.removeFeatureFromCar(props.feature);
  }

  return (
    <li>
      {/* Add an onClick to run a function to remove a feature */}
      <button onClick={handleClick} className="button">X</button>
      {props.feature.name}
    </li>
  );
};

export default connect(null, { removeFeatureFromCar })(AddedFeature);

// export default AddedFeature;
