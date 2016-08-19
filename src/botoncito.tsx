import * as React from "react";

interface ButtonProps {
	icon : string;
	caption : string;
	demo?: string ;
	handler : ()=>boolean;
	onCloseRequest? : ()=>void;
}

class Botoncito extends React.Component<ButtonProps,{}> {
	static defaultProps: ButtonProps = {
	  demo: "default",
	  icon: "",
	  caption: "",
	  handler: function(): boolean { return false; },
	  onCloseRequest: function() {
	  	alert("Default CLOSE");
	  }
	}
	constructor(props: ButtonProps) {
		super(props);
	}
	render() {
		var className = "fa " + this.props.icon;
		return (
			<button type="button" className="btn btn-primary" onClick={this.handleClick.bind(this)}>
				<span className={className} /> {this.props.caption} - {this.props.demo}
			</button>
		);
	}

	private handleClick() {
		var shouldClose = this.props.handler();
		if (shouldClose)
		{
			this.props.onCloseRequest();
		}
	}
}

export default Botoncito;