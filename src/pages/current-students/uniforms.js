import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/***
	Uniforms Page
***/

export default function index() {
	return (
		<div>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Uniforms</title>
			</Helmet>
			<Layout>Uniforms</Layout>
		</div>
	);
}
