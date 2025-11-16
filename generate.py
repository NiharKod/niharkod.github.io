import pathlib
from datetime import datetime

import markdown
from jinja2 import Environment, FileSystemLoader

# ----- Paths -------------------------------------------------------------

ROOT = pathlib.Path(__file__).parent.resolve()
SRC_DIR = ROOT / "posts_src"    # markdown sources
OUT_DIR = ROOT / "posts"        # generated html posts
TEMPLATES_DIR = ROOT / "templates"

# ----- Jinja2 setup ------------------------------------------------------

env = Environment(loader=FileSystemLoader(str(TEMPLATES_DIR)))
post_template = env.get_template("post.html")
writing_template = env.get_template("writing.html")


# ----- Front matter parser ----------------------------------------------

def parse_front_matter(text: str):
    """
    Very small front-matter parser.

    Expects a file that starts with:

    ---
    key: value
    key2: value2
    ---
    markdown body...

    If the file does NOT start with '---', returns ({}, full_text).
    """
    lines = text.splitlines()
    if not lines or lines[0].strip() != "---":
        # no front matter
        return {}, text

    meta = {}
    i = 1
    while i < len(lines):
        line = lines[i].strip()
        if line == "---":
            break
        if ":" in line:
            key, value = line.split(":", 1)
            meta[key.strip()] = value.strip()
        i += 1

    body = "\n".join(lines[i + 1 :])
    return meta, body


# ----- Build a single post ----------------------------------------------

def build_post(md_path: pathlib.Path):
    raw = md_path.read_text(encoding="utf-8")
    meta, body_md = parse_front_matter(raw)

    # Convert markdown → HTML (fenced code blocks enabled)
    html_content = markdown.markdown(
        body_md,
        extensions=["fenced_code", "tables"],
    )

    title = meta.get("title", md_path.stem)
    date = meta.get("date", "")
    slug = meta.get("slug", md_path.stem)

    OUT_DIR.mkdir(exist_ok=True)
    out_path = OUT_DIR / f"{slug}.html"

    rendered = post_template.render(
        title=title,
        date=date,
        content=html_content,
    )
    out_path.write_text(rendered, encoding="utf-8")
    print(f"Built {out_path.relative_to(ROOT)}")

    # info for writing index
    return {"title": title, "date": date, "slug": slug}


# ----- Build all posts + writing.html -----------------------------------

def build_all():
    if not SRC_DIR.exists():
        raise SystemExit(f"Source directory {SRC_DIR} does not exist")

    posts_meta = []
    for md_file in sorted(SRC_DIR.glob("*.md")):
        posts_meta.append(build_post(md_file))

    # sort newest first by date if available
    def sort_key(p):
        try:
            return datetime.strptime(p["date"], "%Y-%m-%d")
        except Exception:
            return datetime.min

    posts_meta.sort(key=sort_key, reverse=True)

    writing_html = writing_template.render(posts=posts_meta)
    (ROOT / "writing.html").write_text(writing_html, encoding="utf-8")
    print("Rebuilt writing.html")


if __name__ == "__main__":
    build_all()
