import { useState } from "react";
import { setBuy, setSell } from "../redux/nealSlice";
import { useDispatch } from "react-redux";
import FormatPrice from "../formatPrice";

export default function Card({ product }) {
  const [amount, setAmount] = useState(0);
  const dispatch = useDispatch();
  const setChange = (e) => {
    e.preventDefault();
    setAmount(e.target.value);
  };
  const { format2 } = FormatPrice(product.price);
  return (
    <>
      <div className="card">
        <img className="item-img" src={product.image} alt={product.title} />
        <div className="item-title">{product.name}</div>
        <div className="item-cost">${format2}</div>
        <div className="item-control">
          <button
            disabled={amount ? false : true}
            className={amount ? "item-sell active" : "item-sell"}
            onClick={() =>
              dispatch(
                setSell({
                  name: product.name,
                  price: Number(product.price),
                  amou: Number(amount)
                })
              )
            }
          >
            Sell
          </button>
          <input
            type="number"
            min="0"
            className="item-input"
            value={amount}
            onChange={setChange}
          />
          <button
            className="item-buy"
            disabled={amount ? false : true}
            type="button"
            onClick={() =>
              dispatch(
                setBuy({
                  name: product.name,
                  price: Number(product.price),
                  amou: Number(amount)
                })
              )
            }
          >
            Buy
          </button>
        </div>
      </div>
    </>
  );
}
