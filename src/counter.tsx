import * as React from "react";

interface CounterProps {
}

interface CounterState {
	value: number;
}

class Counter extends React.Component<CounterProps, CounterState> {
	constructor(props: CounterProps, ctx: CounterState) {
		super(props, ctx);
		this.state = {
			value: 0
		};
	}
	render() {
		return <fieldset>
			<legend>Counter:</legend>
			<h4>{this.state.value}</h4>
			<button onClick={this.onClick.bind(this)}>Count up!!</button>
			<button onClick={this.onClickDown.bind(this)}>Count down!!</button>
		</fieldset>
	}
	public onClick() {
		this.setState({
			value: ++this.state.value
		});
	}
	public onClickDown() {
		this.setState({
			value: --this.state.value
		});
	}
}

export default Counter;