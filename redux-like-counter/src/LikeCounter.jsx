import React from "react";
import { createStore } from "redux";
import likeCounterReducer from "./Reducer";
import { incrementLike, decrementLike } from "./Actions";
import "./App.css";

const store = createStore(likeCounterReducer);

class LikeCounter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: store.getState().count,
      showBorder: false,
    };
  }

  componentDidMount() {
    this.unsubscribe = store.subscribe(() => {
      this.setState({
        count: store.getState().count >= 0 ? store.getState().count : 0,
      });
    });
  }

  componentWillUnmount() {
    this.unsubscribe();
  }

  handleIncrement = () => {
    store.dispatch(incrementLike());
  };

  handleDecrement = () => {
    if (this.state.count > 0) {
      store.dispatch(decrementLike());
    } else if (this.state.count === 0) {
      this.setState({ showBorder: true });
      setTimeout(() => {
        this.setState({ showBorder: false });
      }, 1000);
    }
  };

  render() {
    return (
      <div className={this.state.showBorder ? "border" : ""}>
        <h1>{this.state.count >= 0 ? this.state.count : 0}</h1>
        <button onClick={this.handleIncrement}>Like</button>
        <button onClick={this.handleDecrement}>Unlike</button>
      </div>
    );
  }
}

export default LikeCounter;