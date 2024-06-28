export const HomeItem = ({ item }) => {
  return (
    <>
      {" "}
      <div className="item-container">
        <img className="item-image" src={item.images} alt="item image" />

        <div className="company-name">{item.category}</div>
        <div className="item-name">{item.title}</div>
        <div className="price">Rs {item.price}</div>
      </div>
    </>
  );
};
