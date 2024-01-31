const withDimensions = (Component) => {
  return function WithDimensions() {
    return <Component dummyProps="some value" />;
  };
};

export default withDimensions;
