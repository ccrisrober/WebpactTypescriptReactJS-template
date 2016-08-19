import * as React from "react";
import Botoncito from "./botoncito";
import Counter from "./counter";

interface HelloProps {
  name: string;
  data: string;
}

class Hello extends React.Component<HelloProps, {}> {
  render() {
    return <div>
    	<div>Hello, {this.props.name} ({this.props.data})</div>
    	<button type="button" onClick={ this._buttonClick.bind(this) }>Click</button>
      <Botoncito icon="icono" caption="texto" handler={this.f} onCloseRequest={this.closeReq} demo="DEMITO"/>
      <Botoncito icon="icono" caption="texto2" handler={this.f} />
      <Counter />
	</div>;
  }
  _buttonClick(): void {
  	alert("HELLO BUTTON");
  }

  protected f(): boolean {
    return confirm("JAJA");
  }
  protected closeReq() {
    alert("CLOSE");
  }
}

export default Hello;