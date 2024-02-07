const Total = ({ parts }) => {
  const total = parts.reduce((s, p) => {
    return (s += p.exercises);
  }, 0);
  return (
    <p>
      <b>Total of {total} exercises</b>
    </p>
  );
};

export default Total;
