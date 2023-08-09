import styled from "styled-components";

import { keywordObj } from "../data/keywordObj";

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
	background-color: white;
	width: 100%;
	padding: 1% 6%;
`;

const StyledTablecolumn = styled.div`
	font-size: 20px;
`;

function Table({ keywordData }) {
	return (
		<StyledTableBox>
			<StyledTable>
				<StyledTablecolumn>번호</StyledTablecolumn>
				<StyledTablecolumn>사진</StyledTablecolumn>
				<StyledTablecolumn>관광지명</StyledTablecolumn>
				<StyledTablecolumn>주소</StyledTablecolumn>
			</StyledTable>
			{keywordData.map((e, i) => (
				<StyledTable>
					<StyledTablecolumn>{i + 1}</StyledTablecolumn>
					<StyledTablecolumn>
						{e.firstimage ? (
							<img src={e.firstimage} width="200px" height="100px" />
						) : (
							<div></div>
							// TODO: 디폴트이미지 찾기
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
