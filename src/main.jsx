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

const router = createBrowserRouter(
	createRoutesFromElements(
		<Route path="/" element={<App />}>
			<Route index element={<MainPage />} />
			<Route path="PrayerTimes" element={""} />
			<Route path="kiss" element={""} />
			<Route path="Quran" element={""} />
			<Route path="Remembrances" element={""} />
			<Route path="Calendar" element={""} />
		</Route>,
	),
);

ReactDOM.createRoot(document.getElementById("root")).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
);
