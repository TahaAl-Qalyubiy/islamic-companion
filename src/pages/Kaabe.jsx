import React from "react";
import imge from "/img/kaaba (1).png";
import { MapPin } from "lucide-react";

function Kaabe() {
	const ticks = Array.from({ length: 36 }, (_, i) => i * 10);

	return (
		<div className=" lg:flex  lg:justify-center lg:items-center " dir="rtl">
			<div className="kaabe lg:w-1/2 lg:mt-20 xl:w-1/3 shadow-none lg:h-3/4 mt-20 rounded-lg p-5 flex flex-col justify-center items-center pb-24">
				<div>
					<h1 className="text-2xl text-center font-bold mb-7">اتجاه القبله</h1>
					<div>
						<div className="lg:w-96 w-80 h-80 lg:h-96 border border-amber-500 rounded-full flex items-center justify-center ">
							<div className="lg:w-80 lg:h-80 w-72 h-72  bg-(--primary) rounded-full relative">
								<svg
									viewBox="0 0 320 320"
									className="absolute inset-0 lg:w-80 lg:h-80 w-72 h-72"
								>
									<circle
										cx="160"
										cy="160"
										r="160"
										fill="none"
										stroke="#d9a441"
										strokeWidth="1.5"
									/>
									<circle cx="160" cy="160" r="138" fill="var(--primary)" />
									{ticks.map((deg) => {
										const isMajor = deg % 90 === 0;
										const rad = ((deg - 90) * Math.PI) / 180;
										const rIn = isMajor ? 132 : 140;
										const x1 = 160 + 150 * Math.cos(rad);
										const y1 = 160 + 150 * Math.sin(rad);
										const x2 = 160 + rIn * Math.cos(rad);
										const y2 = 160 + rIn * Math.sin(rad);
										return (
											<line
												key={deg}
												x1={x1}
												y1={y1}
												x2={x2}
												y2={y2}
												stroke={isMajor ? "#d9a441" : "rgba(255,255,255,0.35)"}
												strokeWidth={isMajor ? 2 : 1}
											/>
										);
									})}
								</svg>

								<div className="absolute top-8 left-1/2 -translate-x-1/2">
									<div className="w-0 h-0 border-l-10 border-l-transparent border-r-10 border-r-transparent border-b-20 border-b-amber-500"></div>
								</div>

								<div className="w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
									{" "}
									<img src={imge} alt="" />
								</div>
								<div className="absolute top-3 left-1/2 -translate-x-1/2 text-white font-bold">
									N
								</div>
								<div className="absolute bottom-3 left-1/2 -translate-x-1/2 text-white/60">
									S
								</div>
								<div className="absolute right-3 top-1/2 -translate-y-1/2 text-white/60">
									E
								</div>
								<div className="absolute left-3 top-1/2 -translate-y-1/2 text-white/60">
									W
								</div>
							</div>
						</div>
						<div>
							<h1 className="text-center mt-5 text-4xl text-emerald-900 font-bold">
								245ْ{" "}
							</h1>
							<h1 className="text-center mt-5 text-xl text-emerald-900 font-bold">
								اتجاه القبله
							</h1>
							<p className="text-center font-bold">من موقعك الحالي</p>
						</div>
					</div>
				</div>
				<div className="map flex justify-center items-center p-4 rounded-2xl bg-(--surface) w-fit font-bold mt-10 gap-3">
					<MapPin />
					القاهره, مصر
				</div>
			</div>
		</div>
	);
}

export default Kaabe;
