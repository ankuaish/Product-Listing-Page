import { Header } from "./components/Header";
import { FetchItem } from "./components/FetchItem";
import { Home } from "./components/Home";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        <Home />
        <FetchItem />
      </div>
    </>
  );
}

export default App;
