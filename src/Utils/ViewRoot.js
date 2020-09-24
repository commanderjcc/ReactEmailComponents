import React from "react";
import ReactDOMServer from "react-dom/server";

import Img from "../Blocks/Img";
import ImgGrid from "../Blocks/ImgGrid";
import Link from "../Blocks/Link";
import Paragraph from "../Blocks/Paragraph";
import Quote from "../Blocks/Quote";
import Signature from "../Blocks/Signature";
import Title from "../Blocks/Title";
import Unsubscribe from "../Blocks/Unsubscribe";

import Table from "./Table";
import Row from "./Row";
import emailComponent from "../emailComponent";

export default class PreviewRoot extends emailComponent {
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
      if (element.props?.shorthand) {
        return (
          <Row isText={this.props.isText}>
            <Cell isText={this.props.isText}>{element}</Cell>
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
        </html>
      );
    }
    return output;
  }
}
