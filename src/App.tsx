import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';
import { ReactQueryDevtools } from 'react-query/devtools';

function App() {
	return (
		<>
			<GlobalStyle />
			<Router basename={process.env.PUBLIC_URL}>
				<Routes>
					<Route path='/' element={<Coins />} />
					<Route path='/:coinId' element={<Coin />}>
						<Route path='price' element={<Price />} />
						<Route path='chart' element={<Chart />} />
					</Route>
				</Routes>
			</Router>
			<ReactQueryDevtools initialIsOpen={true} />
		</>
	);
}

export default App;
