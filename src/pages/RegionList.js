import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

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
	.select option {
		background: black;
	}
`;

function RegionList() {
	const [regionData, setRegionData] = useState([]);
	const [value, setValue] = useState("서울");
	const [areacode, setAreaCode] = useState([]);
	const [area, setArea] = useState("");

	const [searchParams, setSearchParams] = useSearchParams();
	const type = searchParams.get("type");

	const serviceKey1 = process.env.REACT_APP_SERVICE_KEYE;

	useEffect(() => {
		fetch(
			`https://apis.data.go.kr/B551011/KorService1/areaCode1?numOfRows=100&MobileOS=ETC&MobileApp=koreatourism&areaCode=${regionObj[type]}&_type=json&serviceKey=${serviceKey1}`
		)
			.then((res) => res.json())
			.then((res) => {
				setAreaCode(res.response.body.items.item);
				setArea(res.response.body.items.item[0].name);
			});
	}, []);

	useEffect(() => {
		fetch(
			`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=10&MobileOS=ETC&MobileApp=koreatourism&_type=json&areaCode=${
				regionObj[type]
			}&sigunguCode=${
				areacode.find((e) => e.name === area)?.rnum
			}&serviceKey=${serviceKey1}`
		)
			.then((res) => res.json())
			.then((res) => {
				// console.log(res.response.body.items.item);
				setRegionData(res.response.body.items.item);
			});
	}, [area, areacode]);

	const onChangeHandler = (e) => {
		setArea(e.target.value);
	};

	// TODO: 1. 스타일 2.검색어 3. 페이지네이션

	return (
		<Container>
			<h2>키워드별 관광 리스트</h2>
			<StyledKeyMain>
				<StyledKeyTitleBox>
					<StyledKeyTitle>{type}</StyledKeyTitle>
				</StyledKeyTitleBox>
				<StyledDropMenu>
					<StyledDropDesign name="지역별" onChange={onChangeHandler}>
						{areacode.map((key) => (
							<option className="option" value={key.name}>
								{key.name}
							</option>
						))}
					</StyledDropDesign>
				</StyledDropMenu>
				<StyledTableTitle>
					<h2>{area}</h2>
					<StyledTableInput placeholder="검색어를 입력하세요" />
				</StyledTableTitle>
				<Table regionData={regionData} />
			</StyledKeyMain>
		</Container>
	);
}

export default RegionList;
