import { Suspense, useState } from 'react';
import './App.css';
 import { ToastContainer } from 'react-toastify';

import AvailablePlayers from './components/AvailablePlayers/availableplayers';
import Navbar from './components/navbar/Navbar';
import SelectedPlayers from './components/SelectedPlayers/selectedplayers';

const fetchPlayers = async () => {
	const res = await fetch('/players.json');
	return res.json();
};

const playerPromise = fetchPlayers();

function App() {
	const [toggle, setToggle] = useState(true);
	const [availableBalance, setAvailableBalance] = useState(6000);
	const [purchasedPlayers, setPurchasedPlayers] = useState([]);
	console.log(purchasedPlayers);

	const removePlayer=(p)=>{
		const filterData = purchasedPlayers.filter((ply) => ply.playerName !== p.playerName);
		setPurchasedPlayers(filterData);
		// console.log(filterData);
		setAvailableBalance(availableBalance + parseInt(p.price));
	}

	return (
		<>
			<Navbar availableBalance={availableBalance}></Navbar>

			<div className=" max-w-[1200px] mx-auto flex justify-between items-center">
				<h1 className="font-bold text-2xl">
					{toggle === true
						? 'Available players'
						: `Selected players (${purchasedPlayers.length}/6)`}
				</h1>
				<div className="font-bold">
					<button
						onClick={() => setToggle(true)}
						className={`py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 ${
							toggle ? 'bg-amber-200' : ''
						}`}>
						available
					</button>
					<button
						onClick={() => setToggle(false)}
						className={`py-3 px-4 border border-gray-400 rounded-r-2xl ${
							!toggle ? 'bg-red-900 text-white' : ''
						}`}>
						selected<span>({purchasedPlayers.length})</span>
					</button>
				</div>
			</div>

			{toggle === true ? (
				<Suspense
					fallback={
						<span className="loading loading-spinner loading-xl"></span>
					}>
					<AvailablePlayers
						purchasedPlayers={purchasedPlayers}
						setPurchasedPlayers={setPurchasedPlayers}
						availableBalance={availableBalance}
						setAvailableBalance={setAvailableBalance}
						playerPromise={playerPromise}></AvailablePlayers>
				</Suspense>
			) : (
				<SelectedPlayers
					removePlayer={removePlayer}
					purchasedPlayers={purchasedPlayers}
				/>
			)}
			<ToastContainer />
		</>
	);
}

export default App;
