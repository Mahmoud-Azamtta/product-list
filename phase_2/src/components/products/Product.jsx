export const Product = ({ data }) => {
  return (
    <div className="product">
      <div className="product-img">
        <img src={data.img} alt={data.name} />
      </div>
      <div className="product-details">
        <h3>{data.name}</h3>
        <p className="category">
          Category: <em>{data.category}</em>
        </p>
        <p className="price">
          Price: <strong>{data.price}$</strong>
        </p>
      </div>
    </div>
  );
};
