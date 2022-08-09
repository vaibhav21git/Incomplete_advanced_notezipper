import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Landingpage from "./screens/landingpage/Landingpage";

function App() {
  return (
    <>
      <Header />
      <main>
        <Landingpage />
      </main>
      <Footer />
    </>
  );
}

export default App;
