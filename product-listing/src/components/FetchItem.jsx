import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchStatusActions } from "../store/fetchStatusSlice";
import { itemActions } from "../store/itemsSlice";
import { HomeItem } from "./HomeItem";

export const FetchItem = () => {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  const products = useSelector((store) => store.products);

  const dispatch = useDispatch();
  useEffect(() => {
    if (fetchStatus.fetchDone) return;

    const controller = new AbortController();
    const signal = controller.signal;
    dispatch(fetchStatusActions.markFetchStarted());
    fetch("https://dummyjson.com/products", { signal })
      .then((res) => res.json())
      .then(({ products }) => {
        dispatch(fetchStatusActions.markFetchDone());
        dispatch(fetchStatusActions.markFetchFinished());
        dispatch(itemActions.addInitialItems(products));
      });
    return () => {
      controller.abort();
    };
  });

  return (
    <>
      {" "}
      <main>
        <div className="items-container">
          {products.map((item) => (
            <HomeItem key={item.id} item={item} />
          ))}
        </div>
      </main>
    </>
  );
};
