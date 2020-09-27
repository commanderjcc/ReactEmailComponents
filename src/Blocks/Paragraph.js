import React from "react";

import { emailComponent } from "../internals";

export class Paragraph extends emailComponent {
  constructor(props) {
    super(props);
  }

  defaultStyle = {
    fontFamily:
      "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif",
    fontSize: "14px",
    padding: "0 20px",
  };

  render() {
    let content;
    let text = this.props.data?.html ?? this.props.data?.text ?? "";

    let computedStyles = {
      ...this.defaultStyle,
      ...this.props.style,
    };

    if (this.props.isText) {
      if (this.props.data?.indented ?? true) {
        text = "\t" + text;
      }
      content = <>{text}</>;
    } else {
      if (this.props.data?.indented ?? true) {
        text = "&emsp;" + text;
      }
      content = (
        <p
          dangerouslySetInnerHTML={{ __html: text }}
          style={computedStyles}
        ></p>
      );
    }

    return content;
  }
}
