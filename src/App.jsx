import { Route, Routes } from "react-router-dom";
import { Footer, Navbar, Widget } from "./components";

import { StartJourney } from "./pages";

function App() {
  return (
    <div className="font-Poppins bg-white  dark:bg-gray-900">
      <Navbar />
      <Routes>
        <Route path="/" element={<Widget />} />

        <Route path="/startjourney/:id" element={<StartJourney />} />
      </Routes>
      <Footer />
    </div>
  );
}
export default App;
