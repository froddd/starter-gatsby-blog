import React from "react";
import get from "lodash/get";
import GatsbyLink from "gatsby-link";

const BlogPostTemplate = ({ data }) => {
  const post = get(data, "contentfulBlogPost");

  return (
    <div>
      <h1>{post.title}</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
      <GatsbyLink to="/">Go back</GatsbyLink>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
      author {
        name
      }
    }
  }
`;
