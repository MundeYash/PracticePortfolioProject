import React from 'react';
import './Blog.css';
const Blog = () => {
  const articles = [
    { title: "Understanding React Hooks", link: "/blog/react-hooks" },
    { title: "Node.js Best Practices", link: "/blog/nodejs-best-practices" },
    { title: "A Guide to CSS Flexbox", link: "/blog/css-flexbox" },
    { title: "Introduction to MongoDB", link: "/blog/intro-to-mongodb" },
    { title: "Building RESTful APIs with Express.js", link: "/blog/restful-apis-express" },
    { title: "Deploying MERN Applications on Heroku", link: "/blog/deploy-mern-heroku" },
    { title: "JavaScript ES6 Features You Should Know", link: "/blog/javascript-es6-features" },
    { title: "Effective State Management with Redux", link: "/blog/redux-state-management" },
    { title: "Web Accessibility: Best Practices", link: "/blog/web-accessibility" },
    { title: "Getting Started with TypeScript", link: "/blog/getting-started-typescript" },
  ];

  return (
    <div className="blog">
      <h3>Blog</h3>
      {articles.map((article, index) => (
        <div key={index} className="blog-article">
          <a href={article.link}>{article.title}</a>
        </div>
      ))}
    </div>
  );
};

export default Blog;
