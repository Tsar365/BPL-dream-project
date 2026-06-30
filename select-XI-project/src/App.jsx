
import './App.css'
import navImg from "./assets/logo.png";
import dollar from "./assets/dollar1.png"

function App() {
  // const [count, setCount] = useState(0)

  return (
		<>
			{/* <div className="navbar max-w-[1200px] mx-auto">
				<div className="flex-1">
					<a className="text-xl">
						<img className='w-[60px] h-[60px]' src={navImg} alt="" />
					</a>
				</div>
				<div className="flex items-center">
				<span>600000</span>
				<span>Coin</span>
				<img src={dollar} alt="" />
					
				</div>
			</div> */}
			<div className="navbar max-w-[1200px] mx-auto">
				<div className="flex-1">
					<a className="text-xl">
						<img
							className="w-[60px] h-[60px]"
							src={navImg}
							alt=""
						/>
					</a>
				</div>

				<div className="flex items-center gap-2">
					<span>600000</span>
					<span>Coin</span>
					<img
						className="w-6 h-6"
						src={dollar}
						alt=""
					/>
				</div>
			</div>
		</>
	);
}

export default App
