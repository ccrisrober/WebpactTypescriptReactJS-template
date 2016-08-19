/// <reference path="../typings/tsd.d.ts" />

import * as React from "react";
import * as ReactDOM from "react-dom";

import * as d3 from "d3";
import * as _ from "lodash";
import * as $ from "jquery";

import Hello from "./Hello";

ReactDOM.render(
	<Hello name="Willson" data="[1, 2, 3, 4]" />,
	document.getElementById("root")
);

$(() => {
	// jQuery example
	$("#jq").html("Hello from jQuery");

	var data = ["v1", "v2", "v3"];
	data = _.dropRight(data, 1);

	// D3 example
	d3.select("body")
		.selectAll("h1")
			.data(data)
			.enter()
				.append("h1")
					.text(function(d) {
						return d;
					});
})

// http://realfiction.net/2015/08/27/Porting-a-react-application-to-typescript/