import { IoIosAddCircle } from "react-icons/io";
import { RiDeleteBin6Fill } from "react-icons/ri";

export const HomeItem = ({ item }) => {
  return (
    <>
      {" "}
      <div className="item-container">
        <img className="item-image" src={item.image} alt="item image" />
        <div className="rating">
          {item.rating.stars} ⭐ | {item.rating.count}
        </div>
        <div className="company-name">{item.company}</div>
        <div className="item-name">{item.item_name}</div>
        <div className="price">
          <span className="current-price">Rs {item.current_price}</span>
          <span className="original-price">Rs {item.original_price}</span>
          <span className="discount">({item.discount_percentage}% OFF)</span>
        </div>
        {elementFound ? (
          <button className="btn btn-add-bag btn-danger" onClick={handleRemove}>
            <RiDeleteBin6Fill /> Remove
          </button>
        ) : (
          <button className="btn btn-add-bag btn-success" onClick={handleAddTo}>
            <IoIosAddCircle /> Add to Bag
          </button>
        )}
      </div>
    </>
  );
};
