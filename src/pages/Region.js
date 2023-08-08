import styled from "styled-components";

const Container = styled.div`
	padding: 60px;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	color: ${(props) => props.theme.fontColor};
`;

const StyledRegMain = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const StyledListButt = styled.div`
	width: 100%;
`;

const StyledRegBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 80%;
	height: 100%;
`;

const StyledRegCard = styled.div`
	width: 18%;
	height: 35%;
	margin: 3%;
	background-color: ${(props) => props.theme.mainColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Region() {
	const regionArr = [
		"서울",
		"인천",
		"대전",
		"대구",
		"광주",
		"부산",
		"울산",
		"세종특별자치시",
		"경기도",
		"강원특별자치도",
		"충청북도",
		"충청남도",
		"경상북도",
		"경상남도",
		"전라북도",
		"전라남도",
		"제주도",
	];

	return (
		<Container>
			<h2>지역별 관광안내</h2>
			{/* 설명이 들어가면 좋을 것 같긴한데 흠... */}
			<StyledRegMain>
				<StyledListButt>
					리스트버튼 어떻게 들어가야 진행이 될까 으미ㅏ어라ㅣㅁ어라ㅣㅁ어라ㅣㅁ어라ㅣ머이라머ㅣㅏ
				</StyledListButt>
				<StyledRegBox>
					{regionArr.map((e) => (
						<StyledRegCard>
							<h3>{e}</h3>
						</StyledRegCard>
					))}
				</StyledRegBox>
			</StyledRegMain>
		</Container>
	);
}

export default Region;
