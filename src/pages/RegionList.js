import styled from "styled-components";
import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";

import { regionObj } from "../data/regionObj";
import Table from "../components/Table";
import SearchTable from "../components/SearchTable";

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
	justify-content: space-between;
	margin-left: 14%;
	margin-right: 14%;
	padding: 40px;
	background: #f5f5f5;
	border: 4px dashed ${(props) => props.theme.mainColor};
`;

const StyledTableTitle = styled.div`
	display: flex;
	justify-content: baseline;
	align-items: center;
	margin-left: 250px;
`;

const StyledTableInput = styled.input`
	width: 40%;
	height: 100%;
	border: 1px solid #aaa;
	border-radius: 20px;
	padding: 5px 20px;
	font-size: 15px;
`;

const StyledDropDesign = styled.select`
	width: 200px;
	background-color: #fff;
	padding: 0.8rem 2rem;
	font-family: GmarketSansMedium;
	background-image: url(https://farm1.staticflickr.com/379/19928272501_4ef877c265_t.jpg);
	border: 1px solid rgb(153, 153, 153);
	border-radius: 20px;
	appearance: none;
	background-repeat: no-repeat;
	background-position: 160px 1px;
	option {
		background-color: white;
	}
`;

const StyledPagination = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 3% 0%;
	width: 100%;
`;

const StyledPointBtn = styled.button`
	width: 3%;
	font-size: 15px;
	border: none;
	background-color: ${(props) => props.theme.mainColor};
	color: ${(props) => props.theme.fontColor};
	cursor: pointer;
	padding: 0.2% 1%;
`;

const StyledPageBtn = styled.button`
	width: 3%;
	font-size: 15px;
	border: none;
	background-color: white;
	color: ${(props) => props.theme.fontColor};
	cursor: pointer;
	padding: 1%;
	margin-right: 0.1%;
`;

function RegionList() {
	const [regionData, setRegionData] = useState([]);
	const [value, setValue] = useState("서울");
	const [areacode, setAreaCode] = useState([]);
	const [area, setArea] = useState("");

	// 검색기능
	const [search, setSearch] = useState("");
	const [searchResults, setSearchResults] = useState([]);
	const handleSearch = (event) => {
		const value = event.target.value;
		setSearch(value);

		if (value === "") {
			setSearchResults([]);
		} else {
			const results = regionData.filter((item) => item.addr1.includes(value));
			const results2 = regionData.filter((item) => item.title.includes(value));
			const searchArr = [...results, ...results2];
			setSearchResults(searchArr);
		}
	};

	// 페이지네이션
	const [totalCount, setTotalCount] = useState(1); // 총 (각지역별) 데이터 수
	// fetch데이터에서 받아올 pageNo를 넣는다. = 현재페이지
	const [pageNo, setPageNo] = useState();
	const paginate = (number) => setPageNo(number);

	const [searchParams, setSearchParams] = useSearchParams();
	const type = searchParams.get("type");

	const serviceKey1 = process.env.REACT_APP_SERVICE_KEYE;

	const initPageNum =
		Math.ceil(totalCount / 10) > 11 ? 10 : Math.ceil(totalCount / 10);
	const [pageNumbers, setPageNumbers] = useState([1]); // map돌릴 페이지 배열

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
			`https://apis.data.go.kr/B551011/KorService1/areaBasedList1?numOfRows=10&pageNo=${pageNo}&MobileOS=ETC&MobileApp=koreatourism&_type=json&areaCode=${
				regionObj[type]
			}&sigunguCode=${
				areacode.find((e) => e.name === area)?.rnum
			}&serviceKey=${serviceKey1}`
		)
			.then((res) => res.json())
			.then((res) => {
				setTotalCount(res.response.body.totalCount);
				setRegionData(res.response.body.items.item);
			});
	}, [area, areacode, pageNo]);

	useEffect(() => {
		setPageNumbers(new Array(initPageNum).fill().map((_, i) => i + 1));
	}, [totalCount]);

	const onChangeHandler = (e) => {
		setArea(e.target.value);
	};

	return (
		<Container>
			<h2>지역별 관광 리스트</h2>
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
					<StyledTableInput
						type="text"
						placeholder="검색어를 입력하세요"
						value={search}
						onChange={handleSearch}
					/>
				</StyledDropMenu>
				<StyledTableTitle>
					<h2>{area}</h2>
				</StyledTableTitle>
				{!search ? (
					<Table regionData={regionData} />
				) : (
					<SearchTable searchResults={searchResults} />
				)}
				<StyledPagination>
					<StyledPointBtn
						onClick={() => {
							if (pageNo === 1) return;
							if (pageNo % 10 === 1) {
								const newArr = [];
								for (let i = pageNo - 10; i <= pageNo - 1; i++) {
									newArr.push(i);
								}
								setPageNumbers(newArr);
							}
						}}
					>
						&lt;
					</StyledPointBtn>
					{pageNumbers.map((number) => (
						<StyledPageBtn
							onClick={() => {
								paginate(number);
							}}
						>
							{number}
						</StyledPageBtn>
					))}
					<StyledPointBtn
						onClick={() => {
							if (pageNo === Math.ceil(totalCount / 10)) return;
							setPageNo(Math.abs(pageNo + 1));
							if (pageNo % 10 === 0) {
								const newArr = [];
								for (let i = pageNo + 1; i <= pageNo + 10; i++) {
									if (i > Math.ceil(totalCount / 10)) break;
									newArr.push(i);
								}
								setPageNumbers(newArr);
							}
						}}
					>
						&gt;
					</StyledPointBtn>
				</StyledPagination>
			</StyledKeyMain>
		</Container>
	);
}

export default RegionList;
