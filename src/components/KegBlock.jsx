import React from "react";
import PropTypes from "prop-types";

function KegBlock(props) {
  return (
    <React.Fragment>
      <div onClick={() => props.whenKegBlockClicked(props.id)}>
        <h3>{props.name}</h3>
        <hr />
      </div>
    </React.Fragment>
  );
}

KegBlock.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
  id: PropTypes.string,
  whenKegBlockClicked: PropTypes.func,
};

export default KegBlock;