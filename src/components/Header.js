import React from 'react';
import { connect } from 'react-redux';
// import

const Header = props => {
  const { car } = props;

  return (
    <>
      <figure className="image is-128x128">
        <img src={car.image} alt={car.name} />
      </figure>
      <h2>{car.name}</h2>
      <p>Amount: ${car.price}</p>
    </>
  );
};

const mapStateToProps = state => {
  console.log(state);
  return {
    car: state.car
  }
}

export default connect(mapStateToProps)(Header);
// export default Header;
