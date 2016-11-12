import React from 'react';
import ReactDOM from "react-dom";
import ReactPlayer from 'react-player';

export default class VideoContainer extends React.Component {
	
	constructor() {  
		super();
	}
	render() {
	
		return (

			<video ref="video_container" id="videoContent" src="https://s3-eu-west-1.amazonaws.com/onrewind-test-bucket/big_buck_bunny.mp4" type="video/mp4" >{this.props.video_container}</video>	
		)
	}
}
