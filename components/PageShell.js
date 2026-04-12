import { navLinks } from "../data/site";

export default function PageShell({ children }) {
  return (
    <div className="layout">
      <div className="page-shell">
        <nav aria-label="Primary">
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        {children}
      </div>
    </div>
  );
}
