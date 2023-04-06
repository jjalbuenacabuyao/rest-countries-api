import { Homepage, CountryDetail } from "./containers";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/:countryCode" element={<CountryDetail />} />
    </Routes>
  );
};

export default App;
