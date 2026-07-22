import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";

import { prayers } from "../data/prayers";

function PrayerTimes() {
	return (
		<div className="bg-(--background)">
			<Container maxWidth="lg">
				<Grid container spacing={4}>
					<Grid
						size={12}
						className="flex flex-col justify-center items-center py-20 gap-12"
					>
						<div className="flex justify-center items-center gap-3 sm:gap-6">
							<Typography variant="h4" className="text-(--text)!">
								القاهرة, مصر
							</Typography>
							<LocationOnOutlinedIcon className="text-(--primary)! text-4xl!" />
						</div>
						<div className="flex flex-col sm:flex-row-reverse justify-center items-center gap-6 ">
							<Typography variant="h5" className="text-(--text)!">
								السبت 9 سبتمبر 2026
							</Typography>
							<Typography
								variant="h5"
								className="text-(--text)! font-medium! tracking-wider!"
							>
								24 صفر 1445 ه
							</Typography>
						</div>
					</Grid>
					<Grid size={{ xs: 12, md: 10 }} className={"mx-auto mb-10"}>
						{prayers.map((item) => {
							const Icon = item.icon;
							return (
								<Paper
									key={item.id}
									className="flex flex-row-reverse justify-between items-center text-(--text)! bg-(--background)! shadow-[0_2px_6px_rgba(0,0,0,0.6)]! mb-6 rounded-2xl! py-8 px-4 sm:px-8 "
								>
									<div className="flex flex-row-reverse items-center gap-2 sm:gap-10">
										<Icon size={35} color={item.color} className="mb-3" />
										<Typography variant="h5">{item.name}</Typography>
									</div>
									<Typography variant="h4" className="tracking-tighter">
										{item.time}
									</Typography>
									<Typography variant="h6">{item.timing}</Typography>
								</Paper>
							);
						})}
					</Grid>
				</Grid>
			</Container>
		</div>
	);
}

export default PrayerTimes;
