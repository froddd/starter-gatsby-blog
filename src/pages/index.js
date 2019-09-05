import React from "react";
import get from "lodash/get";
import GatsbyLink from "gatsby-link";

const BlogIndex = ({ data }) => {
  const posts = get(data, "allContentfulBlogPost.edges");
  const authors = get(data, "allContentfulAuthor.edges");
  const contributors = get(data, "allContentfulContributor.edges");
  const alsoAuthors = get(data, "allContentfulAlsoAuthor.edges");
  const blogPostWriters = get(data, "allContentfulBlogPostWriter.edges");

  return (
    <div>
      <h1>Home</h1>
      <h2>Posts</h2>
      <ul>
        {posts.map(({ node }) => {
          return (
            <li key={node.slug}>
              <GatsbyLink to={`/${node.slug}/`}>{node.title}</GatsbyLink>
            </li>
          );
        })}
      </ul>
      <hr />
      <h2>Authors</h2>
      <ul>
        {authors.map(({ node }) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
      <hr />
      <h2>Contributors</h2>
      <ul>
        {contributors.map(({ node }) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
      <hr />
      <h2>Also Authors</h2>
      <ul>
        {alsoAuthors.map(({ node }) => (
          <li key={node.name}>{node.name}</li>
        ))}
      </ul>
      <hr />
      <h2>Blog Post Writers</h2>
      <ul>
        {blogPostWriters.map(({ node }) => (
          <li key={node.name}>{node.name}</li>
        ))}
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
          author {
            name
          }
        }
      }
    }
    allContentfulAuthor {
      edges {
        node {
          name
        }
      }
    }
    allContentfulContributor {
      edges {
        node {
          name
        }
      }
    }
    allContentfulAlsoAuthor {
      edges {
        node {
          name
        }
      }
    }
    allContentfulBlogPostWriter {
      edges {
        node {
          name
        }
      }
    }
  }
`;
