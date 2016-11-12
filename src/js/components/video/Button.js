import React from 'react';

export default class Button extends React.Component{
	
	constructor(props) {
		super();
		this.state = {
			currentTime : "currentTime",
			playPause:'Pause',
			css : {opacity: 1},
			button : 'icon-play icon-4x'
		}
	}
	handleEnter(e) {

		this.setState({css : {opacity: 1}});
		setTimeout(function() { this.setState({css : {opacity: 0}}); }.bind(this), 2000);
   	
   	}

	render() {
		return (
			<div>
				<i style={this.state.css} class={this.state.button} id="btnPlay" onMouseOver={this.handleEnter.bind(this)}></i>
			</div>
		)
	}
}