import React from 'react';

export default class Unsubscribe extends React.Component {
  render() {
    if (!this.props.user.airtableID) {
      return;
    }

    let output;
    if (this.props.isText) {
      output = <>Don't want to receive emails anymore? Unsubscribe by visiting {"https://email-settings.josh.christen.se/?unsub=1&id="+this.props.user.airtableID}\nWant fewer emails? Use this link: {"https://email-settings.josh.christen.se/?id="+this.props.user.airtableID} Change frequency</>
    } else {
      output = <p
        style={{
          ...{
            fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
            fontWeight: 400,
            fontSize: '12px'
          },
          ...this.props.style.p
        }}
      >
        Don't want to receive emails anymore? <a
          style={{
            ...{
              color: '#232323'
            },
            ...this.props.style.a
          }}
          href={"https://email-settings.josh.christen.se/?unsub=1&id=" + this.props.user.airtableID}
        >
          Unsubscribe
      </a>
        <br />
      Too many emails? <a
          style={{
            ...{
              color: '#232323'
            },
            ...this.props.style.a
          }}
          href={"https://email-settings.josh.christen.se/?id=" + this.props.user.airtableID}
        >
          Change frequency
      </a>
        <br />
      Got this as a forward? <a
          style={{
            ...{
              color: '#232323'
            },
            ...this.props.style.a
          }}
          href={"https://email-settings.josh.christen.se/?id=" + this.props.user.airtableID}
        >
          Sign up
      </a>
      </p>
    }

    return output;
  }
}