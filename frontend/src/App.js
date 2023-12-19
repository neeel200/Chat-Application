import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage.js";
import ChatPage from "./Pages/ChatPage.js";   
import './app.css';


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
