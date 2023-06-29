import { nanoid } from "nanoid";
import Data from "../data.json";
import Card from "./Card";
import { selectTotalMoney } from "../redux/nealSlice";
import { useSelector } from "react-redux";
import FormatPrice from "../formatPrice";
export default function Content() {
  const products = Data;
  const totalMoney = useSelector(selectTotalMoney);
  const { format2 } = FormatPrice(totalMoney);
  return (
    <div className="content">
      <div className="header">
        <img
          className="billImg"
          src="https://neal.fun/spend/billgates.jpg"
          alt=""
        />
        <h2>Spend Bill Gates' Money</h2>
      </div>
      <div className="moneyBar">${format2}</div>
      <div className="body">
        {products.map((product) => (
          <Card product={product} key={nanoid()} />
        ))}
      </div>
    </div>
  );
}
