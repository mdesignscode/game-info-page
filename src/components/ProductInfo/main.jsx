import About from "./About";
import Specs from "./Specs";
import "styles/ProductInfo/main.scss";

export default function ProductInfo() {
  return (
    <section className="product_info">
      <About />
      <Specs />
    </section>
  );
}
