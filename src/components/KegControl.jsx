import React from "react";
import KegFormBlock from "./KegFormBlock";
import KegMenuBlock from "./KegMenuBlock";

class KegControl extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      formVisibleOnPage: false,
    };
  }

  handleClick = () => {
    this.setState((prevState) => ({
      formVisibleOnPage: !prevState.formVisibleOnPage,
    }));
  };

  render() {
    let currentlyVisibleState = null;
    let addKegButton = null;
    if (this.state.formVisibleOnPage) {
      currentlyVisibleState = <KegFormBlock />;
    } else {
      currentlyVisibleState = <KegMenuBlock />;
      addKegButton = <button onClick={this.handleClick}>Add Keg</button>;
    }
    return (
      <React.Fragment>
        {currentlyVisibleState}
        {addKegButton}
      </React.Fragment>
    );
  }
}

export default KegControl;