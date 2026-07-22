import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {
	createBrowserRouter,
	createRoutesFromElements,
	Route,
	RouterProvider,
} from "react-router-dom";

import App from "./App";
import MainPage from "./pages/MainPage";
import Kaabe from "./pages/Kaabe";
import Alquran from "./pages/Alquran";
import SurahPage from "./pages/SurahPage";
import PrayerTimes from "./pages/PrayerTimes";

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<MainPage />} />
			<Route path="PrayerTimes" element={<PrayerTimes />} />
			<Route path="Kaabe" element={<Kaabe />} />
			<Route path="Quran" element={<Alquran/>} />
			<Route path="Remembrances" element={""} />
			<Route path="Calendar" element={""} />
      <Route path="/quran/:id" element={<SurahPage />} />
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
