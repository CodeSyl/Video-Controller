import React from 'react';
import Button from "./Button";
import ReactDOM from "react-dom";

export default class ProgressBar extends React.Component {

	constructor() {
		super();

		this.state = {

			valInput: 0,
			currentTime : "currentTime",
			css : {opacity: 1},
			button : 'icon-play icon-2x'
		}
	}

	handleClickYourTime(e) {

		const inputRange = ReactDOM.findDOMNode(this.refs.inputRange);
		const videoController = document.getElementById('videoContent');
		const progressHtml = ReactDOM.findDOMNode(this.refs.progressHtml);
		const time = videoController.duration * (inputRange.value / 100);

		progressHtml.value =  time;
		videoController.currentTime = Math.round(time);
		this.setState({valInput:""+time+""});
	
	}

	handleFull (e){

		const windowHeight = window.innerHeight;
		const prgBar = ReactDOM.findDOMNode(this.refs.prgBar);
		const fullScreen = ReactDOM.findDOMNode(this.refs.fullScreen);
		const videoController = document.getElementById('videoContent');

		const prctOf = windowHeight * 10 / 100;
		const posistionOfProgressBar = windowHeight - prctOf;
		
		if (!document.fullscreenElement && !document.mozFullScreenElement && !document.webkitFullscreenElement) {
		
			if (document.documentElement.requestFullscreen) {
				videoController.requestFullscreen();
				prgBar.style.width = "100%"
				fullScreen.className = 'fa fa-compress';
				prgBar.style.bottom = "-"+posistionOfProgressBar+"px";
			} else if (document.documentElement.mozRequestFullScreen) {
				videoController.mozRequestFullScreen();
				prgBar.style.width = "100%"
				prgBar.style.zIndex = "2247483647"
				fullScreen.className = 'fa fa-compress';
				prgBar.style.bottom = "-"+posistionOfProgressBar+"px";
			} else if (document.documentElement.webkitRequestFullscreen) {
				
				videoController.webkitRequestFullscreen(Element.ALLOW_KEYBOARD_INPUT);
				prgBar.style.width = "100%"
				fullScreen.className = 'fa fa-compress';
				prgBar.style.bottom = "-"+posistionOfProgressBar+"px";
			}
		} else {
			
			if (document.cancelFullScreen) {
				document.cancelFullScreen();
				prgBar.style.bottom = "43px";
				prgBar.style.width  = "630px"
			} else if (document.mozCancelFullScreen) {
				document.mozCancelFullScreen();
				console.log(prgBar.style.bottom)
				prgBar.style.bottom = "43px";
				prgBar.style.width = "630px"
			} else if (document.webkitCancelFullScreen) {

				document.webkitCancelFullScreen();
				console.dir(prgBar.style)
				prgBar.style.bottom = "43px";
				prgBar.style.width = "630px"

			}
		}
	}

	render() {

		return (
			<div class="row" ref="prgBar" id="progress_bar">
				<div class="one columns" id="contentPlayBtnProgress">
					<a id="playProgBar"><i id="play_pause" style={this.state.css} class={this.state.button}></i></a>
				</div>
				<div class="ten columns">

					<progress ref="progressHtml" id="progressBar" max="100" value="0" ></progress>
					<input ref="inputRange" type="range"  value={this.state.valInput} id="range" onChange={this.handleClickYourTime.bind(this)}
					 class="rangeIn" max="100"/>
				</div>
				<div class="one columns" ><i ref="fullScreen"  id="full_screen" class="icon-resize-full" onClick={this.handleFull.bind(this)} ></i>
				</div>
			</div>
		)
	}

}