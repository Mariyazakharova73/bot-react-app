import { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";

function App() {
  const tg = window.Telegram.WebApp;

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
