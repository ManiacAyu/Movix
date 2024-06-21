import Login from "./Login";
import Browse from "./Browse";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";

const Body = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Login />}></Route>
        <Route exact path="/browse" element={<Browse />}></Route>
      </Routes>
    </Router>
  );
};

export default Body;
