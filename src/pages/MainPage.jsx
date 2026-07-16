import React from "react";
import PrayerCard from "../components/PrayerCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Paper from "@mui/material/Paper";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import Typography from "@mui/material/Typography";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import { prayers } from "../data/prayers";

function MainPage() {
	return (
		<div
			dir="rtl"
			className="
				bg-[url(/img/bg-Main.png)]
    bg-cover
    bg-center
    bg-no-repeat
    overflow-hidden
    relative
	before:absolute
    before:inset-0
    before:bg-black/15
	before:content-['']
	
"
		>
			<Container maxWidth="lg">
				<Grid container spacing={{ xs: 3, md: 4, lg: 12 }} className="py-16">
					<Grid size={{ xs: 12, sm: 4 }} className="my-auto">
						<Paper className="text-center rounded-xl! py-3 bg-(--background)! text-(--text)!">
							<Typography variant="h5">
								فَأَقِيمُوا الصَّلَاةَ ۚ إِنَّ الصَّلَاةَ كَانَتْ عَلَى
								الْمُؤْمِنِينَ كِتَابًا مَّوْقُوتًا
							</Typography>
							<Typography variant="h6">سورة النساء - ءاية 103</Typography>
						</Paper>
					</Grid>
					<Grid size={{ xs: 12, sm: 4 }} className="my-auto">
						<Paper
							elevation={3}
							className="text-center rounded-xl! pt-8 pb-3 bg-(--background)! text-(--text)!"
						>
							<Typography variant="h6">الصلاة القادمة</Typography>
							<Typography variant="h3">العصر</Typography>
							<Typography
								variant="h4"
								className="tracking-tighter text-(--primary)!"
							>
								03:24:21
							</Typography>
							<Typography variant="h6">باقي علي الصلاة</Typography>
						</Paper>
					</Grid>
					<Grid size={{ xs: 12, sm: 4 }}>
						<Stack spacing={2} className="items-end!">
							<Paper className="text-center rounded-xl! bg-(--background)! flex justify-evenly py-8 w-full sm:w-4/5">
								<Typography variant="h4" className="text-(--text)!">
									القاهرة, مصر
								</Typography>
								<LocationOnOutlinedIcon className="text-(--primary)! text-4xl!" />
							</Paper>
							<Paper className="text-center rounded-xl! bg-(--background)! flex justify-evenly py-8 w-full">
								<Typography variant="h5" className="text-(--text)!">
									السبت 9 سبتمبر 2026
								</Typography>
								<CalendarTodayOutlinedIcon className="text-(--primary)! text-4xl!" />
							</Paper>
						</Stack>
					</Grid>
				</Grid>

				<Grid
					container
					spacing={2}
					className="text-center rounded-2xl! bg-(--surface)! py-5 px-8 shadow-[0_2px_6px_rgba(0,0,0,0.25)] relative
	before:absolute
    before:inset-0 before:bg-black/0"
				>
					{prayers.map((item) => (
						<Grid key={item.id} size={{ xs: 6, md: 4, lg: 2 }}>
							<PrayerCard prayer={item} />
						</Grid>
					))}
				</Grid>
			</Container>
		</div>
	);
}

export default MainPage;
