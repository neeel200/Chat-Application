import { Route, Routes } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import ChatPage from "./Pages/ChatPage";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
        <Route path="/chats" element={<ChatPage />} />
      </Routes>
    </div>
  );
};

export default App;
