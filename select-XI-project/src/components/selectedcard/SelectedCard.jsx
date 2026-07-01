// import React from 'react';
import bin from '../../assets/Vector.png';

const SelectedCard = ({player, removePlayer}) => {
  console.log(player);
  const handleRemove = () => {
    removePlayer(player);
  }
  return (
		<div className="border-2 mt-5 border-gray-400 flex justify-between items-center">
			<div className="flex items-center">
				<img
					className="w-[50px] h-[50px] rounded-xl"
					src={player.playerImage}
					alt=""
				/>
				<div className="ml-4">
					<h1>{player.playerName}</h1>
					<p className="text-xs">{player.playerRole}</p>
				</div>
			</div>

			<div onClick={handleRemove} >
				<img
					src={bin}
					alt=""
				/>
			</div>
		</div>
	);
};

export default SelectedCard;