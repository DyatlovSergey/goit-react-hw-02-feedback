import React from "react";
import s from "./FeedbackForm.module.css";
import Statistics from "./Statistics";
import FeedbackOptions from "./FeedbackOptions";
import Section from "./Section";
import Notification from "./Notification";
class FeedbackForm extends React.Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  // handleGood = () => {
  //   this.setState((prevState) => ({
  //     good: prevState.good + 1,
  //   }));
  // };

  // handleNeutral = () => {
  //   this.setState((prevState) => ({
  //     neutral: prevState.neutral + 1,
  //   }));
  // };

  // handleBad = () => {
  //   this.setState((prevState) => ({
  //     bad: prevState.bad + 1,
  //   }));
  // };

  handleClick = (button) => {
    this.setState({ [button]: this.state[button] + 1 });
  };

  totalFeedback = () => {
    const { good, bad, neutral } = this.state;
    return good + neutral + bad;
  };

  positiveFeedback = () => {
    const { good } = this.state;
    if (!good) {
      return 0;
    }
    return ((good * 100) / this.totalFeedback()).toFixed(0);
  };

  render() {
    const { good, neutral, bad } = this.state;
    return (
      <div className={s.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            options={["good", "neutral", "bad"]}
            onHandleClick={this.handleClick}
          />
        </Section>

        {this.totalFeedback() === 0 ? (
          <Notification message="There is no feedback" />
        ) : (
          <Section title="Statistics">
            <Statistics
              options={{ good, neutral, bad }}
              totalFeedback={this.totalFeedback()}
              positiveFeedback={this.positiveFeedback()}
            />
          </Section>
        )}

        {/* <div>
          <p>Statistics </p>
          <span className={s.statItem}>Good: {this.state.good}</span>
          <span className={s.statItem}>Neutral:{this.state.neutral}</span>
          <span className={s.statItem}>Bad:{this.state.bad}</span>
        </div> */}
      </div>
    );
  }
}

export default FeedbackForm;
