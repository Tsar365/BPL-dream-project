
import { Suspense } from 'react';
import './App.css'


import AvailablePlayers from './components/AvailablePlayers/availableplayers';
import Navbar from './components/navbar/Navbar';
// import SelectedPlayers from './components/SelectedPlayers/selectedplayers';

const fetchPlayers = async ()=>{
	const res = await fetch ("/players.json")
	return res.json()
}

function App() {
 
	const playerPromise = fetchPlayers()

  return (
		<>
		<h1>hell o</h1>
			<Navbar></Navbar>

			<Suspense
				fallback={<span className="loading loading-spinner loading-xl"></span>}>
				<AvailablePlayers playerPromise={playerPromise}></AvailablePlayers>
			</Suspense>
			{/* <SelectedPlayers></SelectedPlayers> */}
		</>
	);
}

export default App
