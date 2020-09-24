import React from "react";
import he from 'he';
// import { renderToStaticMarkup } from "react-dom/server";

import Row from "../Utils/Row";
import Table from "../Utils/Table";
import hasher from "../Utils/hasher";
import emailComponent from "../emailComponent";

//TODO: Refactor so that each Paragraph object represents 1 paragraph, will stop all the useless <br/>s and such.

export default class Paragraph extends emailComponent {
  constructor(props) {
    super(props);
  }

  defaultStyle = {
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    fontSize: "14px"
  }

  render() {
    let content;
    let text = this.props.data?.html ?? this.props.data?.text ?? "";

    let computedStyles = {
      ...this.defaultStyle,
      ...this.props.style,
    }
    
    if (this.props.isText) {
      if (this.props.data?.indented) {
        text = "\t" + text;
      }
      content = <>{text}</>
    } else { 
      if (this.props.data?.indented) {
        text = "&emsp;" + text;
      }
      content = <p
                  dangerouslySetInnerHTML={{ __html: text }}
                  style={computedStyles}
                ></p>
    }

    return content;
  }
}
