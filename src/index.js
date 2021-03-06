import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import VotreKine from "./routes/votreKine";
import KineDuSport from "./routes/kineDuSport";
import Materiel from "./routes/materiel";
import Contact from "./routes/contact";

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route
          path="votreKine"
          element={<VotreKine />}
        />
        <Route
          path="kineDuSport"
          element={<KineDuSport />}
        />
        <Route
          path="materiel"
          element={<Materiel />}
        />
        <Route
          path="contact"
          element={<Contact />}
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
