import React, { useReducer } from 'react';

import {
  Img,
  Paragraph,
  Title,
  Unsubscribe,
  Cell,
  Row,
  Table,
  Restricted
} from "./internals";

export class emailComponent extends React.Component {
  tableLevel = false;

  defaultStyle = {};

  static selfAssemble(block, isText, user, shorthand = this.tableLevel) {
    let restricted = block.r ?? block.restricted ?? false;
    let privileged = user?.privileged ?? false;
    if (restricted) {
      if (!privileged) {
        return null;
      }
      
      return <Restricted isText={isText} user={user}>
        { 
          React.createElement(this, {
            restricted: restricted,
            content: block.content ?? block.c ?? {},
            data: block.data ?? block.d ?? {},
            style: block.style ?? block.s ?? this.defaultStyle ?? {},
            shorthand: block.data?.__shorthand ?? block.d?.__shorthand ?? shorthand,
            isText: isText,
            user: user
          })
        }
      </Restricted>
    }

    return React.createElement(this, {
      restricted: restricted,
      content: block.content ?? block.c ?? {},
      data: block.data ?? block.d ?? {},
      style: block.style ?? block.s ?? this.defaultStyle ?? {},
      shorthand: block.data?.__shorthand ?? block.d?.__shorthand ?? shorthand,
      isText: isText,
      user: user
    });
  }

  parseContent(content) {
    if (typeof content === "undefined" || content === null) {
        return;
    }
    return content.map((block) => {
      let output;
      let shorthand = this.tableLevel;
      switch (block.type ?? block.t) {
        case "table":
        case "tbl":
        case "t":
          shorthand = false;
        case "Table":
        case "Tbl":
        case "T":
          output = Table.selfAssemble(block, this.props.isText, this.props.user, shorthand);
          break;

        case "row": 
        case "tr":
        case "r":
          shorthand = false;
        case "Row":
        case  "Tr":
        case  "R":
          output = Row.selfAssemble(block, this.props.isText, this.props.user, shorthand);
          break;

        case "cell":
        case  "c":
        case  "td":
          shorthand = false;
        case "Cell":
        case  "C":
        case  "Td":
          output = Cell.selfAssemble(block, this.props.isText, this.props.user, shorthand);
          break;

        case "img":
          shorthand = false;
        case "Img":
          output = Img.selfAssemble(block, this.props.isText, this.props.user, shorthand);
          break;

        // case "link":
        //   shorthand = false;
        // case "Link":
        //   output = Link.selfAssemble(block, this.props.isText, this.props.user, shorthand);
        //   break;

        case "paragraph":
        case  "p":
          shorthand = false;
        case "Paragraph":
        case  "P":
          output = Paragraph.selfAssemble(block, this.props.isText, this.props.user, shorthand);
          break;

        // case "quote":
        //   shorthand = false;
        // case "Quote":
        //   output = Quote.selfAssemble(block, this.props.isText, this.props.user, shorthand);
        //   break;

        // case "signature":
        //   shorthand = false;
        // case "Signature":
        //   output = Signature.selfAssemble(block, this.props.isText, this.props.user, shorthand);
        //   break;

        case "title":
          shorthand = false;
        case "Title":
          output = Title.selfAssemble(block, this.props.isText, this.props.user, shorthand);
          break;

        case "unsubscribe":
          shorthand = false;
        case "Unsubscribe":
          output = Unsubscribe.selfAssemble(block, this.props.isText, this.props.user, shorthand);
          break;

        // case "html":
        // case  "raw":
        //   shorthand = false;
        // case "Html":
        // case  "HTML":
        // case  "Raw":
        //   output = Html.selfAssemble(block, this.props.isText, this.props.user, shorthand);
        //   break;

        case "res":
        case "restricted":
          shorthand = false;
        case "Res":
        case "Restricted":
          output = Restricted.selfAssemble(block, this.props.isText, this.props.user, shorthand);
          break;

        default:
          console.log("Unrecognized type, Skipping", (block.type ?? block.t))
          output = null;
      }
      return output;
    });
  }
}