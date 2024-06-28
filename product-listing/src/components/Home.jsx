export const Home = () => {
  return (
    <>
      <div className="button-container">
        <h6>Showing 20 of 50 Products </h6>
        <div>
          Sort by:{" "}
          <select name="language" id="language">
            <option value="">Most Popular</option>
            <option value="">Trending</option>
            <option value="">High Price</option>
            <option value="">Low Price</option>
          </select>
        </div>
      </div>
    </>
  );
};
