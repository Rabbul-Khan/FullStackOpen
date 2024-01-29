import StatisticLine from './StatisticLine';

const Statistics = ({ good, neutral, bad }) => {
  if (good === 0 && neutral === 0 && bad === 0) {
    return (
      <>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </>
    );
  } else {
    return (
      <>
        <h1>statistics</h1>
        <table>
          <tbody>
            <tr>
              <StatisticLine text="good" value={good} />
            </tr>
            <tr>
              <StatisticLine text="neutral" value={neutral} />
            </tr>
            <tr>
              <StatisticLine text="bad" value={bad} />
            </tr>
            <tr>
              <StatisticLine text="all" value={good + neutral + bad} />
            </tr>
            <tr>
              <StatisticLine
                text="average"
                value={(good * 1 + bad * -1) / (good + neutral + bad)}
              />
            </tr>
            <tr>
              <StatisticLine
                text="positive"
                value={`${(good * 100) / (good + neutral + bad)} %`}
              />
            </tr>
          </tbody>
        </table>
      </>
    );
  }
};

export default Statistics;
