import withDimensions from "./WithDimensions";

const Comp1 = (props) => {
  return <div className="comp1"> hey i am comp1 and my width is:</div>;
};

export default withDimensions(Comp1);
