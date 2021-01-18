import React from "react";
import {emailComponent, Row, Cell} from "../internals";

export class Table extends emailComponent {
  constructor(props) {
    super(props);
  }

  tableLevel = "table";

  defaultStyle = {
    width: "100%",
    height: "100%",
    borderCollapse: "collapse",
    borderSpacing: 0,
    padding: 0,
  };

  render() {
    let output;
    let children = this.props.children ?? this.parseContent(this.props.content);
    if (!Array.isArray(children)) {
      children = [children];
    }

    let content = children.map((element) => {
      if (element?.props?.shorthand) {
        return (
          <Row isText={this.props.isText}>
            <Cell style={{ columnSpan: 999 }} isText={this.props.isText}>
              {element}
            </Cell>
          </Row>
        );
      } else {
        return element;
      }
    });

    if (this.props.isText) {
      output = <>{content}</>;
    } else {
      let computedStyle = { ...this.defaultStyle, ...this.props.style };
      output = (
        <table
          width={computedStyle.width}
          height={computedStyle.height}
          border={computedStyle.borderWidth}
          cellSpacing={computedStyle.borderSpacing}
          cellPadding="0"
          style={computedStyle}
        >
          <tbody>{content}</tbody>
        </table>
      );
    }
 
    return output;
  }
}
