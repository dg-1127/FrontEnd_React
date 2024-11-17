const Cart = () => {
  const list = ["사과", "배", "바나나"];

  return (
    <ol>
      {list.map((x) => (
        <li>{x}</li>
      ))}
    </ol>
  );
};

export default Cart;
