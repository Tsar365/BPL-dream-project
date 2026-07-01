// import React from 'react';
import userImg from '../../assets/user1.png';
import flagImg from '../../assets/report1.png';
import { useState } from 'react';

const PlayerCard = ({ player, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
	const [isSelected, setIsSelected] = useState(false);

  const handleSelected = (playerData) => {
    const playerprice = parseInt(playerData.price);

    if (availableBalance < playerprice) {
      alert('Insufficient balance to select this player.');
      return;
    }

setIsSelected(true);
setAvailableBalance(availableBalance - playerprice);
setPurchasedPlayers([...purchasedPlayers, playerData]);

  }

	return (
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
					<button
						disabled={isSelected}
						onClick={() => {
							handleSelected(player);
						}}
						className="btn ">
						{isSelected === true ? 'Selected' : 'Choose player'}
					</button>
				</div>
			</div>
		</div>
	);
};

export default PlayerCard;