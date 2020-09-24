import React from "react";
import emailComponent from "../emailComponent";

export default class Cell extends emailComponent {
  constructor(props) {
    super(props);
  }

  defaultStyle = {
    columnSpan: 1,
    rowSpan: 1,
  };

  render() {
    let children = this.props.children ?? this.parseContent(this.props.content);

    let output;
    if (this.props.isText) {
      output = <>{children}</>;
    } else {
      let computedStyle = { ...this.defaultStyle, ...this.props.style };
      output = (
        <td
          style={computedStyle}
          colSpan={computedStyle.columnSpan ?? 1}
          rowSpan={computedStyle.rowSpan ?? 1}
        >
          {children}
        </td>
      );
    }
    return output;
  }
}
