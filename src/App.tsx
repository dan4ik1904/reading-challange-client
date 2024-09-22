import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Top from "./pages/Top/Top";
import MyBooks from "./pages/MyBooks/MyBooks";
import Classmates from "./pages/Classmates/Classmates";
import Me from "./pages/Me/Me";
import Auth from "./pages/Auth/Auth";


function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mybooks" element={<MyBooks />} />
          <Route path="top" element={<Top />} />
          <Route path="classmates" element={<Classmates />} />
          <Route path="me" element={<Me />} />
          {/* <Route path="shop/*" element={<Shop />}>
            <Route index element={<ProductItemsList />} />
            <Route path=":category" element={<Category />} />
            <Route path=":category/:itemId" element={<SingleItemPage />} />
          </Route> */}
          <Route path="auth" element={<Auth />}/>
        </Route>
      </Routes>
  );
}

export default App;
