import React from "react";

const BlogPostTemplate = props => {
  const post = get(this.props, "data.contentfulBlogPost");

  return (
    <div>
      <h1>Blog post: {post.title}</h1>
      <pre>{JSON.stringify(post, null, 2)}</pre>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      title
      slug
    }
  }
`;
