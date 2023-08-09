import styled from "styled-components";

import { regionObj } from "../data/regionObj";

const Container = styled.div`
	padding: 60px;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	font-family: "GmarketSansMedium";
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

function Region({ navigate }) {
	return (
		<Container>
			<h2>지역별 관광안내</h2>
			{/* 설명이 들어가면 좋을 것 같긴한데 흠... */}
			<StyledRegMain>
				<StyledRegBox>
					{Object.keys(regionObj).map((key) => (
						<StyledRegCard
							onClick={() => {
								navigate(`/region/list?type=${key}`);
							}}
						>
							<h3>{key}</h3>
						</StyledRegCard>
					))}
				</StyledRegBox>
			</StyledRegMain>
		</Container>
	);
}

export default Region;
