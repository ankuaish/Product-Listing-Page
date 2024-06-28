import { Header } from "./components/Header";
import { FetchItem } from "./components/FetchItem";
import { Home } from "./components/Home";
import { Sidebar } from "./components/Sidebar";

function App() {
  return (
    <>
      <div className="container">
        <Header />
        
        <Home />
        <Sidebar />
        <FetchItem />
      </div>
    </>
  );
}

export default App;
