// import React from 'react';
import { use } from 'react';
import userImg from '../../assets/user1.png';
import flagImg from '../../assets/report1.png'

const AvailablePlayers = ({ playerPromise }) => {
	const playerData = use(playerPromise); //take time for load
	console.log(playerData);
	return (
		<div className=" max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
			{playerData.map((player) => (
				<div className="card bg-base-100 shadow-sm p-4">
					<figure>
						<img
							src={player.playerImage}
							alt="Shoes"
						/>
					</figure>
					<div className="mt-4">
						<div className="flex">
							<img
								src={userImg}
								alt=""
							/>
							<h2 className="card-title ml-4">{player.playerName}</h2>
						</div>
						<div className="flex justify-between mt-4 border-b-1 border-gray-400 pb-2">
							<div className="flex">
								<img
									className="w-[20px] h-[20px]"
									src={flagImg}
									alt=""
								/>
								<span className="ml-2">{player.country}</span>
							</div>
							<button className="btn">{player.role}</button>
						</div>

						<div className="flex justify-between font-bold">
							<span>{player.rating}</span>
							<span>6</span>
						</div>

						<div className="flex justify-between mt-4">
							<span className="font-bold">{player.battingStyle}</span>
							<span>{player.bowlingStyle}</span>
						</div>

						<div className="card-actions mt-4 justify-between items-center">
							<p className="font-bold">price: {player.price}</p>
							<button className="btn ">choose player</button>
						</div>
					</div>
				</div>
			))}
		</div>
	);
};

export default AvailablePlayers;
