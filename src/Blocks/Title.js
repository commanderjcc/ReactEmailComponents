import React from 'react';

import { emailComponent, Table, Row, Cell } from "../internals";

export class Title extends emailComponent {
  constructor(props) {
    super(props);
  }

  defaultStyle = {
    title: {
      cell: {},
      span: {
        fontFamily:
          "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
        fontWeight: 500,
        fontSize: "30px",
      }
    },
    date: {
      cell: {
        width: "165px",
        verticalAlign: "top",
        textAlign: "right",
        padding: "10px 0 20px 20px",
      },
      span: {
        fontSize: "14px",
        fontFamily: "Geneva, Verdana, sans-serif",
        color: "#535353",
        fontWeight: 500,
      }
    },
    row: {
      width: "100%",
    },
    table: {},
  };

  render() {
    let title;
    let date;
    let content;
    let computedStyles = {
      title: {
        cell: {
          ...this.defaultStyle?.title?.cell,
          ...this.props.style?.title?.cell,
        },
        span: {
          ...this.defaultStyle?.title?.span,
          ...this.props.style?.title?.span,
        },
      },
      date: {
        cell: {
          ...this.defaultStyle?.date?.cell,
          ...this.props.style?.date?.cell,
        },
        span: {
          ...this.defaultStyle?.date?.span,
          ...this.props.style?.date?.span,
        },
      },
      row: {
        ...this.defaultStyle?.row,
        ...this.props.style?.row,
      },
      table: {
        ...this.defaultStyle?.table,
        ...this.props.style?.table,
      },
    };

    if (this.props.isText) {
      content = (
        <>
          {this.props.data?.title} - {this.props.data?.date}
        </>
      );
    } else {
      

      title = (
        <span
          key="title"
          style={computedStyles.title.span}
        >
          {this.props.data?.title}
        </span>
      );
      date = (
        <span
          key="date"
          style={computedStyles.date.span}
        >
          {this.props.data?.date}
        </span>
      );
    }

    content = (
      <>
        <Cell style={computedStyles.title.cell} isText={this.props.isText}>
          {title}
        </Cell>
        <Cell style={computedStyles.date.cell} isText={this.props.isText}>
          {date}
        </Cell>
      </>
    )

    if (this.props.saved_shorthand === "row") {
      return content;
    }

    content = (
      <Row style={computedStyles.row} isText={this.props.isText}>
        {content}
      </Row>
    )

    if (this.props.saved_shorthand === "table") {
      return content;
    }

    return (
      <Table style={computedStyles.table} isText={this.props.isText}>
          {content}
      </Table>
    );
  }
}
