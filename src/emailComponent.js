import React from 'react';

import Img from "./Blocks/Img";
import Link from "./Blocks/Link";
import Paragraph from "./Blocks/Paragraph";
import Quote from "./Blocks/Quote";
import Signature from "./Blocks/Signature";
import Title from "./Blocks/Title";
import Unsubscribe from "./Blocks/Unsubscribe";

import Table from "./Utils/Table";
import Row from "./Utils/Row";
import Cell from "./Utils/Cell";

export default class emailComponent extends React.Component {
  // constructor(props) {
  //   super(props)
  // }

  tableLevel = false

  defaultStyle = {};

  static selfAssemble(block, isText, shorthand = this.tableLevel) {
    return React.createElement(this, {
      content: block.content ?? block.c ?? {},
      data: block.data ?? block.d ?? {},
      style: block.style ?? block.s ?? this.defaultStyle ?? {},
      shorthand: block.data?.__shorthand ?? shorthand,
      isText: isText,
    });
  }

  parseContent(content) {
    if (typeof content === "undefined" || content === null) {
        return;
    }

    const children = content.map((block) => {
      let output;
      let shorthand = this.tableLevel;
      switch (block.type ?? block.t) {
        case ("table", "tbl", "t"):
          shorthand = false;
        case ("Table", "Tbl", "T"):
          output = Table.selfAssemble(block, this.props.isText, shorthand);
          break;

        case ("row", "tr", "r"):
          shorthand = false;
        case ("Row", "Tr", "R"):
          output = Row.selfAssemble(block, this.props.isText, shorthand);
          break;

        case ("cell", "c", "td"):
          shorthand = false;
        case ("Cell", "C", "Td"):
          output = Cell.selfAssemble(block, this.props.isText, shorthand);
          break;

        case "img":
          shorthand = false;
        case "Img":
          output = Img.selfAssemble(block, this.props.isText, shorthand);
          break;

        case "link":
          shorthand = false;
        case "Link":
          output = Link.selfAssemble(block, this.props.isText, shorthand);
          break;

        case ("paragraph", "p"):
          shorthand = false;
        case ("Paragraph", "P"):
          output = Paragraph.selfAssemble(block, this.props.isText, shorthand);
          break;

        case "quote":
          shorthand = false;
        case "Quote":
          output = Quote.selfAssemble(block, this.props.isText, shorthand);
          break;

        case "signature":
          shorthand = false;
        case "Signature":
          output = Signature.selfAssemble(block, this.props.isText, shorthand);
          break;

        case "title":
          shorthand = false;
        case "Title":
          output = Title.selfAssemble(block, this.props.isText, shorthand);
          break;

        case "unsubscribe":
          shorthand = false;
        case "Unsubscribe":
          output = Unsubscribe.selfAssemble(block, this.props.isText, shorthand);
          break;

        case ("html", "raw"):
          shorthand = false;
        case ("Html", "HTML", "Raw"):
          output = Html.selfAssemble(block, this.props.isText, shorthand);
          break;

        default:
          output = null;
      }
      return output;
    });
  }
}