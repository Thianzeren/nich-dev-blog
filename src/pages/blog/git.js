// Step 1: Import React
import * as React from "react";
import Layout from "../../components/layout";
import { StaticImage } from "gatsby-plugin-image";
import { Link } from "gatsby";

// Step 2: Define your component
const IndexPage = () => {
  return (
    <Layout pageTitle="Git Basics">
      <Link to="blog/git-md">Git Full Notes Markdown</Link>
      <p align="justify">
        <p>
          Git is the most popular version control system (SCM) in the world. It
          is essential as it maintains versioning for your software and also
          allows for multiple developers to work on the same project. It is also
          a necessary piece for the Continuous Integration / Continuous
          Development Process. Find out more about{" "}
          <a href="https://www.atlassian.com/git/tutorials/what-is-version-control">
            version control system/source control management
          </a>
          .
        </p>

        <p>
          To get started with git you first have to install git, there are
          several ways to install git depending on your OS. Note that the git
          here does not refer to git desktop, it is to be used in your CLI/IDE.
          Find the detailed installation instructions here{" "}
          <a href="https://git-scm.com/book/en/v2/Getting-Started-Installing-Git">
            git installation
          </a>
          .
        </p>

        <p>
          Next, setup a remote repository on any hosting site, usually{" "}
          <a href="https://github.com/">GitHub</a>. These sites help you to host
          your source code and maintain the versioning. Create an account and
          create a new repository or import your current one:
        </p>
        <StaticImage
          alt="GitHub create repo image"
          src="../../images/git/git-create-new-repo.png"
        />

        <p>
          Once you have git installed, you may start using it in your projects.
          If you did not import a repository, you can start the initial set up
          with
          <p>
            <code style={{ background: "papayawhip" }}> git init </code>
          </p>
          It initialize current directory as a new git repository and also
          creates a .git subdirectory containing all git metadata (config etc.)
        </p>

        <p>
          Then link your local repo to the remote repo with
          <p>
            <code style={{ background: "papayawhip" }}>
              git remote add {"<name> <url>"}
            </code>
          </p>
          {"<name>"} in this case is simply an alias to help your refer to your
          remote, you can name it anything but it is usually <b>origin</b>.
          <br />
          {"<url>"} refers to the remote repo's URL which can be found on GitHub
          here:
          <StaticImage
            alt="GitHub find URL"
            src="../../images/git/github-get-url.png"
          />
        </p>

        <p>
          If you would like to import an existing remote repository, you can
          clone it into your local repo with
          <p>
            <code style={{ background: "papayawhip" }}>
              git clone {"<url>"}
            </code>
          </p>
          This would clone the repository stored on that remote url to your
          local machine.
        </p>
        <p>
          You might also want to look into a branching strategy such as Gitflow
          or Trunk Based. I will be covering more of these in another post.
        </p>

        <p>
          With your git set up done, let's move on to the git work flow. A
          generic work flow would go something like this:
          <ol>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>git fetch</code> -
                downloads commits, files and new branches from the remote repo
                into local repo
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>git branch</code>-
                view the current branches and also the branch you are on
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>
                  git checkout {"branch"}
                </code>
                - Switch to the desired branch you want to work on
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>
                  {" "}
                  git merge {"<branch>"}
                </code>{" "}
                - merges the latest changes from the branch
              </p>
            </li>
            <li>
              <p>Resolve any merge conflicts if necessary then Start Coding!</p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>
                  git add {"<file>"} or .{" "}
                </code>{" "}
                - adds the file you have changed to be commited (. refers to all
                changed files in current directory)
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>git commit</code> -
                commits the files you have added, you will be prompted to write
                a message. It is recommended to do multiple micro commits
                whenever you make new minor functional changes.
              </p>
            </li>
            <li>
              <p>
                Before pushing to remote, do another
                <code style={{ background: "papayawhip" }}>git fetch </code> and
                <code style={{ background: "papayawhip" }}>git merge </code> any
                remote changes
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>
                  git push origin {"<branch>"}
                </code>
                - push your commits into the remote repository.
              </p>
            </li>
          </ol>
        </p>
        <p>
          With this workflow, you will be able to maintain your versioning with
          commits, store these versioning in a remote repo for any other
          developers to contribute to it.
        </p>
        <p>
          These are the basics you need to get you started with git, below you
          may find more commands that would be useful for you
          <ul>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>git config -l</code>
                <ul>
                  <li>
                    List git configuration at global or local project level
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>git status</code>
                <ul>
                  <li>
                    displays the state of the working directory and the staging
                    area
                  </li>
                  <li>
                    is branch up to date, Staged changes, Not Staged changes,
                    Untracked files
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>git pull</code>
                <ul>
                  <li>does a git fetch then git merge in one command</li>
                </ul>
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>git diff</code>
                <ul>
                  <li>
                    displays difference among files in current working dir
                  </li>
                </ul>
              </p>
            </li>
            <li>
              <p>
                <code style={{ background: "papayawhip" }}>git log</code>
                <ul>
                  <li>Shows a list of all commit made to repo</li>
                </ul>
              </p>
            </li>
          </ul>
        </p>
        <p>
          For all git commands have options that you may add to it, you may view
          these options here in the{" "}
          <a href="https://git-scm.com/docs">git documentation</a> .
        </p>
        <p>
          I'll be having more articles to cover other topics such as
          <ul>
            <li>
              <b>Branching</b>
            </li>
            <li>
              <b>Gitflow vs Trunk Based</b>
            </li>
            <li>
              <b>git stash</b>
            </li>
            <li>
              <b>git rebase</b>
            </li>
            <li>
              <b>Squashing</b>
            </li>
            <li>
              <b>Cherrypicking</b>
            </li>
          </ul>
        </p>
      </p>
    </Layout>
  );
};

export const Head = () => <title>Git</title>;

// Step 3: Export your component
export default IndexPage;
