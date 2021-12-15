import { useState } from 'react';
import Statistics from '../Statistics/Statistics';
import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
import SectionTitle from '../SectionTitle/SectionTitle';

const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const countPositiveFeedbackPercentage = () => {
    const total = good + neutral + bad;
    const total1 = Math.round((good / total) * 100);
    return total1;
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const onLeaveFeedback = options => {
    switch (options) {
      case 'good':
        setGood(good + 1);
        break;
      case 'neutral':
        setNeutral(neutral + 1);
        break;
      case 'bad':
        setBad(bad + 1);
        break;
      default:
        return;
    }
  };

  return (
    <div className="conteiner">
      <SectionTitle title="Please leave feedback" />
      <FeedbackOptions
        options={['good', 'neutral', 'bad']}
        onLeaveFeedback={onLeaveFeedback}
      />
      {countTotalFeedback() > 0 ? (
        <ul>
          <SectionTitle title="Statistics" />
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
          />
        </ul>
      ) : (
        <p>No feetback given</p>
      )}
    </div>
  );
};

export default App;

///////////////////////////////////////////////////////

// import { Component } from 'react';
// import Statistics from '../Statistics/Statistics';
// import FeedbackOptions from '../FeedbackOptions/FeedbackOptions';
// import SectionTitle from '../SectionTitle/SectionTitle';
// class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     const total = good + neutral + bad;
//     const total1 = Math.round((good / total) * 100);
//     return total1;
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   onLeaveFeedback = options => {
//     this.setState(prevState => ({
//       [options]: prevState[options] + 1,
//     }));
//   };

//   countTotalFeedback = () => {
//     const sum = this.state.good + this.state.neutral + this.state.bad;
//     return sum;
//   };
//   render() {
//     const { good, neutral, bad } = this.state;
//     return (
//       <div className="conteiner">
//         <SectionTitle title="Please leave feedback" />
//         <FeedbackOptions
//           options={this.state}
//           onLeaveFeedback={this.onLeaveFeedback}
//         />
//         {this.countTotalFeedback() > 0 ? (
//           <ul>
//             <SectionTitle title="Statistics" />
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//             />
//           </ul>
//         ) : (
//           <p>No feetback given</p>
//         )}
//       </div>
//     );
//   }
// }

// export default App;
