import React from "react";

import {emailComponent, Table, Row, Cell} from "../internals";

export class ViewRoot extends emailComponent {
  constructor(props) {
    super(props);
  }

  tableLevel = "table"

  defaultStyle = {
    padding: "20px",
    backgroundColor: "#e9edf0",
    borderRadius: "20px",
    width: "600px",
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
            <Cell style={{columnSpan: 999}} isText={this.props.isText}>{element}</Cell>
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
        <html>
          <body>
            <Table isText={this.props.isText}>
              <tr>
                <td></td>
                <td
                  width={computedStyle.width}
                  bgcolor={computedStyle.backgroundColor}
                  style={computedStyle}
                  align="center"
                >
                  <Table isText={this.props.isText}>{content}</Table>
                </td>
                <td></td>
              </tr>
            </Table>
          </body>
        </html>
      );
    }
    return output;
  }
}
