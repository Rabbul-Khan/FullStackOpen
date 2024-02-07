import Part from './Part';

const Content = ({ parts }) => {
  return parts.map((part) => {
    return <Part part={part.name} exercises={part.exercises} key={part.id} />;
  });
};

export default Content;
