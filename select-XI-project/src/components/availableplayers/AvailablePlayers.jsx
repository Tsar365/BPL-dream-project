// import React from 'react';
import { use } from 'react';

import PlayerCard from '../playercard/PlayerCard';

const AvailablePlayers = ({ playerPromise, setAvailableBalance, availableBalance, purchasedPlayers, setPurchasedPlayers }) => {
	const playerData = use(playerPromise); //take time for load
	console.log(playerData);
	return (
		<div className=" max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-3">
			{playerData.map((player) => (
				<PlayerCard
				purchasedPlayers={purchasedPlayers}
				setPurchasedPlayers={setPurchasedPlayers}
				availableBalance={availableBalance}
					setAvailableBalance={setAvailableBalance}
					player={player}></PlayerCard>
			))}
		</div>
	);
};

export default AvailablePlayers;
