const Cart1 = () => {
  const list = ["사과", "배", "바나나"];

  return (
    <ol>
      {list.map((v) => (
        <li>{v}</li>
      ))}
    </ol>
  );
};

export default Cart1;
