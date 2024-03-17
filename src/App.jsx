import "./App.css";
import Main from "./containers/Main/Main";
import Banner from "./containers/navbar/Banner";

import Navbar from "./containers/navbar/Navbar";

function App() {
  return (
    <>
      <div className=" max-w-7xl mx-auto">
        <Navbar></Navbar>
        <Banner></Banner>
        <Main></Main>
      </div>
    </>
  );
}

export default App;
