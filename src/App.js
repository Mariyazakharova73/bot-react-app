import { useEffect } from "react";
import "./App.css";

const tg = window.Telegram.WebApp;

function App() {
  const onClose = () => {
    tg.close();
  };

  useEffect(() => {
    tg.ready();
  }, []);

  return (
    <div className="App">
      hhhhhhh
      <button onClick={onClose}>Закрыть</button>
    </div>
  );
}

export default App;
