import PageShell from "../../components/PageShell";
import { books, papers, webPages } from "../../data/site";

export const metadata = {
  title: "Reading List - Nihar Kodkani",
};

function ListSection({ title, items }) {
  return (
    <section className="list-block">
      <h2>{title}</h2>
      <ul>
        {items.map((item) => (
          <li key={item.label}>
            {item.href ? <a href={item.href}>{item.label}</a> : item.label}
          </li>
        ))}
      </ul>
    </section>
  );
}

export default function ReadingListPage() {
  return (
    <PageShell>
      <main>
        <h1>Reading List</h1>
        <p className="site-subtitle">
          A running record of books, papers, and pages I have found worth
          keeping around.
        </p>

        <ListSection title="Books" items={books} />
        <ListSection title="Papers" items={papers} />
        <ListSection title="Web Pages" items={webPages} />
      </main>
    </PageShell>
  );
}
