const LikeButton = () => {
  const guest = (guest) => `${guest || "guest"}님 안녕하세요`;

  return (
    <>
      <button>{guest()}</button>
      <button>{guest("양동국")}</button>
    </>
  );
};

export default LikeButton;
