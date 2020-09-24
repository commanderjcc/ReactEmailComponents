import React from 'react';
import emailComponent from '../emailComponent';

export default class Unsubscribe extends emailComponent {
  defaultStyle = {
    p: {
      fontFamily:
        "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif",
      fontWeight: 400,
      fontSize: "12px",
    },
    a: {
      color: "#232323",
    },
    unsubscribe: {},
    update: {},
    register: {},
  };

  render() {
    if (!this.props.user.airtableID) {
      return;
    }

    let computedStyles = {
      p: {
        ...this.defaultStyle.p,
        ...this.props.style?.p,
      },
      unsubscribe: {
        ...this.defaultStyle.a,
        ...this.props.style?.a,
        ...this.defaultStyle.unsubscribe,
        ...this.props.style?.unsubscribe,
      },
      update: {
        ...this.defaultStyle.a,
        ...this.props.style?.a,
        ...this.defaultStyle.update,
        ...this.props.style?.update,
      },
      register: {
        ...this.defaultStyle.a,
        ...this.props.style?.a,
        ...this.defaultStyle.register,
        ...this.props.style?.register,
      },
    };

    let output;
    if (this.props.isText) {
      output = (
        <>
          Don't want to receive emails anymore? Unsubscribe by visiting{" "}
          {"https://email-settings.josh.christen.se/?unsub=1&id=" +
            this.props.user.airtableID}
          \nWant fewer emails? Use this link:{" "}
          {"https://email-settings.josh.christen.se/?id=" +
            this.props.user.airtableID}{" "}
          Change frequency
        </>
      );
    } else {
      output = (
        <p style={computedStyles.p}>
          Don't want to receive emails anymore?{" "}
          <a
            style={computedStyles.unsubscribe}
            href={
              "https://email-settings.josh.christen.se/?unsub=1&id=" +
              this.props.user.airtableID
            }
          >
            Unsubscribe
          </a>
          <br />
          Too many emails?{" "}
          <a
            style={computedStyles.update}
            href={
              "https://email-settings.josh.christen.se/?id=" +
              this.props.user.airtableID
            }
          >
            Change frequency
          </a>
          <br />
          Got this as a forward?{" "}
          <a
            style={computedStyles.register}
            href="https://airtable.com/shrYmEsnvb3AHP8sq"
          >
            Sign up
          </a>
        </p>
      );
    }

    return output;
  }
}