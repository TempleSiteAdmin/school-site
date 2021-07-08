import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/***
	Page showing our administration.
  Data pulled from Contentful
***/

export default function WhyTBS() {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Our Administration</title>
			</Helmet>
			Our Administration
			{/* MAKE QUERY FROM CONTENTFUL */}
		</Layout>
	);
}
