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
    {
      /*const emailContent = this.props.content.map((block) => {
      let output;
      let shorthand = true;
      switch (block.type) {
        case 'table':
          shorthand = false;
          output = Table.selfAssemble
        case 'Img':
          output = <Img style={block.style.content} data={block.data} isText={this.props.isText}/>
          break;
        case 'Link':
          output = <Link />
          break;
        case 'Paragraph':
          output = <Paragraph style={block.style.content} data={block.data} isText={this.props.isText}/>
          break;
        case 'Quote':
          output = <Quote />
          break;
        case 'Signature':
          output = <Signature />
          break;
        case 'Title':
          output = <Title style={block.style.content} data={block.data} isText={this.props.isText}/>
          break;
        case 'Unsubscribe':
          output = <Unsubscribe user={this.props.user} style={block.style.content} data={block.data} isText={this.props.isText}/>
          break;
        default:
          return null;
      }
      return (<Row key={block.uuid} style={block.style.parentRow} isText={this.props.isText}>{output}</Row>)
    });
  */
    }

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
