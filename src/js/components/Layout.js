require ('./style.css')
require ('./css/normalize.css')
require ('./css/skeleton.css')

import React from "react";
import Video from "./Video";

export default class Layout extends React.Component {
	
	constructor(props) {
	 	super();
		this.state = {};
	}
	render(){
		return (
			<div>
				<div class="container">
					<Video />	
				</div>
			</div>
		)
		
	}
}
	

