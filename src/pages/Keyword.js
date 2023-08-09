import styled from "styled-components";
import { useState, useEffect } from "react";

import KeyList from "./KeyList";
import { keywordObj } from "../data/keywordObj";

const Container = styled.div`
	padding: 60px;
	width: 100vw;
	height: 100vh;
	display: flex;
	flex-direction: column;
	font-family: "GmarketSansMedium";
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
	&:hover {
		cursor: pointer;
	}
`;

function Keyword({ navigate }) {
	return (
		<Container>
			<h2>키워드별 관광안내</h2>
			{/* 설명이 들어가면 좋을 것 같긴한데 흠... */}
			<StyledKeyMain>
				<StyledKeyBox>
					{Object.keys(keywordObj).map((key) => (
						<StyledKeyCard
							onClick={() => {
								navigate(`/keyword/list?type=${key}`);
							}}
						>
							{/* 쿼리파라미터 뒤에물음표들어가는거  */}
							<h3>{key}</h3>
						</StyledKeyCard>
					))}
				</StyledKeyBox>
			</StyledKeyMain>
		</Container>
	);
}

export default Keyword;
