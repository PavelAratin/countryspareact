import React,{useState} from "react";
import { Routes, Route, Link } from "react-router-dom";

import Header from "./components/Header";
import { Main } from "./components/Main";
import HomePage from "./pages/HomePage";
import DetailsPage from "./pages/DetailsPage";
import NotFoundPage from "./pages/NotFoundPage";
// import SinglePage from "./pages/SinglePage";

function App() {
  const [countries, setCountries] = useState([]);
  return (
    <React.Fragment>
      <Header></Header>
      <Main>
        <Routes>
          <Route path='/' element={<HomePage countries={countries} setCountries={setCountries}></HomePage>}></Route>
          <Route path='/country' element={<DetailsPage></DetailsPage>}></Route>
          <Route path='/country/:title' element={<DetailsPage></DetailsPage>}></Route>
          {/* <Route path='/country/:id' element={<SinglePage></SinglePage>}></Route> */}
          <Route path='*' element={<NotFoundPage></NotFoundPage>}></Route>
        </Routes>
      </Main>
    </React.Fragment>
  );
}

export default App;
