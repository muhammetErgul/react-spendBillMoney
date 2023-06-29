import { selectedItems } from "../redux/nealSlice";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import FormatPrice from "../formatPrice";

export default function Receipt() {
  const [totalPrice, setTotalPrice] = useState(0);
  const slectedProducts = useSelector(selectedItems);

  useEffect(() => {
    let total = 0;
    slectedProducts.map((item) => (total += item.price * item.amou));
    setTotalPrice(total);
  }, [slectedProducts]);

  const { format1 } = FormatPrice(totalPrice);
  return (
    <div className="receipte">
      <header className="title">Your Receipt</header>
      {slectedProducts.map((product, ind) => {
        return (
          <div className="receipteContent" key={ind}>
            <div className="name">{product.name}</div>
            <div className="amount">x{product.amou}</div>
            <div className="cost">${product.price * product.amou}</div>
          </div>
        );
      })}
      <div className="total">
        <h3>TOTAL</h3>
        <div className="totalCost">${format1}</div>
      </div>
    </div>
  );
}
