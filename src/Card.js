export default function Card(props) {
  return (
    <div className="card">
      <div className="card-badge">
        <img className="flash" src={props.flash} alt="" />
        {props.badge}
      </div>
      <div className="card-img">
        <img src={props.image} className="zoom" alt="" />
        <div className="sold">
          <h>96% SOLD</h>
        </div>
      </div>
      <div className="sub-card">
        <p className="product-name">{props.name}</p>
        <img
          className="rupee"
          src=" https://cdn-icons-png.flaticon.com/128/7370/7370261.png"
          alt=""
        />
        <span className="price">{props.price}</span>
        <span className="discount"> {props.discount}</span>
        <span className="original-price">{props.originalPrice}</span>
        <hr />
        <img className="star" src={props.star} alt="" />
        <span className="rating">{props.rating}</span>
        <br />
        <p1 className="upi">{props.extraDiscount}</p1>
        <div className="button">
          <button className="add-btn">{props.cart}</button>
        </div>
      </div>
    </div>
  );
}
