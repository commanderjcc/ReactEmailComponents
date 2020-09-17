import React from 'react';

export default class Row extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    let output;
    if (this.props.isText) {
      output = <>{this.props.children}\n\n</>
    } else {
      let content;
      if(Array.isArray(this.props.children)) {
        content = this.props.children.map((element, index) => {
          let colSpan;
          if (this.props.style.cells[index].colSpan) {
            colSpan = this.props.style.cells[index].colSpan;
          } else {
            colSpan = this.props.fullWidth ? 999 : 1;
          }
          return (<td key={element.props.uuid} colSpan={colSpan} style={this.props.style.cells[index].style}>
                    {element}
                  </td>
          );
        });
      } else {
        let colSpan;
        if (this.props.style.cells[0].colSpan) {
          colSpan = this.props.style.cells[0].colSpan;
        } else {
          colSpan = this.props.fullWidth ? 999 : 1;
        }
        content = <td colSpan={colSpan} style={this.props.style.cells[0].style}>
                    {this.props.children}
                  </td>;
      }
      output = <tr style={this.props.style.rowStyle}>
                 {content}
               </tr> 
    }
    
    return output;
  }
}