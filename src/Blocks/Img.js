import React from "react";

import Table from "../Utils/Table";
import Row from "../Utils/Row";
import Cell from "../Utils/Cell";
import emailComponent from "../emailComponent";

export default class Img extends emailComponent {
  constructor(props) {
    super(props);
  }

  static selfAssemble(block, isText, shorthand = this.tableLevel) {
    let saved_shorthand = shorthand;
    if (shorthand === "table") {
      shorthand = false;
    }

    return React.createElement(this, {
      content: block.content ?? block.c ?? {},
      data: block.data ?? block.d ?? {},
      style: block.style ?? block.s ?? this.defaultStyle ?? {},
      shorthand: block.data?.__shorthand ?? shorthand,
      saved_shorthand: saved_shorthand,
      isText: isText,
    });
  }

  defaultStyle = {
    caption: {
      span: {
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        fontStyle: "italic",
        fontSize: "16px",
      },
      row: {},
      cell: {
        textAlign: "center",
        padding: "0 0 10px 0",
      },
    },
    image: {
      img: {
        borderRadius: "5px",
        width: "600px",
      },
      row: {},
      cell: {
        textAlign: "center",
      },
    },
    table: {},
  };

  render() {
    let caption;
    let image;

    let computedStyles = {
      caption: {
        span: {
          ...defaultStyle.caption?.span,
          ...this.props.style?.caption?.span,
        },
        row: {
          ...defaultStyle.caption?.row,
          ...this.props.style?.caption?.row,
        },
        cell: {
          ...defaultStyle.caption?.cell,
          ...this.props.style?.caption?.cell,
        },
      },
      image: {
        img: {
          ...defaultStyle.image?.img,
          ...this.props.style?.image?.img,
        },
        row: {
          ...defaultStyle.image?.row,
          ...this.props?.style.image?.row,
        },
        cell: {
          ...defaultStyle.image?.cell,
          ...this.props.style?.image?.cell,
        },
      },
      table: {
        ...defaultStyle.table,
        ...this.props.style?.table,
      },
    };

    if (this.props.isText) {
      if (this.props.data?.caption) {
        caption = <>\nCaption: {this.props.data.caption}</>;
      }
      return (
        <Row isText={this.props.isText}>
          Photo: {this.props.data.alt}
          {caption}
        </Row>
      );
    } else {
      if (this.props.data?.caption) {
        caption = (
          <span key="caption" style={computedStyles.caption?.span}>
            {this.props.data.caption}
          </span>
        );
      }

      if (this.props.data?.src) {
        image = (
          <img
            key="img"
            style={computedStyles.image?.img}
            alt={this.props.data.alt || ""}
            src={this.props.data.src}
          />
        );
      }
    }

    let content = (
      <>
        <Row style={computedStyles.caption?.row} isText={this.props.isText}>
          <Cell style={computedStyles.caption?.cell}>
            {image}
          </Cell>
        </Row>
        <Row style={computedStyles.image?.row} isText={this.props.isText}>
          <Cell style={computedStyles.image?.cell}>
            {caption}
          </Cell>
        </Row>
      </>
    );

    if (this.props.saved_shorthand !== "table") {
      content = (
        <Table style={computedStyles.table} isText={this.props.isText}>
          {content}
        </Table>
      );
    }

    return content;
  }
}
