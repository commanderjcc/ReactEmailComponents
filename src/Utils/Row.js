import React from "react";
import { emailComponent, Cell } from "../internals";

export class Row extends emailComponent {
  constructor(props) {
    super(props);
  }

  tableLevel = "row";

  defaultStyle = {};

  render() {
    let output;
    let children = this.props.children ?? this.parseContent(this.props.content);

    if (!Array.isArray(children)) {
      children = [children];
    }

    let content = children.map((element) => {
      if (element.props?.shorthand) {
        return (
          <Cell isText={this.props.isText}>{element}</Cell>
        );
      } else {
        return element;
      }
    });

    if (this.props.isText) {
      output = <>{content}\n\n</>;
    } else {
      let computedStyle = { ...this.defaultStyle, ...this.props.style };
      output = <tr style={computedStyle}>{content}</tr>;
    }

    return output;
  }
}
