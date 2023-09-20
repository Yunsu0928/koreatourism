import styled from "styled-components";

import { regionObj } from "../data/regionObj";
import region1 from "../asset/region/region1.jpeg";
import region2 from "../asset/region/region2.jpeg";
import region3 from "../asset/region/region3.jpeg";
import region4 from "../asset/region/region4.jpeg";
import region5 from "../asset/region/region5.jpeg";
import region6 from "../asset/region/region6.jpeg";
import region7 from "../asset/region/region7.jpeg";
import region8 from "../asset/region/region8.jpeg";
import region9 from "../asset/region/region9.jpeg";
import region10 from "../asset/region/region10.jpeg";
import region11 from "../asset/region/region11.jpeg";
import region12 from "../asset/region/region12.jpeg";
import region13 from "../asset/region/region13.jpeg";
import region14 from "../asset/region/region14.jpeg";
import region15 from "../asset/region/region15.jpeg";
import region16 from "../asset/region/region16.jpeg";
import region17 from "../asset/region/region17.jpeg";

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
	background-image: url(${(props) => props.backgroundArr[props.i]});
	background-position: center;
	background-repeat: no-repeat;
	display: flex;
	justify-content: center;
	align-items: center;
	border-radius: 30px;
	transition: all 1s;
	h3 {
		color: white;
		text-shadow: 6px 2px 2px gray;
	}
	&:hover {
		cursor: pointer;
		flex-grow: 1;
		transition: all 1s;
	}
`;

function Region({ navigate }) {
	const backgroundArr = [
		region1,
		region2,
		region3,
		region4,
		region5,
		region6,
		region7,
		region8,
		region9,
		region10,
		region11,
		region12,
		region13,
		region14,
		region15,
		region16,
		region17,
	];
	return (
		<Container>
			<h2>지역별 관광안내</h2>
			<StyledRegMain>
				<StyledRegBox>
					{Object.keys(regionObj).map((key, i) => (
						<StyledRegCard
							i={i}
							backgroundArr={backgroundArr}
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
