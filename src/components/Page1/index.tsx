import React from "react";
import logo from "../../logo.svg"
// import { Provider, inject } from 'mobx-react';

class Page extends React.Component {
	render() {
		return (
			<div className="flex h-screen items-center justify-center bg-gray-800" >
				<img className="App-logo w-1/4" src={logo} />
				<h1 className="text-gray-100">Page 1</h1>
			</div>
		);
	}
}

export default Page;
