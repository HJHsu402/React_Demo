import React, { Component } from "react"
import { hot } from "react-hot-loader/root"
import "./App.css"
import Header from "./component/Header"
import Footer from "./component/Footer"
import Main from "./component/Main"
import Counter from "./component/Counter"
class App extends Component {
	render() {
		return (
			<div className="App">
				<Header></Header>
				<Main></Main>
				<Footer name="© Web Knowledge Extraction (WKE) Lab."></Footer>
			</div>
		)
	}
}

export default hot(App)
