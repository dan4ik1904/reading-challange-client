import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home/Home";
import Layout from "./components/Layout";
import Top from "./pages/Top/Top";
import MyBooks from "./pages/MyBooks/MyBooks";
import Classmates from "./pages/Classmates/Classmates";
import Me from "./pages/Me/Me";
import Auth from "./pages/Auth/Auth";
import AddBook from "./pages/AddBook/AddBook";
import UserProfile from "./pages/UserProfile/UserProfile";
import Book from "./pages/Book/Book";
// import { useEffect } from "react";
// import useTelegram from "./hooks/useTelegram";


function App() {
  const location = useLocation();
  const previousLocation = location.state?.previousLocation;
  // const { tg } = useTelegram()

  // useEffect(() => {
  //   if(tg) {
  //     tg.expand()
  //   }
  // }, [tg])

  return (
      <Routes location={previousLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="mybooks" element={<MyBooks />} />
          <Route path="mybooks/add" element={<AddBook />} />
          <Route path="top" element={<Top />} />
          <Route path="classmates" element={<Classmates />} />
          <Route path="me" element={<Me />} />
          <Route path="users/" >
            <Route path=":userId" element={<UserProfile />} />
          </Route>
          <Route path="books/" >
            <Route path=":id" element={<Book />} />
          </Route>
          <Route path="auth" element={<Auth />}/>
        </Route>
      </Routes>
  );
}

export default App;
