import React from "react";
import { StaticQuery, graphql } from "gatsby";

/***
	Component of reasons to send pulled from Contentful

	--------------------------------
	REMOVE THIS COMPONENT AND MAKE PAGE QUERY IN ABOUT/WHY-TBS
	--------------------------------
***/

// const ReasonsToSend = () => (
// 	<StaticQuery
// 		query={graphql`
// 			{
// 				allContentfulReasonsToSend(sort: { fields: reasonNumber, order: ASC }) {
// 					nodes {
// 						reasonNumber
// 						reasonTitle
// 						reasonBody {
// 							reasonBody
// 						}
// 					}
// 				}
// 			}
// 		`}
// 		render={(data) => {
// 			const reasons = data.allContentfulReasonsToSend.nodes;
// 			return (
// 				<div className="reasons-container">
// 					{reasons.map((reason) => (
// 						<div>
// 							<h3 className="reasons-header">
// 								{reason.reasonNumber}. {reason.reasonTitle}
// 							</h3>
// 							<div className="reaons-body">{reason.reasonBody.reasonBody}</div>
// 						</div>
// 					))}
// 				</div>
// 			);
// 		}}
// 	></StaticQuery>
// );

// export default ReasonsToSend;

import React from "react";

export default function ReasonsToSend() {
	return <div>Reasons to Send</div>;
}
