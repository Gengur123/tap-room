import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";

function KegFormBlock(props) {
  function handleKegFormBlockFromSubmission(event) {
    event.preventDefault();
    props.onKegFormCreation({
      name: event.target.name.value,
      brand: event.target.brand.value,
      price: event.target.price.value,
      pintsLeft: event.target.pintsLeft.value,
      alcoholContent: event.target.alcoholContent.value,
      id: v4(),
    });
  }
  return (
    <React.Fragment>
      <hr />
      <form onSubmit={handleKegFormBlockFromSubmission}>
        <input type="text" name="name" placeholder="Keg Name" required />
        <input type="text" name="brand" placeholder="Keg Brand" required />
        <input
          type="number"
          name="price"
          placeholder="Keg price per pint"
          min="0.00"
          step="0.01"
          required
        />
        <input
          type="number"
          name="pintsLeft"
          placeholder="Pint amount in stock"
          min="0"
          required
        />
        <input
          type="number"
          name="alcoholContent"
          placeholder="Alcohol by volume"
          min="0.00"
          step="0.01"
          required
        />
        <br />
        <button type="submit">Add Keg</button>
      </form>
      <hr />
    </React.Fragment>
  );
}

KegFormBlock.propTypes = {
  onKegFormCreation: PropTypes.func,
};

export default KegFormBlock;