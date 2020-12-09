import React from 'react';

import Header from './components/Header';
import AddedFeatures from './components/AddedFeatures';
import AdditionalFeatures from './components/AdditionalFeatures';
import Total from './components/Total';

const App = () => {
  // const state = {
    // car: {
    //   price: 26395,
    //   name: '2019 Ford Mustang',
    //   image:
    //     'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
    //   features: []
    // },
    // additionalFeatures: [
    //   { id: 1, name: 'V-6 engine', price: 1500 },
    //   { id: 2, name: 'Racing detail package', price: 1500 },
    //   { id: 3, name: 'Premium sound system', price: 500 },
    //   { id: 4, name: 'Rear spoiler', price: 250 }
    // ],
    // additionalPrice: 0
  // };

  return (
    <div className="boxes">
      <div className="box">
        {/* <Header car={state.car} /> */}
        <Header />
        {/* <AddedFeatures car={state.car} /> */}
        <AddedFeatures />
      </div>
      <div className="box">
        {/* <AdditionalFeatures additionalFeatures={state.additionalFeatures} /> */}
        <AdditionalFeatures />
        {/* <Total car={state.car} additionalPrice={state.additionalPrice} /> */}
        <Total />
      </div>
    </div>
  );
};

// const mapStateToProps = state => {
//   // we use state.title.title instead of state.titleReducer.title because of our naming
//   // of the titleReducer key in the reducers index.js file
//   return {
//     title: state.title.title,
//     editing: state.title.editing
//   }
// }

export default App;
