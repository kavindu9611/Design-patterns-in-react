const withDimensions = (Component) => {
  return function WithDimensions() {
    return <Component />;
  };
};

export default withDimensions;
