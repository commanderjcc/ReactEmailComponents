import React from 'react';

export default class Table extends React.Component {
  constructor(props) {
    super(props);
    
  }
  
  render() {
    let output;

    if(this.props.isText) {
      output = <>{this.props.children}</>
    } else {
      output = <table border="0" cellSpacing="0" cellPadding="0" style={{...{width: '100%', height: '100%', borderCollapse: 'collapse', borderSpacing: 0, padding: 0}, ...this.props.style}}>
                  <tbody>
                    {this.props.children}
                  </tbody>
                </table>  
    }
    
    return output;
  }
}