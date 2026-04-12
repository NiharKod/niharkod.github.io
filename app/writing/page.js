import PageShell from "../../components/PageShell";
import { posts } from "../../data/site";

export const metadata = {
  title: "Writing - Nihar Kodkani",
};

export default function WritingPage() {
  return (
    <PageShell>
      <main className="list-block">
        <h1>Writing</h1>
        <p className="site-subtitle">
          Notes and essays on systems, ML, and whatever I am learning.
        </p>

        <ul>
          {posts.map((post) => (
            <li key={post.href}>
              <a href={post.href}>
                {post.date} - {post.title}
              </a>
            </li>
          ))}
        </ul>
      </main>
    </PageShell>
  );
}
