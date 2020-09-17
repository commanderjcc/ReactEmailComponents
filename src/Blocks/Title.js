import React from 'react';

import Table from '../Utils/Table';
import Row from '../Utils/Row';

export default class Title extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    let content;
    if (this.props.isText) {
      content = <>{this.props.data.title} - {this.props.data.date}</>
    } else {
      content = [<span key='title' uuid='title' style={{...{fontFamily:"-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif", fontWeight: 500, fontSize: '30px'},...this.props.titleStyle}}>
                  {this.props.data.title}
                </span>,
                <span key='date' uuid='date' style={{...{fontSize: '14px', fontFamily: "Geneva, Verdana, sans-serif", color: '#535353', fontWeight: 500},...this.props.dateStyle}}>
                  {this.props.data.date}
                </span>]
    }

    return(
      <Table style={this.props.style.table} isText={this.props.isText}>
        <Row style={this.props.style.row} isText={this.props.isText}>
            {content}
        </Row>
      </Table>
    );
  }
}
