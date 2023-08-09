import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { keywordObj } from "../data/keywordObj";
import { regionObj } from "../data/regionObj";
import Table from "../components/Table";

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
	flex-direction: column;
	width: 100%;
	height: 100%;
`;

const StyledKeyTitleBox = styled.div`
	display: flex;
`;

const StyledKeyTitle = styled.h2`
	padding-left: 14%;
`;

const StyledDropMenu = styled.div`
	display: flex;
	padding-left: 14%;
	background-color: pink;
`;

const StyledTableTitle = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
`;

const StyledTableInput = styled.input`
	width: 40%;
	height: 30%;
	border: 1px solid gray;
	border-radius: 20px;
	padding: 5px 20px;
	font-size: 15px;
`;

function KeyList() {
	const [keywordData, setKeywordData] = useState([]);
	const [value, setValue] = useState("서울");

	const [searchParams, setSearchParams] = useSearchParams();
	const type = searchParams.get("type");

	const serviceKey1 = process.env.REACT_APP_SERVICE_KEYE;

	useEffect(() => {
		fetch(
			`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=10&MobileOS=ETC&MobileApp=koreatourism&_type=json&areaCode=${regionObj[value]}&cat1=${keywordObj[type]}&serviceKey=${serviceKey1}`
		)
			.then((res) => res.json())
			.then((res) => {
				console.log(res.response.body.items.item[0]);
				setKeywordData(res.response.body.items.item);
			});
	}, [value]);

	// TODO: 1. 드롭다운만들어야해 2. 클릭했을때 데이터 정렬 3. 클릭한 지역명에 맞게 데이터 fetch

	const onChangeHandler = (e) => {
		setValue(e.target.value);
	};

	// TODO: 1. 스타일 2.검색어 3. 페이지네이션

	return (
		<Container>
			<h2>키워드별 관광 리스트</h2>
			{/* 설명이 들어가면 좋을 것 같긴한데 흠... */}
			<StyledKeyMain>
				<StyledKeyTitleBox>
					<StyledKeyTitle>{type}</StyledKeyTitle>
					{/* useSearchParams */}
				</StyledKeyTitleBox>
				<StyledDropMenu>
					<select name="지역별" onChange={onChangeHandler}>
						<option disabled selected>
							지역별
						</option>
						{Object.keys(regionObj).map((key) => (
							<option value={key}>{key}</option>
						))}
					</select>
				</StyledDropMenu>
				<StyledTableTitle>
					<h2>{value}</h2>
					<StyledTableInput placeholder="검색어를 입력하세요" />
				</StyledTableTitle>
				<Table keywordData={keywordData} />
			</StyledKeyMain>
		</Container>
	);
}

export default KeyList;
