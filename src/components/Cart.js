function Cart() {
  let priceOne = 8;
  let priceTwo = 10;
  let priceTree = 15;
  return (
    <ul>
      <li>un monstera : {priceOne}</li>
      <li>un lierre : {priceTwo}</li>
      <li>un bouquet de fleurs : {priceTree}</li>
      <li>Total : {priceOne + priceTwo + priceTree}</li>
    </ul>
  );
}
export default Cart;
