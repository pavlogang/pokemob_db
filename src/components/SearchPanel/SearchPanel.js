import React from "react";
import { Col, Row, Container } from "reactstrap";

import "../SearchPanel/SearchPanel.css";

const SearchPanel = (props) => {
	return (
	<Container>	
		<input type="text" placeholder="Enter your desired name" className="search" onChange={props.onChange} />
	</Container>
	)
};

export default SearchPanel;
