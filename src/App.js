import React from "react";
import { Routes, Route } from "react-router-dom";

import Checklist from "./pages/Checklist";
import Temperament from "./pages/Temperament";
import FulfillingLife from "./pages/FulfillingLife";
import TimingGoal from "./pages/TimingGoal";
import Habits from "./pages/Habits";

import Landing from "./pages/Landing/Landing";


function App() {
  return (
    <Routes>

      <Route path="/" element={<Checklist />} />

      <Route path="/temperament" element={<Temperament />} />

      <Route path="/fulfillingLife" element={<FulfillingLife />} />

      <Route path="/timingGoal" element={<TimingGoal />} />

      <Route path="/habits" element={<Habits />} />

      <Route path="/landing" element={<Landing />} />
      
    </Routes>
  )
}

export default App;