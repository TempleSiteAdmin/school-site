// import React from "react";
// import { graphql } from "gatsby";
// import { Helmet } from "react-helmet";
// import Layout from "../../components/Layout";
// import Navbar from "../../components/Navbar";

// const ComponentName = ({ data }) => {
// 	const faqData = data.allContentfulFaQs.nodes;
// 	return (
// 		<div className="mx-auto bg-gray-100">
// 			<Helmet>
// 				<meta charSet="utf-8" />
// 				<title>FAQs</title>
// 			</Helmet>
// 			<Navbar />

// 			<h2 className=" w-full text-center md:w-1/3 text-3xl font-extrabold leading-9 m-auto">
// 				Frequently-asked questions
// 			</h2>

// 			{faqData.map((faq) => {
// 				return (
// 					<div className="px-4 py-0">
// 						<div className="mx-auto max-w-6xl flex flex-col md:flex-row">
// 							<dl className="w-full md:w-2/3 mx-auto">
// 								<dt className="mb-4">
// 									<h3 className="text-xl font-semibold">{faq.question}</h3>
// 								</dt>
// 								<dd className="mb-16">
// 									<p>{faq.answer.answer}</p>
// 								</dd>
// 							</dl>
// 						</div>
// 					</div>
// 				);
// 			})}
// 		</div>
// 	);
// };

// export const query = graphql`
// 	{
// 		allContentfulFaQs {
// 			nodes {
// 				question
// 				answer {
// 					answer
// 				}
// 			}
// 		}
// 	}
// `;

// export default ComponentName;

import React from "react";

export default function FAQ() {
	return <div>FAQ</div>;
}
