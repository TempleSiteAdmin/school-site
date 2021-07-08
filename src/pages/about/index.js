import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

export default function index() {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>About TBS</title>
			</Helmet>
			About Page
		</Layout>
	);
}
