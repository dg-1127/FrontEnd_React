const LikeButton = () => {
  const youtuber = "백종원";
  const hello = (guest) => `${guest || "guest"}님 안녕하십니까`;
  return (
    <div>
      <button>{hello("mr.백")}</button>
      <button>{youtuber}좋아요</button>
      <button>{youtuber}싫어요</button>
    </div>
  );
};

export default LikeButton;
