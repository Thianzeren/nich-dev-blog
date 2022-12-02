import * as React from "react";
import { Link } from "gatsby";
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
  return (
    <div className={container}>
      <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
                Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
                About
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog/git" className={navLinkText}>
                Git
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog/aws-s3-md" className={navLinkText}>
                AWS S3 (MD)
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/blog/fp-md" className={navLinkText}>
                Functional Programming (MD)
            </Link>
          </li>
        </ul>
      </nav>
      <main>
        <h1 className={heading}>{pageTitle}</h1>
        {children}
      </main>
    </div>
  );
};

export default Layout;
