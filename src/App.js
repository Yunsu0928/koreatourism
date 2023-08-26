import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";

import Main from "./components/Main";
import Keyword from "./pages/Keyword";
import KeyList from "./pages/KeyList";
import Region from "./pages/Region";
import RegionList from "./pages/RegionList";

const Container = styled.div`
	font-family: "GmarketSansMedium";
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	padding: 13px 30px;
	background-color: ${(props) => props.theme.mainColor};
	position: fixed;
	top: 0;
	left: 0;
	z-index: 10;
`;

const StyledLogo = styled.div`
	font-size: 20px;
	font-weight: bold;
	&:hover {
		cursor: pointer;
	}
`;

// const StyledInput = styled.input`
// 	width: 600px;
// 	height: 30px;
// 	padding: 5px 20px;
// 	border: none;
// 	border-radius: 20px;
// `;

const StyledNavMenu = styled.div`
	display: flex;
`;

const StyledMenuButt = styled.div`
	padding-right: 50px;
	&:hover {
		cursor: pointer;
	}
`;

function App() {
	let navigate = useNavigate();

	return (
		<>
			<Container>
				<StyledNav>
					<StyledLogo
						onClick={() => {
							navigate("/");
						}}
					>
						한국클릭
					</StyledLogo>
					{/* 검색창을 키워드랑 지역별 안에 넣는게 더 효율적일까? */}
					{/* <StyledInput placeholder="검색어를 입력하세요" /> */}
					<StyledNavMenu>
						<StyledMenuButt
							onClick={() => {
								navigate("/keyword");
							}}
						>
							키워드별 관광안내
						</StyledMenuButt>
						<StyledMenuButt
							onClick={() => {
								navigate("/region");
							}}
						>
							지역별 관광안내
						</StyledMenuButt>
						{/* <StyledMenuButt
							onClick={() => {
								navigate("/pet");
							}}
						>
							반려동물동반 관광안내
						</StyledMenuButt> */}
					</StyledNavMenu>
				</StyledNav>
			</Container>
			<Routes>
				<Route path="/" element={<Main navigate={navigate} />} />
				<Route path="/keyword" element={<Keyword navigate={navigate} />} />
				<Route path="/keyword/list" element={<KeyList />} />
				<Route path="/region" element={<Region navigate={navigate} />} />
				<Route path="/region/list" element={<RegionList />} />
				{/* <Route path="/pet" element="" /> */}
			</Routes>
		</>
	);
}

export default App;
