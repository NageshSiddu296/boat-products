import "./styles.css";
import Card from "./Card";
import data from "./Data";
export default function App() {
  const cards = data.map((item) => {
    return (
      <Card
        flash={item.flash}
        badge={item.badge}
        image={item.image}
        name={item.name}
        price={item.price}
        discount={item.discount}
        originalPrice={item.originalPrice}
        star={item.star}
        rating={item.rating}
        extraDiscount={item.extraDiscount}
        cart={item.cart}
      />
    );
  });

  return <div className="cards-list">{cards}</div>;
}
