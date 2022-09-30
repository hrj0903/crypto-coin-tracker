import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { GlobalStyle } from './GlobalStyled';
import Chart from './routes/Chart';
import Coin from './routes/Coin';
import Coins from './routes/Coins';
import Price from './routes/Price';
import { ReactQueryDevtools } from 'react-query/devtools';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from './theme';
import { useRecoilValue } from 'recoil';
import { isDarkAtom } from './atoms';

function App() {
	const isDark = useRecoilValue(isDarkAtom);
	return (
		<>
			<ThemeProvider theme={isDark ? darkTheme : lightTheme}>
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
			</ThemeProvider>
		</>
	);
}

export default App;
