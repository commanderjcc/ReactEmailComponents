import React from 'react';
import {renderToStaticMarkup} from 'react-dom/server';

import Row from '../Utils/Row';
import Table from '../Utils/Table';
import hasher from '../Utils/hasher';

//TODO: Refactor so that each Paragraph object represents 1 paragraph, will stop all the useless <br/>s and such.

export default class Paragraph extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let content;
    if (this.props.isText) {
      content = this.props.data.paragraphs.map((p) => {
        let text = p.text;
        if (p.indented) {
          text = "\t" + text;
        }
        return <Row isText={this.props.isText}>{text}</Row>
      })
    } else {
      content = this.props.data.paragraphs.map((p) => {
        let text = p.text;
        let blockLetter;
        if (p.blockLetter && text.length > 1) {
          blockLetter = <span style={{ ...{ fontSize: '20px', fontWeight: 900, backgroundColor: '#000000', color: '#ffffff', padding: '3px', margin: '2px', borderRadius: '5px' }, ...p.style.blockLetterStyle }}>{text.trimStart().substr(0, 1)}</span>;
          text = text.substring(1);
        }
        if (p.indented) {
          text = '&emsp;' + text;
        }

        const innerHTML = renderToStaticMarkup(blockLetter) + text;

        const hashKey = p.hash || hasher(text);
        p.hash = hashKey;
        return (
          <Row key={hashKey} style={p.style.row} isText={this.props.isText}>
            <p dangerouslySetInnerHTML={{ __html: innerHTML }} style={{ ...{ fontFamily: "'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif", fontSize: '14px' }, ...p.style.p }}></p>
          </Row>
        );
      })
    }
      
    return(
      <Table isText={this.props.isText}>
        {content}
      </Table>
    );
  }
}