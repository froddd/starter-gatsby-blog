import React from "react";
import get from "lodash/get";
import GatsbyLink from "gatsby-link";

const BlogIndex = () => {
  const posts = get(this, "props.data.allContentfulBlogPost.edges");

  return (
    <div>
      <h1>Home</h1>
      <ul className="article-list">
        {posts.map(({ node }) => {
          return (
            <li key={node.slug}>
              <GatsbyLink to={`/${node.slug}/`} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query BlogIndexQuery {
    allContentfulBlogPost {
      edges {
        node {
          title
          slug
        }
      }
    }
  }
`;
