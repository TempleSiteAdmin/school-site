import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/***
	Page showing the process.
  Data pulled from Contentful
***/

export default function WhyTBS() {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>The Process</title>
			</Helmet>
			The Process
			{/* MAKE QUERY FROM CONTENTFUL */}
		</Layout>
	);
}
