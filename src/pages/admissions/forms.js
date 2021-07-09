import React from "react";
import { Helmet } from "react-helmet";
import Layout from "../../components/Layout";

/***
	Page showing Forms.
  Data pulled from Contentful
***/

export default function Forms() {
	return (
		<Layout>
			<Helmet>
				<meta charSet="utf-8" />
				<title>Forms</title>
			</Helmet>
			Forms
			{/* MAKE QUERY FROM CONTENTFUL */}
		</Layout>
	);
}
