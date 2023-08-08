import styled from "styled-components";
import { Routes, Route, useNavigate } from "react-router-dom";

import Main from "./components/Main";

const Container = styled.div`
	font-family: "GmarketSansMedium";
`;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	padding: 13px 30px;
	background-color: #e9f4ff;
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

const StyledInput = styled.input`
	width: 600px;
	height: 30px;
	padding: 5px 20px;
	border: none;
	border-radius: 20px;
`;

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
					<StyledInput placeholder="검색어를 입력하세요" />
					<StyledNavMenu>
						{/* onClick(()=>{navigate("/")}) 이렇게 페이지 옮기기 Route도 같이 작업해줘야한다*/}
						<StyledMenuButt
							onClick={() => {
								navigate("/keyword");
							}}
						>
							키워드TOP
						</StyledMenuButt>
						<StyledMenuButt
							onClick={() => {
								navigate("/region");
							}}
						>
							지역별 관광안내
						</StyledMenuButt>
						<StyledMenuButt
							onClick={() => {
								navigate("/pet");
							}}
						>
							반려동물동반 관광안내
						</StyledMenuButt>
						{/* <StyledMenuButt>마이페이지</StyledMenuButt> */}
					</StyledNavMenu>
				</StyledNav>
				<Main navigate={navigate} />
			</Container>
			<Routes>
				<Route path="/" element={""} />
				<Route path="/keyword" element="" />
				<Route path="/region" element="" />
				<Route path="/pet" element="" />
			</Routes>
		</>
	);
}

export default App;
