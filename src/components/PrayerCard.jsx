import React from "react";
import Typography from "@mui/material/Typography";

function PrayerCard({ prayer }) {
	const Icon = prayer.icon;

	return (
		<div className="flex flex-col items-center gap-y-1 rounded-xl! bg-(--surface)! pb-5 pt-3 shadow-[0_2px_6px_rgba(0,0,0,0.25)] ">
			<Icon size={35} color={prayer.color} className="mb-3" />
			<Typography variant="h5">{prayer.name}</Typography>
			<Typography variant="h5" className="tracking-tighter">
				{prayer.time}
			</Typography>
			<Typography variant="h6">{prayer.timing}</Typography>
		</div>
	);
}

export default PrayerCard;
