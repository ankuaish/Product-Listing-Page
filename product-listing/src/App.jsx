import { Header } from "./components/Header";
import { FetchItem } from "./components/FetchItem";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <Header />
      <div className="app-container">
        <Sidebar />
        <div className="content">
          <Home />
          <FetchItem />
        </div>
      </div>
    </>
  );
}

export default App;
