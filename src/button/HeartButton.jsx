const HeartButton = () => {
  const happy = () => alert("행복이 모지");

  return <button onClick={happy}>💛</button>;
};

export default HeartButton;
