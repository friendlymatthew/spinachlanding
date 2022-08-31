import Link from "next/link";
import styles from "../styles/Home.module.css";
import Button from "./ButtonGreen";

export default function Hero() {
	return (
		<section className={styles.graph}>
			<div className="flex justify-center">
				<div className="h-screen w-10/12 lg:w-6/12 text-black flex flex-col justify-center items-center">
					<div className="text-3xl font-semibold text-center">
						The perfect spinach for every season.
					</div>
					<div className="text-xl text-center tracking-tighter pt-4 pb-12">
						We&apos;ve created an intelligent automated indoor grow system to
						bring you deliciously fresh spinach all year long. Our organic
						growing practices are grounded in data you can access and
						trust&comma; as we adjust the growth conditions to produce the
						perfect spinach from every seed. We empower our customers to be
						active partners in this data-driven growing process, prioritizing
						farmer-consumer transparency and eco-conscious cultivation.
					</div>

					<div className="flex space-x-8">
						<a
							href="https://medium.com/court-street-farmers"
							target="_blank"
							rel="noreferrer"
						>
							<Button name="Read Our Blog" />
						</a>

						<Link href="/team">
							<Button name="Meet The Team"></Button>
						</Link>
					</div>

					<div className="text-3xl py-20 font-semibold">COMING SOON</div>
				</div>
			</div>
		</section>
	);
}
