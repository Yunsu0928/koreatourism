import styled from "styled-components";

import { keywordObj } from "../data/keywordObj";

import key1 from "../asset/keyword/key1.jpeg";
import key2 from "../asset/keyword/key2.jpeg";
import key3 from "../asset/keyword/key3.jpeg";
import key4 from "../asset/keyword/key4.jpeg";
import key5 from "../asset/keyword/key5.jpeg";
import key6 from "../asset/keyword/key6.jpeg";
import key7 from "../asset/keyword/key7.jpeg";

const Container = styled.div`
	padding: 60px;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	font-family: "GmarketSansMedium";
	color: ${(props) => props.theme.fontColor2};
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
	justify-content: center;
	align-items: center;
	width: 80%;
	height: 100%;
`;

const StyledKeyCard = styled.div`
	width: 18%;
	height: 35%;
	margin: 2%;
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

function Keyword({ navigate }) {
	const backgroundArr = [key1, key2, key3, key4, key5, key6, key7];
	return (
		<Container>
			<h2>키워드별 관광안내</h2>
			<StyledKeyMain>
				<StyledKeyBox>
					{Object.keys(keywordObj).map((key, i) => (
						<StyledKeyCard
							i={i}
							backgroundArr={backgroundArr}
							onClick={() => {
								navigate(`/keyword/list?type=${key}`);
							}}
						>
							<h3>{key}</h3>
						</StyledKeyCard>
					))}
				</StyledKeyBox>
			</StyledKeyMain>
		</Container>
	);
}

export default Keyword;
