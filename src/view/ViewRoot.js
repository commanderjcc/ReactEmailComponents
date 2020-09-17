import React from "react";
import ReactDOMServer from 'react-dom/server';

import Img from '../Blocks/Img';
import ImgGrid from '../Blocks/ImgGrid';
import Link from '../Blocks/Link';
import Paragraph from '../Blocks/Paragraph';
import Quote from '../Blocks/Quote';
import Signature from '../Blocks/Signature';
import Title from '../Blocks/Title';
import Unsubscribe from '../Blocks/Unsubscribe';

import Table from "../Utils/Table";
import Row from "../Utils/Row";

export default class PreviewRoot extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    const emailContent = this.props.content.map((block) => {
      let output;
      switch (block.type) {
        case 'Img':
          output = <Img style={block.style.content} data={block.data} isText={this.props.isText}/>
          break;
        case 'ImgGrid':
          output = <ImgGrid />
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
    
    let output;
    if (this.props.isText) {
      output = <>{emailContent}</>
    } else {
      output = 
        <html>
          <Table isText={this.props.isText}>
            <tr>
              <td></td>
              <td width="600px" bgcolor="#d9edf0" style={{ padding: '20px', backgroundColor: '#e9edf0', borderRadius: '20px' }} align="center">
                <table border="0" style={{ borderCollapse: 'collapse', borderSpacing: 0, padding: 0 }}>
                  <tbody>
                    {emailContent}
                  </tbody>
                </table>
              </td>
              <td></td>
            </tr>
          </Table>
        </html>
    }
    return output;
  }
}