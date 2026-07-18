import React from "react";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { BookMarked, ChevronRight, ChevronLeft } from "lucide-react";

function HeroSection() {
	return (
		<Grid container spacing={2} className="py-12">
			<Grid size={{ xs: 12, md: 5 }} className="my-auto">
				<Paper className="text-center rounded-xl! py-3 bg-(--surface)! text-(--text)!">
					<div className="flex gap-3 items-center px-3 ">
						<BookMarked className="text-(--primary)" size={28} />
						<Typography variant="h5">أذكار الصباح</Typography>
					</div>
					<div className="pt-8 px-16 text-start">
						<Typography variant="h6" className=" tracking-wide!">
							أصبحنا وأصبح الملك لله، والحمد لله، لا إله إلا الله وحده لا شريك
							له، له الملك وله الحمد، وهو على كل شيء قدير، رب أسألك خير ما في
							هذا اليوم وخير ما بعده، وأعوذ بك من شر ما في هذا اليوم وشر ما
							بعده، رب أعوذ بك من الكسل وسوء الكبر، رب أعوذ بك من عذاب في النار
							وعذاب في القبر
						</Typography>
						<Typography
							variant="h6"
							className="text-(--primary) tracking-wide!"
						>
							( رواه البخاري )
						</Typography>
					</div>
					<div className="flex justify-evenly py-5">
						<button className="cursor-pointer rounded-full p-1 shadow-[0_2px_6px_rgba(0,0,0,0.6)] z-10">
							<ChevronRight size={40} />
						</button>
						<button className="cursor-pointer rounded-full p-1 shadow-[0_2px_6px_rgba(0,0,0,0.6)] z-10">
							<ChevronLeft size={40} />
						</button>
					</div>
				</Paper>
			</Grid>
			<Grid size={{ xs: 12, md: 3.5 }} className="my-auto">
				<Paper className="text-center rounded-xl! py-3 bg-(--surface)! text-(--text)!">
					<div className="flex gap-3 items-center px-5 ">
						<CalendarTodayOutlinedIcon className="text-(--primary)! text-3xl!" />
						<Typography variant="h5">التقويم الهجري </Typography>
					</div>
					<div>
						<Typography
							variant="h4"
							className="text-(--primary) font-medium! tracking-wider! pt-12 pb-2"
						>
							24 صفر 1445 ه
						</Typography>
						<Typography variant="h6"> السبت 9 سبتمبر 2026</Typography>
					</div>
					<button className="cursor-pointer z-10 text-center  px-8 py-2 my-6 border-2 border-(--border) rounded-2xl text-(--primary)">
						<span className="pl-3 font-medium"> عرض التقويم كامل</span>
						<ChevronLeft className="inline" />
					</button>
				</Paper>
			</Grid>
			<Grid size={{ xs: 12, md: 3.5 }} className="my-auto">
				<Paper className="text-center rounded-xl! py-3 bg-(--surface)! text-(--text)!">
					<div className="flex gap-3 items-center px-5">
						<LocationOnOutlinedIcon className="text-(--primary)! text-4xl!" />
						<Typography variant="h5">اتجاه القبلة </Typography>
					</div>
					<div className="flex justify-around  lg:flex-col-reverse">
						<div>
							<div>
								<Typography
									variant="h4"
									className="text-(--primary) font-bold! tracking-wider! pt-12 lg:pt-3 pb-2 text-end lg:text-center"
								>
									245
								</Typography>
								<Typography variant="h6">
									اتجاه القبلة من موقعك الحالي
								</Typography>
							</div>
							<button className="cursor-pointer z-20 text-center  px-8 py-2 my-6 border-2 border-(--border) rounded-2xl text-(--primary)">
								<LocationOnOutlinedIcon />
								<span className="pr-3 font-medium"> عرض الخريطة</span>
							</button>
						</div>
						<div className="flex items-center justify-center bg-(--surface) pt-12 lg:pt-6">
							<div className="relative w-40 h-40">
								{/* White Outer Circle */}
								<div className="absolute inset-0 rounded-full bg-(--surface) shadow-[0_2px_6px_rgba(0,0,0,0.5)]" />

								{/* Gradient Ring */}
								<div className="absolute inset-3 rounded-full bg-[conic-gradient(from_180deg,#b8e8c8,#93d4a8,#79c492,#4d8c3c,#3d7a2f,#6ca45b,#b8e8c8)]">
									{/* Inner White Circle */}
									<div className="absolute inset-3 rounded-full bg-(--surface)" />
								</div>

								{/* Top Pointer */}
								<div className="absolute -top-7 left-1/2 -translate-x-1/2">
									<svg
										width="30"
										height="34"
										viewBox="0 0 40 48"
										fill="#1F6B2D"
									>
										<path d="M20 0 C28 10 36 20 40 34 L20 48 L0 34 C4 20 12 10 20 0Z" />
									</svg>
								</div>

								{/* Center Icon */}
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-12 h-12">
										<img src="/img/kaaba (1).png" alt="kaaba" />
									</div>
								</div>
							</div>
						</div>
					</div>
				</Paper>
			</Grid>
		</Grid>
	);
}

export default HeroSection;
