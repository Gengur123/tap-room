import React from "react";
import PropTypes from "prop-types";

function KegBlock() {
  return <React.Fragment></React.Fragment>;
}

KegBlock.propTypes = {
  name: PropTypes.string.isRequired,
  brand: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  pintsLeft: PropTypes.number.isRequired,
  alcoholContent: PropTypes.number.isRequired,
};

export default KegBlock;