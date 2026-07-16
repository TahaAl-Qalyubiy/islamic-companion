import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
	Menu,
	X,
	Moon,
	House,
	Clock3,
	Compass,
	BookOpen,
	Bookmark,
	CalendarDays,
	Sun,
	// Settings,
} from "lucide-react";

export const navLinks = [
	{ name: "الرئيسية", icon: House, path: "/" },
	{ name: "مواقيت الصلاة", icon: Clock3, path: "/PrayerTimes" },
	{ name: "القبلة", icon: Compass, path: "/kiss" },
	{ name: "القرآن", icon: BookOpen, path: "/Quran" },
	{ name: "الأذكار", icon: Bookmark, path: "/Remembrances" },
	{ name: "التقويم", icon: CalendarDays, path: "/Calendar" },
];

export default function Header() {
	const [open, setOpen] = useState(false);
	const [mode, setMode] = useState(localStorage.getItem("theme") || "light");

	function darkMode() {
		setMode(mode == "light" ? "dark" : "light");
	}

	useEffect(() => {
		if (mode == "dark") {
			document.body.classList.add("dark");
		} else {
			document.body.classList.remove("dark");
		}
		localStorage.setItem("theme", mode);
	}, [mode]);

	return (
		<header className="sticky top-0 z-50 border-b border-(--border)/10 bg-(--primary)/80 backdrop-blur-xl ">
			<div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
				{/* Logo */}
				<div className="flex items-center gap-3">
					<div className="flex h-12 w-12 items-center justify-center">
						<img src="/img/logo.jpeg" alt="logo" className="rounded-xl" />
					</div>

					<div>
						<h1 className="text-lg font-bold text-gray-50 tracking-wider">
							Islamic Companion
						</h1>
						<p className="text-sm text-gray-50 tracking-wider">
							رفيقك في العبادة
						</p>
					</div>
				</div>

				{/* Desktop Navigation */}
				<nav className="hidden items-center gap-2 lg:flex">
					{navLinks.map((item) => {
						const Icon = item.icon;

						return (
							<Link
								key={item.name}
								to={item.path}
								className="group flex items-center gap-2 rounded-xl px-4 py-2 text-md font-medium text-gray-50 transition-all duration-300 hover:bg-emerald-50 hover:text-emerald-700  tracking-wider"
							>
								<Icon
									size={18}
									className="transition-transform group-hover:scale-110"
								/>
								{item.name}
							</Link>
						);
					})}
				</nav>

				{/* Right Side */}
				<div className="hidden items-center gap-2 lg:flex">
					<button
						onClick={darkMode}
						className="rounded-xl p-2 transition hover:bg-emerald-50"
					>
						{mode == "dark" ? (
							<Sun size={30} color="#D8A03A" />
						) : (
							<Moon size={30} color="#0f172a" />
						)}
					</button>

					{/* <button className="rounded-xl p-2 text-gray-600 transition hover:bg-emerald-50 hover:text-emerald-700">
						<Settings size={20} />
					</button> */}
				</div>

				{/* Mobile Button */}
				<button
					onClick={() => setOpen(!open)}
					className="rounded-xl p-2 transition text-gray-50 hover:text-gray-900 hover:bg-gray-100 lg:hidden"
				>
					{open ? <X size={30} /> : <Menu size={30} />}
				</button>
			</div>

			{/* Mobile Menu */}
			<div
				className={`overflow-hidden transition-all duration-300 lg:hidden ${
					open ? "max-h-125" : "max-h-0"
				}`}
			>
				<div className="border-t border-b bg-(--surface) px-6 py-4">
					<div className="flex flex-col gap-2">
						{navLinks.map((item) => {
							const Icon = item.icon;

							return (
								<Link
									key={item.name}
									to={item.path}
									onClick={() => setOpen(false)}
									className="flex items-center gap-3 rounded-xl px-4 py-3 text-(--text) text-2xl tracking-wider transition hover:bg-emerald-50 hover:text-emerald-700"
								>
									<Icon size={25} />
									{item.name}
								</Link>
							);
						})}

						<hr className="my-2  text-(--text)" />

						<button
							onClick={darkMode}
							className="flex items-center gap-3 rounded-xl px-4 py-3 text-(--text) text-2xl transition hover:bg-emerald-50 hover:text-emerald-700"
						>
							{mode == "dark" ? (
								<Sun size={25} color="#D8A03A" />
							) : (
								<Moon size={25} color="#0f172a" />
							)}
							{mode == "dark" ? "الوضع الفاتح" : "	الوضع الليلي"}
						</button>

						{/* <button className="flex items-center gap-3 rounded-xl px-4 py-3 text-gray-700 transition hover:bg-emerald-50 hover:text-emerald-700">
							<Settings size={20} />
							الإعدادات
						</button> */}
					</div>
				</div>
			</div>
		</header>
	);
}
