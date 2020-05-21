import React, { Component } from "react";
import PropTypes from "prop-types";

const NEUTRAL = "neutral";
const ACTIVE = "active";
const VALID = "valid";
const INVALID = "invalid";

export default class Field extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
      status: NEUTRAL,
    };
  }

  static propTypes = {
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string,
    autofocus: PropTypes.string,
    onChange: PropTypes.func.isRequired,
    validateOnMount: PropTypes.bool,
    additionalClass: PropTypes.string,
  };

  static getDerivedStateFromProps(props, state) {
    if (props.value !== state.value) {
      return {
        ...state,
        value: props.value,
      };
    }

    return null;
  }

  componentDidMount() {
    if (this.props.validateOnMount) this.validate();
  }

  onChange = (evt) => {
    const { name } = this.props;
    const { value } = evt.target;
    this.setState({ value });
    this.props.onChange({ name, value });
  };

  onFocus = () => {
    this.setState({ status: ACTIVE });
  };

  validate = () => {
    let status = NEUTRAL;
    if (this.props.validate(this.state.value)) {
      status = VALID;
    } else if (!this.props.optional) {
      status = INVALID;
    }

    this.setState({ status });
  };

  render() {
    let inputClassName = "form__input";
    if (this.props.additionalClass)
      inputClassName += " " + this.props.additionalClass;
    switch (this.state.status) {
      case VALID:
        inputClassName += " filled-input";
        break;
      case INVALID:
        inputClassName += " error-input";
        break;
      default:
        break;
    }

    return (
      <div className="form__group">
        <input
          type={this.props.type}
          name={this.props.name}
          className="form-control"
          id={this.props.id}
          value={this.state.value}
          onChange={this.onChange}
          onFocus={this.onFocus}
          onBlur={this.validate}
          autoFocus={this.props.autofocus}
          placeholder={this.props.placeholder ? this.props.placeholder : ""}
          autoComplete="off"
        />
        <label htmlFor={this.props.id} className="form__label">
          {this.props.label}
        </label>
      </div>
    );
  }
}
