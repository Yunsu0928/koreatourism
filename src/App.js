import styled from "styled-components";

import background1 from "./asset/korea1.jpg";
import pet1 from "./asset/pet1.jpg";

const Container = styled.div``;

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
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
	h1 {
		position: relative;
	}
`;

const StyledM1title = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	/* border: 2px solid #626262; */
`;

const StyledMain2 = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledMtitle = styled.div`
	font-size: 45px;
	color: ${(props) => props.theme.fontColor};
`;

const StyledMSub = styled.div`
	font-size: 25px;
	color: ${(props) => props.theme.fontColor};
	margin: 2%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;

const StyledM2CardBox = styled.div`
	width: 70%;
	height: 40%;
	padding: 1%;
	display: flex;
	justify-content: center;
	align-items: center;
	/* background-color: yellow; */
`;

const StyledM2Card = styled.div`
	width: 25%;
	height: 100%;
	margin: 1% 3%;
	background-color: #e9f4ff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	color: ${(props) => props.theme.fontColor};
`;

const StyledMain3 = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	/* background-color: pink; */
`;

const StyledM3CardBox = styled.div`
	width: 70%;
	height: 55%;
	padding: 1%;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	/* background-color: yellow; */
`;

const StyledM3Card = styled.div`
	width: 20%;
	height: 45%;
	margin: 1% 2%;
	background-color: #e9f4ff;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	color: ${(props) => props.theme.fontColor};
`;

const StyledMain4 = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	position: relative;
	&::before {
		content: "";
		background-image: url(${pet1});
		background-size: 100vw 100vh;
		opacity: 0.5;
		position: absolute;
		top: 25px;
		left: 0;
		right: 0;
		bottom: 0;
	}
	h1 {
		position: relative;
	}
`;

const StyledMSub1 = styled.div`
	margin-top: 3%;
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
					<StyledMenuButt>반려동물동반 관광안내</StyledMenuButt>
					<StyledMenuButt>마이페이지</StyledMenuButt>
				</StyledNavMenu>
			</StyledNav>
			<StyledMain1>
				<StyledM1title>
					<h1>한국여행 초보라면</h1>
					<h1>바로 한국클릭</h1>
				</StyledM1title>
			</StyledMain1>
			<StyledMain2>
				<StyledMtitle>관광지 TOP 키워드</StyledMtitle>
				<StyledMSub>제일 인기있는 대한민국 관광지 키워드</StyledMSub>
				<StyledM2CardBox>
					{/* TOP3 서비스분류코드조회 */}
					<StyledM2Card>자연</StyledM2Card>
					<StyledM2Card>음식</StyledM2Card>
					<StyledM2Card>추천코스</StyledM2Card>
				</StyledM2CardBox>
			</StyledMain2>
			<StyledMain3>
				<StyledMtitle>지역별 관광정보</StyledMtitle>
				<StyledMSub>
					<div>원하는 지역별로 보고싶다면?</div>
					<div>17개의 지역으로 구분되어있는 지역별 관광정보</div>
				</StyledMSub>
				<StyledM3CardBox>
					<StyledM3Card>서울</StyledM3Card>
					<StyledM3Card>인천</StyledM3Card>
					<StyledM3Card>제주도</StyledM3Card>
					<StyledM3Card>강원도</StyledM3Card>
					<StyledM3Card>경기도</StyledM3Card>
					<StyledM3Card>대구</StyledM3Card>
					<StyledM3Card>부산</StyledM3Card>
					<StyledM3Card>대전</StyledM3Card>
				</StyledM3CardBox>
			</StyledMain3>
			<StyledMain4>
				<StyledM1title>
					<StyledMtitle>반려동물 동반여행</StyledMtitle>
					<StyledMSub>
						<StyledMSub1>
							반려동물과 함께 여행을 계획이 어려우셨나요?
						</StyledMSub1>
						<div>그렇다면 반려동물 관광정보를 클릭해보세요</div>
					</StyledMSub>
				</StyledM1title>
			</StyledMain4>
		</Container>
	);
}

export default App;
