import AnimatedNameClient from "../components/AnimatedNameClient";
import { homeLinks } from "../data/site";

function GithubIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M12 2C6.48 2 2 6.58 2 12.22c0 4.5 2.87 8.31 6.84 9.66.5.09.68-.22.68-.49 0-.24-.01-1.04-.01-1.89-2.78.62-3.37-1.21-3.37-1.21-.45-1.18-1.11-1.49-1.11-1.49-.91-.64.07-.62.07-.62 1 .07 1.53 1.06 1.53 1.06.9 1.58 2.35 1.12 2.92.86.09-.67.35-1.12.63-1.38-2.22-.26-4.55-1.14-4.55-5.1 0-1.13.39-2.06 1.03-2.79-.1-.26-.45-1.32.1-2.75 0 0 .84-.28 2.75 1.06A9.3 9.3 0 0 1 12 6.84c.85 0 1.71.12 2.51.36 1.9-1.34 2.74-1.06 2.74-1.06.55 1.43.2 2.49.1 2.75.64.73 1.03 1.66 1.03 2.79 0 3.97-2.34 4.83-4.57 5.08.36.32.68.94.68 1.91 0 1.38-.01 2.49-.01 2.83 0 .27.18.59.69.49A10.03 10.03 0 0 0 22 12.22C22 6.58 17.52 2 12 2Z"
      />
    </svg>
  );
}

function XIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M18.9 2H22l-6.77 7.74L23.2 22h-6.26l-4.9-7.44L5.53 22H2.4l7.24-8.28L1.8 2h6.42l4.43 6.77L18.9 2Zm-1.1 18h1.73L7.28 3.9H5.43L17.8 20Z"
      />
    </svg>
  );
}

export default function HomePage() {
  return (
    <div className="layout">
      <div className="page-shell home-page-shell">
        <main>
          <AnimatedNameClient />

          <div className="hero-copy">
            <p>
              I study Computer Science at Purdue University. I am broadly interested
              in collective communication, machine learning systems, and
              performance engineering for machine learning.
            </p>

            <p>
              Currently, I do motion planning research at{" "}
              <a href="https://commalab.org/">CoMMA Lab</a> and networking at{" "}
              <a href="https://stygianet.cs.purdue.edu/#">STyGIANet</a>.
              Previously, I developed GPU-accelerated collectives at Argonne
              National Laboratory.
            </p>

            <p>
              This site is where I keep my writing, reading notes, and research
              links in one place.
            </p>
          </div>

          <nav aria-label="Primary">
            <ul className="home-links">
              {homeLinks.map((link, index) => (
                <li key={link.href + link.label}>
                  {index > 0 ? <span>&middot;</span> : null}
                  <a href={link.href}>{link.label}</a>
                </li>
              ))}
            </ul>
          </nav>

          <p className="location-note">Based in West Lafayette, Indiana.</p>
        </main>

        <footer className="home-footer" aria-label="Footer">
          <div className="social-links" role="group" aria-label="Social links">
            <a
              className="social-link"
              href="https://github.com/NiharKod"
              target="_blank"
              rel="noreferrer"
            >
              <GithubIcon />
              <span>GitHub</span>
            </a>
            <a
              className="social-link"
              href="https://x.com/niharkod"
              target="_blank"
              rel="noreferrer"
            >
              <XIcon />
              <span>@niharkod</span>
            </a>
          </div>

          <p className="animation-credit">
            Name animation powered by{" "}
            <a href="https://github.com/rgbmarya/manim-scroll">manim-scroll</a>{" "}
            by Mihir Arya.
          </p>
        </footer>
      </div>
    </div>
  );
}
