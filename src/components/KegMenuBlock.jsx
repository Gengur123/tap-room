import React from "react";
import KegBlock from "./KegBlock";
import PropTypes from "prop-types";

function KegMenuBlock(props) {
  return (
    <React.Fragment>
      <hr />
      {props.kegMenu.map((keg) => (
        <KegBlock
          whenKegBlockClicked={props.onKegSelection}
          name={keg.name}
          brand={keg.brand}
          price={keg.price}
          pintsLeft={keg.pintsLeft}
          alcoholContent={keg.alcoholContent}
          id={keg.id}
          key={keg.id}
        />
      ))}
    </React.Fragment>
  );
}

KegMenuBlock.propTypes = {
  kegMenu: PropTypes.array,
  onKegSelection: PropTypes.func,
};

export default KegMenuBlock;