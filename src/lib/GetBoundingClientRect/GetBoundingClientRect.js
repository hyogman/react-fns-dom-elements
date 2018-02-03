import * as React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

export class GetBoundingClientRect extends React.Component {
  constructor() {
    super();
    this.state = {
      bottom: 0,
      height: 0,
      left: 0,
      right: 0,
      top: 0,
      width: 0,
      x: 0,
      y: 0,
    };
  }

  handleGetBoundingClientRect = () => {
    const {
      bottom,
      height,
      left,
      right,
      top,
      width,
      x,
      y,
    } = this.element.getBoundingClientRect();

    this.setState({
      bottom,
      height,
      left,
      right,
      top,
      width,
      x,
      y,
    });
  };

  componentDidMount() {
    const { scroll, resize } = this.props;
    this.element = ReactDOM.findDOMNode(this.node);

    this.handleGetBoundingClientRect();
    if (scroll)
      window.addEventListener("scroll", this.handleGetBoundingClientRect);

    if (resize)
      window.addEventListener("resize", this.handleGetBoundingClientRect);
  }

  componentWillUnmount() {
    const { scroll, resize } = this.props;
    if (scroll)
      window.removeEventListener("scroll", this.handleGetBoundingClientRect);

    if (resize)
      window.removeEventListener("resize", this.handleGetBoundingClientRect);
  }

  render() {
    const { render } = this.props;
    return (
      <div ref={node => (this.node = node)}>{render && render(this.state)}</div>
    );
  }
}

GetBoundingClientRect.propTypes = {
  scroll: PropTypes.bool,
  resize: PropTypes.bool,
  render: PropTypes.func,
};
