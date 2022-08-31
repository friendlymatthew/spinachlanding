export default function Button({ name }) {
	return (
		<div className="group bg-green-50 border-green-600 border hover:bg-green-600 rounded-xl cursor-pointer px-4 py-2 flex space-x-2">
			<div className="text-green-600 font-medium group-hover:text-white transition ease-in duration-75 text-xl">
				{name}{" "}
			</div>
		</div>
	);
}
