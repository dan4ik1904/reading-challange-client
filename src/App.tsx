import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Top from "./pages/Top/Top";


function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;

  return (
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mybooks" element={<Home />} />
          <Route path="top" element={<Top />} />
          <Route path="classmates" element={<Home />} />
          <Route path="me" element={<Home />} />
          {/* <Route path="shop/*" element={<Shop />}>
            <Route index element={<ProductItemsList />} />
            <Route path=":category" element={<Category />} />
            <Route path=":category/:itemId" element={<SingleItemPage />} />
          </Route> */}
        </Route>
      </Routes>
  );
}

export default App;
