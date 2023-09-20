import styled from "styled-components";
import { useState, useEffect, useRef } from "react";

import background1 from "../asset/korea1.jpg";
import {
	PiBowlFood,
	PiTree,
	PiThumbsUpBold,
	PiMountainsBold,
	PiParkBold,
} from "react-icons/pi";
import { BiSolidCity } from "react-icons/bi";
import topbg1 from "../asset/main_key/top_bg1.png";
import topbg2 from "../asset/main_key/top_bg2.png";
import topbg3 from "../asset/main_key/top_bg3.png";
import regionbg1 from "../asset/main_region/region1.jpeg";
import regionbg2 from "../asset/main_region/region2.jpeg";
import regionbg3 from "../asset/main_region/region3.jpeg";

const Container = styled.div`
	font-family: "GmarketSansMedium";
	color: ${(props) => props.theme.fontColor};
`;

const StyledMain1 = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	align-items: baseline;
	position: relative;
	padding: 150px;
	&::before {
		content: "";
		background-image: url(${background1});
		background-repeat: no-repeat;
		background-size: cover;
		opacity: 0.9;
		filter: brightness(0.8);
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
	}
`;

const StyledM1title = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: flex-end;
	padding: 20px;
	text-align: center;
	position: relative;
	transition: all 1s;
	opacity: 0;
	div {
		display: flex;
		border-bottom: 1px solid white;
	}
	h3 {
		font-size: 30px;
		color: white;
		margin: 0px;
	}
	h1 {
		margin: 0px;
		font-size: 100px;
		color: white;
	}
	@media screen and (max-width: 1024px) {
		h1 {
			font-size: 45px;
		}
	}
`;

const StyledMain2 = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: all 0.8s;
`;

const StyledMtitle = styled.div`
	font-size: 45px;
	text-align: center;
	cursor: pointer;

	@media screen and (max-width: 1024px) {
		font-size: 30px;
	}
`;

const StyledMSub = styled.div`
	font-size: 25px;
	margin: 2%;
	width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;

	@media screen and (max-width: 1024px) {
		font-size: 18px;
	}
`;
const StyledKeyTitle = styled.div`
	text-align: center;
	cursor: pointer;
	margin: 50px;
	display: flex;
	flex-direction: column;
	h2 {
		font-size: 50px;
		font-weight: bold;
		margin: 0px;
	}
	p {
		margin: 0px;
		font-size: 20px;
	}
	@media screen and (max-width: 1024px) {
		h2 {
			font-size: 30px;
		}
		p {
			font-size: 10px;
		}
	}
`;

const StyledTop3Box = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 70%;
`;

const StyledTopTree = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${topbg1});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 300px;
	height: 482px;
	color: #5f5e5e;
	margin: 15px;
	border-radius: 30px;
	transition: all 1s;
	svg {
		width: 30px;
		height: 30px;
		margin: 10px;
	}
	h3 {
		color: #5f5e5e;
		font-weight: bold;
		margin: 0px;
	}
	p {
		margin: 0px;
		font-size: 15px;
		visibility: hidden;
		font-weight: bold;
	}
	&:hover {
		transition: all 1.5s;
		flex-grow: 1;
		p {
			visibility: visible;
		}
	}
`;

const StyledTopFood = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${topbg2});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 300px;
	height: 482px;
	color: #5f5e5e;
	margin: 15px;
	border-radius: 30px;
	transition: all 1s;
	svg {
		margin: 10px;
		width: 30px;
		height: 30px;
	}
	h3 {
		margin: 0px;
		color: #5f5e5e;
		font-weight: bold;
	}
	p {
		margin: 0px;
		font-size: 15px;
		visibility: hidden;
		font-weight: bold;
	}
	&:hover {
		transition: all 1.5s;
		flex-grow: 1;
		p {
			visibility: visible;
		}
	}
`;

const StyledTopThumbs = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${topbg3});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 300px;
	height: 482px;
	color: #5f5e5e;
	margin: 15px;
	border-radius: 30px;
	transition: all 1s;
	svg {
		margin: 10px;
		width: 25px;
		height: 25px;
	}
	h3 {
		margin: 0px;
		color: #5f5e5e;
		font-weight: bold;
	}
	p {
		margin: 0px;
		font-size: 15px;
		visibility: hidden;
		font-weight: bold;
	}
	&:hover {
		transition: all 1.5s;
		flex-grow: 1;
		p {
			visibility: visible;
		}
	}
`;

const StyledMain3 = styled.div`
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	opacity: 0;
	transition: all 0.8s;
`;

const StyledRegionBox = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	text-align: center;
	width: 70%;
`;

const StyledRegionSeoul = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${regionbg1});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 300px;
	height: 482px;
	color: #fff;
	margin: 15px;
	border-radius: 30px;
	transition: all 1s;
	svg {
		margin: 10px;
		width: 25px;
		height: 25px;
	}
	h3 {
		margin: 0px;
		color: #fff;
		font-weight: bold;
	}
	p {
		margin: 0px;
		font-size: 15px;
		visibility: hidden;
		font-weight: bold;
	}
	&:hover {
		transition: all 1.5s;
		flex-grow: 1;
		p {
			visibility: visible;
		}
	}
