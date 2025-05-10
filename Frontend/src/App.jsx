import { Outlet } from "react-router-dom";
import { Footer, Navbar } from "./components";
import BookStoreProvider from "./context/BookStoreContex";

function App() {
  return (
    <BookStoreProvider>
      <Navbar />
      <Outlet />
      <Footer />
    </BookStoreProvider>
  );
}

export default App;
