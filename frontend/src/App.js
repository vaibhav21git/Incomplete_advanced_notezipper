import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Landingpage from "./screens/landingpage/Landingpage";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Mynotes from "./screens/Mynotes/Mynotes";
import Loginpage from "./screens/Loginpage";
import Registerpage from "./screens/Registerpage";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route path="/login" element={<Loginpage />} />
          <Route path="/register" element={<Registerpage />} />
          <Route path="/mynotes" element={<Mynotes />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
