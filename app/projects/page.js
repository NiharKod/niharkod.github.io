import PageShell from "../../components/PageShell";

export const metadata = {
  title: "Projects - Nihar Kodkani",
};

export default function ProjectsPage() {
  return (
    <PageShell>
      <main>
        <h1>Projects</h1>
        <p className="site-subtitle">A few things I have built or explored.</p>

        <section className="project-list">
          <article className="card">
            <div className="card-content">
              <h3>Project One</h3>
              <p>
                A brief one- or two-sentence description of what Project One
                does.
              </p>
              <div className="card-links">
                <a className="card-button" href="/projects/project1">
                  Learn more
                </a>
                <a
                  className="github-button"
                  href="https://github.com/niharkod/project1"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>

          <article className="card">
            <div className="card-content">
              <h3>Project Two</h3>
              <p>
                A brief one- or two-sentence description of what Project Two
                does.
              </p>
              <div className="card-links">
                <a className="card-button" href="/projects/project2">
                  Learn more
                </a>
                <a
                  className="github-button"
                  href="https://github.com/niharkod/project2"
                  target="_blank"
                  rel="noreferrer"
                >
                  GitHub
                </a>
              </div>
            </div>
          </article>
        </section>
      </main>
    </PageShell>
  );
}
