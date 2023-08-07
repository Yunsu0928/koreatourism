import styled from "styled-components";

import background1 from "./asset/korea1.jpg";

const Container = styled.div``;

const StyledNav = styled.nav`
	display: flex;
	justify-content: space-between;
	align-items: center;
	width: 100vw;
	padding: 13px 30px;
	background-color: #ffefef;
	position: fixed;
	top: 0;
	left: 0;
`;

const StyledLogo = styled.div`
	font-size: 20px;
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
`;

const StyledMain1 = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	&::before {
		content: "";
		background-image: url(${background1});
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.5;
		position: absolute;
		top: 66px;
		left: 0;
		right: 0;
		bottom: 0;
	}
	h1 {
		position: relative;
	}
`;

function App() {
	return (
		<Container>
			<StyledNav>
				<StyledLogo>한국클릭</StyledLogo>
				<StyledInput placeholder="검색어를 입력하세요" />
				<StyledNavMenu>
					<StyledMenuButt>키워드TOP</StyledMenuButt>
					<StyledMenuButt>지역별 관광안내</StyledMenuButt>
					<StyledMenuButt>반려동물동반</StyledMenuButt>
					<StyledMenuButt>마이페이지</StyledMenuButt>
				</StyledNavMenu>
			</StyledNav>
			<StyledMain1>
				<h1>한국여행 초보라면</h1>
				<h1>바로 한국클릭</h1>
			</StyledMain1>
			<div>
				<div>대한민국 관광지 TOP 키워드</div>
				<div>뭐라뭐라 설명쓰기</div>
				<div>TOP3 카드컴포넌트오기</div>
			</div>
			<div>
				<div>지역별 관광정보</div>
				<div>뭐라뭐라 설명쓰기</div>
				<div>
					<div>서울</div>
					<div>인천</div>
					<div>경기도</div>
					<div>강원도</div>
					<div>부산</div>
					<div>대구</div>
					<div>전주</div>
					<div>대전</div>
				</div>
			</div>
			<div>
				<div>
					<div>반려동물 동반여행</div>
					<div>반려동물과 함께 여행을 계획하신다면</div>
				</div>
				<div>
					<div>한국클릭 생생후기</div>
					<div>후기 쭈루루루룩</div>
				</div>
			</div>
		</Container>
	);
}

export default App;
