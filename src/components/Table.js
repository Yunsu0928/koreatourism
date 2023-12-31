import styled from "styled-components";

import emptybox from "../asset/empty-box.png";

const StyledTableBox = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: ${(props) => props.theme.mainColor};
`;

const StyledTable = styled.div`
	display: flex;
	justify-content: space-around;
	align-items: center;
	background-color: white;
	width: 100%;
	padding: 1% 15%;
`;

const StyledTablecolumn = styled.div`
	font-size: 20px;
	width: 100%;
`;

function Table({ keywordData, regionData }) {
	return (
		<StyledTableBox>
			<StyledTable>
				<StyledTablecolumn>
					<h4>번호</h4>
				</StyledTablecolumn>
				<StyledTablecolumn>
					<h4>사진</h4>
				</StyledTablecolumn>
				<StyledTablecolumn>
					<h4>관광지명</h4>
				</StyledTablecolumn>
				<StyledTablecolumn>
					<h4>주소</h4>
				</StyledTablecolumn>
			</StyledTable>
			{keywordData?.map((e, i) => (
				<StyledTable>
					<StyledTablecolumn>{i + 1}</StyledTablecolumn>
					<StyledTablecolumn>
						{e.firstimage ? (
							<img src={e.firstimage} width="200px" height="100px" />
						) : (
							<img src={emptybox} width="200px" height="100px" />
						)}
					</StyledTablecolumn>
					<StyledTablecolumn>{e.title}</StyledTablecolumn>
					<StyledTablecolumn>{e.addr1}</StyledTablecolumn>
				</StyledTable>
			))}
			{regionData?.map((e, i) => (
				<StyledTable>
					<StyledTablecolumn>{i + 1}</StyledTablecolumn>
					<StyledTablecolumn>
						{e.firstimage ? (
							<img src={e.firstimage} width="200px" height="100px" />
						) : (
							<img src={emptybox} width="200px" height="100px" />
						)}
					</StyledTablecolumn>
					<StyledTablecolumn>{e.title}</StyledTablecolumn>
					<StyledTablecolumn>{e.addr1}</StyledTablecolumn>
				</StyledTable>
			))}
		</StyledTableBox>
	);
}

export default Table;
