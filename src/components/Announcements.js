import React from "react";
import { StaticQuery, graphql } from "gatsby";

/***
	Announcements component to display all announcements pulled from Contentful
***/

export default function Announcements() {
	return <div>Announcements</div>;
}

// export default function Announcements() {
// 	return (
// 		<StaticQuery
// 			query={graphql`
// 				{
// 					allContentfulAnnouncement(sort: { order: DESC, fields: createdAt }) {
// 						nodes {
// 							title
// 							body {
// 								childMarkdownRemark {
// 									html
// 								}
// 							}
// 						}
// 					}
// 				}
// 			`}
// 			render={(data) => {
// 				const announcements = data.allContentfulAnnouncement.nodes;
// 				return (
// 					<div className="announcement-container">
// 						<h1 className="announcement-header">Announcements</h1>
// 						{announcements.map((announcement) => (
// 							<div>
// 								<h1 className="announcement-title">{announcement.title}</h1>
// 								<p
// 									className="announcement-body"
// 									dangerouslySetInnerHTML={{
// 										__html: announcement.body.childMarkdownRemark.html,
// 									}}
// 								></p>
// 							</div>
// 						))}
// 					</div>
// 				);
// 			}}
// 		/>
// 	);
// }
