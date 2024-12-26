const HeartButton = () => {
  const happy = () => alert("좋아요 누름");

  return <button onClick={happy}>💛</button>;
};

export default HeartButton;
