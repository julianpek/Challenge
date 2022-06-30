const FetchComms = props => {
  let content = <p>Found no movies.</p>;

  if (props.error) {
    content = <p>{props.error}</p>;
  }

  if (props.isLoading) {
    content = <p>Loading...</p>;
  }

  return <>{content}</>;
};

export default FetchComms;
