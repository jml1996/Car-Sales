import React from 'react';
import { connect } from 'react-redux';

import { addFeatureToCar } from './../actions';

const AdditionalFeature = props => {

  const handleClick = e => {
    console.log(props.feature);
    console.log(props);
    props.addFeatureToCar(props.feature);
  }

  return (
    <li>
      {/* Add an onClick that will let you add a feature to your car */}
      <button onClick={handleClick} className="button">Add</button>
      {props.feature.name} (+{props.feature.price})
    </li>
  );
};

// const mapStateToProps = state => {
//   console.log(state);
//   return {
//     features: state.featuresReducer.members
//   }
// }

export default connect(null, { addFeatureToCar })(AdditionalFeature);

// export default AdditionalFeature;
