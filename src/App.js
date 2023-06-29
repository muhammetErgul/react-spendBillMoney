import Content from "./component/Content";
import Navbar from "./component/Navbar";
import "./styles.css";
import { selectedItems } from "./redux/nealSlice";
import { useSelector } from "react-redux";
import Receipt from "./component/Receipt";

export default function App() {
  const slectedProducts = useSelector(selectedItems);
  return (
    <div className="App">
      <Navbar />
      <Content />
      {slectedProducts.length > 0 && <Receipt />}
    </div>
  );
}
