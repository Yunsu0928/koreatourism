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

const StyledDropDesign = styled.select`
	width: 200px;
	padding: 0.8em 0.5em;
	font-family: "GmarketSansMedium";
	background: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg)
		no-repeat 95% 50%;
	border: 1px solid #999;
	border-radius: 0px;
	-webkit-appearance: none;
	-moz-appearance: none;
	appearance: none;
	option {
		background-color: white;
	}
`;

const StyledDropOption = styled.option``;

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

	const onChangeHandler = (e) => {
		setValue(e.target.value);
	};

	// TODO: 2.검색어 3. 페이지네이션

	return (
		<Container>
			<h2>키워드별 관광 리스트</h2>
			<StyledKeyMain>
				<StyledKeyTitleBox>
					<StyledKeyTitle>{type}</StyledKeyTitle>
				</StyledKeyTitleBox>
				<StyledDropMenu>
					<StyledDropDesign name="지역별" onChange={onChangeHandler}>
						{Object.keys(regionObj).map((key) => (
							<option key={key} value={key}>
								{key}
							</option>
						))}
					</StyledDropDesign>
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