`;

const StyledRegionIncheon = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${regionbg2});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 300px;
	height: 482px;
	color: #fff;
	margin: 15px;
	border-radius: 30px;
	transition: all 1s;
	svg {
		margin: 10px;
		width: 25px;
		height: 25px;
	}
	h3 {
		margin: 0px;
		color: #fff;
		font-weight: bold;
	}
	p {
		margin: 0px;
		font-size: 15px;
		visibility: hidden;
		font-weight: bold;
	}
	&:hover {
		transition: all 1.5s;
		flex-grow: 1;
		p {
			visibility: visible;
		}
	}
`;

const StyledRegionJeju = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-image: url(${regionbg3});
	background-repeat: no-repeat;
	background-size: cover;
	background-position: center;
	width: 300px;
	height: 482px;
	color: #fff;
	margin: 15px;
	border-radius: 30px;
	transition: all 1s;
	svg {
		margin: 10px;
		width: 25px;
		height: 25px;
	}
	h3 {
		margin: 0px;
		color: #fff;
		font-weight: bold;
	}
	p {
		margin: 0px;
		font-size: 15px;
		visibility: hidden;
		font-weight: bold;
	}
	&:hover {
		transition: all 1.5s;
		flex-grow: 1;
		p {
			visibility: visible;
		}
	}
`;

function Main({ navigate }) {
	let [scrollY, setScrollY] = useState(0);

	const targetRef1 = useRef();
	const targetRef2 = useRef();
	const mainTitle = useRef();

	useEffect(() => {
		// 이벤트가 계속 발생하는 걸 다루는 2가지
		// 쓰로틀링, 디바운스  >> 연속적으로 이벤트가 발생할때 이전 이벤트를 어떻게 처리할거냐? ( 스크롤이벤트 같은 경우, 버튼 무한클릭)
		// 1. 이전 이벤트를 무시하고 새로운 이벤트 핸들러를 실행한다 (쓰로틀링 / settimeout, lodash)
		// 2. 일정 시간동안 같은 이벤트가 발생하지 않도록 조절한다 // 1초, 2초 등 시간을 줘서 무시하게 한다 (디바운스)
		mainTitle.current.style.opacity = 1;
		window.addEventListener("scroll", () => {
			console.log("adfadfadf");
			setScrollY(window.scrollY + window.innerHeight);
		});
		return () => {
			window.removeEventListener("scroll", () => {
				setScrollY(window.scrollY + window.innerHeight);
			});
		};
	}, []);

	useEffect(() => {
		if (scrollY > targetRef1.current.offsetTop + 500) {
			targetRef1.current.style.opacity = 1;
		} else {
			targetRef1.current.style.opacity = 0;
		}
		if (scrollY > targetRef2.current.offsetTop + 500) {
			targetRef2.current.style.opacity = 1;
		} else {
			targetRef2.current.style.opacity = 0;
		}
	}, [scrollY]);

	return (
		<Container>
			<StyledMain1>
				<StyledM1title ref={mainTitle}>
					<div>
						<h3>한국여행 초보라면</h3>
						<div />
					</div>

					<h1>한국클릭</h1>
				</StyledM1title>
			</StyledMain1>
			<StyledMain2 ref={targetRef1}>
				<StyledKeyTitle>
					<h2
						onClick={() => {
							navigate("/keyword");
						}}
					>
						관광지 TOP 키워드
					</h2>
					<p>제일 인기있는 대한민국 관광지 키워드</p>
				</StyledKeyTitle>
				<StyledTop3Box>
					<StyledTopTree
						onClick={() => {
							navigate("/keyword/list?type=자연");
						}}
					>
						<PiTree />
						<h3>자연</h3>
						<p>자연 키워드로 보는 인기 있는 관광지</p>
					</StyledTopTree>
					<StyledTopFood
						onClick={() => {
							navigate("/keyword/list?type=음식");
						}}
					>
						<PiBowlFood />
						<h3>음식</h3>
						<p>음식 키워드로 보는 인기 있는 관광지</p>
					</StyledTopFood>
					<StyledTopThumbs
						onClick={() => {
							navigate("/keyword/list?type=추천코스");
						}}
					>
						<PiThumbsUpBold />
						<h3>추천코스</h3>
						<p>추천코스로 보는 인기 있는 관광지</p>
					</StyledTopThumbs>
				</StyledTop3Box>
			</StyledMain2>
			<StyledMain3 ref={targetRef2}>
				<StyledKeyTitle>
					<h2
						onClick={() => {
							navigate("/region");
						}}
					>
						지역별 관광정보
					</h2>
					<p>원하는 지역별로 보고싶다면?</p>
					<p>17개의 지역으로 구분되어있는 지역별 관광정보</p>
				</StyledKeyTitle>
				<StyledRegionBox>
					<StyledRegionSeoul
						onClick={() => {
							navigate("/region/list?type=서울");
						}}
					>
						<BiSolidCity />
						<h3>서울</h3>
						<p>지역별로 보는 서울 관광지</p>
					</StyledRegionSeoul>
					<StyledRegionIncheon
						onClick={() => {
							navigate("/region/list?type=인천");
						}}
					>
						<PiParkBold />
						<h3>인천</h3>
						<p>지역별로 보는 인천 관광지</p>
					</StyledRegionIncheon>
					<StyledRegionJeju
						onClick={() => {
							navigate("/region/list?type=제주도");
						}}
					>
						<PiMountainsBold />
						<h3>제주도</h3>
						<p>지역별로 보는 제주도 관광지</p>
					</StyledRegionJeju>
				</StyledRegionBox>
			</StyledMain3>
		</Container>
	);
}

export default Main;
