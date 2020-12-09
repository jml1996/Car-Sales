import React from 'react';
import { connect } from 'react-redux';

import AdditionalFeature from './AdditionalFeature';

const AdditionalFeatures = props => {
  const { additionalFeatures } = props;

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {additionalFeatures.length ? (
        <ol type="1">
          {additionalFeatures.map(item => (
            <AdditionalFeature key={item.id} feature={item} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    additionalFeatures: state.additionalFeatures
  }
}

export default connect(mapStateToProps)(AdditionalFeatures);

// export default AdditionalFeatures;
