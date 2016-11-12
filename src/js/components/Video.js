import React from "react";
import ReactDOM from "react-dom";
import Button from "./video/Button";
import ProgressBar from "./video/Progress-bar";
import VideoContainer from "./video/Video-container";

export default class Video extends React.Component {
	
	constructor() {
		super();
	}

	componentDidMount(){

		let playClick = 0;
		let inProgress = false;
		const btnPlay = document.getElementById('btnPlay');
		const playPause = document.getElementById('play_pause');
		const video = ReactDOM.findDOMNode(this.refs.videoController);
		const centralBtn = ReactDOM.findDOMNode(this.refs.centralBtn);
		const progressBar = ReactDOM.findDOMNode(this.refs.progressBar);

		function appear() { if( inProgress ){ progressBar.style.opacity = '1'; } };

		function disappear() { if( playClick > 0 ){ progressBar.style.opacity = '0'; } }

	   	function loadingVideo (){

	   		if(video.paused || video.ended){
				
				video.play();
				btnPlay.className = 'icon-pause icon-4x';
				playPause.className = 'icon-pause icon-2x';
	   			
	   			if( !inProgress ){
					setTimeout(function(){
					
						playClick = 1;
						inProgress = true;
						btnPlay.style.opacity = '0';
						progressBar.style.opacity = '0';
					},1000);
				}	
	   		}else{
				video.pause();
				btnPlay.className = 'icon-play icon-4x';
				playPause.className = 'icon-play icon-2x';
			}
		
		}

		function videotiming (){

			const progressBar = document.getElementById('progressBar');
			const range = document.getElementsByClassName('range');
			const percentage = Math.floor((100 / video.duration) * video.currentTime);
			range.value = percentage;
			progressBar.value =  percentage;

		}

		video.addEventListener('mousemove', appear, false);
		video.addEventListener('click', loadingVideo, false);   	
		video.addEventListener('mouseleave', disappear, false);
		playPause.addEventListener('click', loadingVideo, false);   	
		progressBar.addEventListener('mousemove', appear, false);
		video.addEventListener('timeupdate', videotiming, false);
		centralBtn.addEventListener('click', loadingVideo, false);
		progressBar.addEventListener('mouseleave', disappear, false);
	
	}

	render() {	
		return (
			<div class="row">
				<div id="video-and-controller" class="twelve columns">
					<Button ref='centralBtn'/>
					<VideoContainer ref='videoController'/>	
					<ProgressBar ref="progressBar"/>
				</div>
			</div>
			
		);
	}
}