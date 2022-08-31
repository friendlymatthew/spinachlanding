const ourTeam = [
	{
		name: "Matthew",
		hometown: "Honolulu, HI",
		location: "Middletown, CT",
		background: "Computer Science",
		bio: "I would like to solve complex problems in the farming industry through technology. I build web + cloud-based solutions to provide efficient and highly scalable applications.",
		website: "https://matthewkim.vercel.app",
		linkedin: "https://linkedin.com/in/mat-thew",
	},
	{
		name: "Brady",
		hometown: "McAllen, TX",
		location: "Austin, TX",
		background: "Electrical Engineering",
		bio: "I would like to solve complex problems in the farming industry through technology. I build web + cloud-based solutions to provide efficient and highly scalable applications.",
		website: "bradystrong3@gmail.com",
	},
];

export default function Team() {
	return (
		<div className="flex justify-center bg-white text-black py-20">
			<div className="min-h-screen w-6/12">
				<div className="text-center font-semibold text-2xl">Meet The Team</div>

				<div className="grid grid-cols-1 divide-y">
					{ourTeam.map(
						({
							name,
							hometown,
							location,
							background,
							bio,
							website,
							linkedin,
						}) => {
							return (
								<div className="p-8">
									<div className="flex space-x-4 items-end">
										<div className="text-xl">{name}</div>
										<div>From {hometown}</div>
									</div>
									<div className="pt-1 pb-2">Currently in {location}</div>
									<div>Studying {background}</div>
									<div>{bio}</div>
								</div>
							);
						}
					)}
				</div>
			</div>
		</div>
	);
}
