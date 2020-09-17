import React from 'react';

import Table from '../Utils/Table';
import Row from '../Utils/Row';

export default class Img extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    let content;
    let caption;
    if (this.props.isText) {
      if (this.props.data.caption) {
        caption = <>\nCaption: {this.props.data.caption}</>
      }
      content = <Row isText={this.props.isText}>Photo: {this.props.data.alt}{caption}</Row>
    } else {
      if (this.props.data.caption) {
        caption = <Row style={this.props.style.captionRow} isText={this.props.isText}>
                  <span uuid='caption' style={{ ...{ fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif", fontStyle: 'italic', fontSize: '16px' }, ...this.props.captionStyle }}>
                    {this.props.data.caption}
                  </span>
                </Row>
        content = <><Row style={this.props.style.imgRow} isText={this.props.isText}>
                    <img uuid='img' style={{...{borderRadius: '5px'}, ...this.props.style.img}} 
                        alt={this.props.data.alt || ''} 
                        src={this.props.data.src}/>
                  </Row>
                  {caption}</>
      }
    }
    
    return(
      <Table style={this.props.style.table} isText={this.props.isText}>
        {content}
      </Table>
    );
  }
}