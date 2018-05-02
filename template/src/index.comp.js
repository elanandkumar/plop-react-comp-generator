import React, { PureComponent } from "react";
const isEmptyObject = obj => {
  for (var prop in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, prop)) {
      return false;
    }
  }
  return true;
};

class ##__COMP_NAME__## extends PureComponent {
  render() {
    return (
      <div>
        This is demo ##__COMP_NAME__## component
      </div>
    );
  }
}

export default ##__COMP_NAME__##;
