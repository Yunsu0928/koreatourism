import styled from "styled-components";

const Container = styled.div`
	padding: 60px;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	color: ${(props) => props.theme.fontColor};
`;

const StyledKeyMain = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
	height: 100%;
`;

const StyledKeyBox = styled.div`
	display: flex;
	flex-wrap: wrap;
	align-items: center;
	width: 80%;
	height: 100%;
`;

const StyledKeyCard = styled.div`
	width: 18%;
	height: 35%;
	margin: 3%;
	background-color: ${(props) => props.theme.mainColor};
	display: flex;
	justify-content: center;
	align-items: center;
`;

function Keyword() {
	return (
		<Container>
			<h2>키워드별 관광안내</h2>
			{/* 설명이 들어가면 좋을 것 같긴한데 흠... */}
			<StyledKeyMain>
				<StyledKeyBox>
					<StyledKeyCard>
						<h3>자연</h3>
					</StyledKeyCard>
					<StyledKeyCard>
						<h3>인문</h3>
						<h4>(문화/예술/역사)</h4>
					</StyledKeyCard>
					<StyledKeyCard>
						<h3>레포츠</h3>
					</StyledKeyCard>
					<StyledKeyCard>
						<h3>쇼핑</h3>
					</StyledKeyCard>
					<StyledKeyCard>
						<h3>음식</h3>
					</StyledKeyCard>
					<StyledKeyCard>
						<h3>숙박</h3>
					</StyledKeyCard>
					<StyledKeyCard>
						<h3>추천코스</h3>
					</StyledKeyCard>
				</StyledKeyBox>
			</StyledKeyMain>
		</Container>
	);
}

export default Keyword;
