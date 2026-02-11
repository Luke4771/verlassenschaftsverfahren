#!/bin/bash
# Synchronisiert Top-Bar, Navbar und Footer von index.html
# in alle articles/*.html und impressum.html.
#
# Verwendung:
#   bash update-nav.sh            # Änderungen durchführen
#   bash update-nav.sh --dry-run  # Nur anzeigen, was sich ändern würde
#
# index.html ist die Quelle. Bei Änderungen an Top-Bar, Navbar oder
# Footer zuerst index.html bearbeiten, dann dieses Skript ausführen.

set -e
cd "$(dirname "$0")"

DRY_RUN="false"
if [ "$1" = "--dry-run" ]; then
    DRY_RUN="true"
fi

export DRY_RUN

python3 << 'PYTHON_SCRIPT'
import re, os, glob

dry_run = os.environ.get("DRY_RUN") == "true"

if dry_run:
    print("=== DRY RUN — keine Dateien werden geändert ===\n")

# index.html einlesen
with open("index.html", "r") as f:
    index_html = f.read()

# --- Top-Bar extrahieren (von Kommentar bis vor Navigationsleiste) ---
m = re.search(
    r'([ \t]*<!-- Obere Kontaktleiste -->.*?)(?=\n\s*<!-- Navigationsleiste -->)',
    index_html, re.DOTALL
)
if not m:
    print("FEHLER: Top-Bar Block nicht gefunden in index.html"); exit(1)
topbar = m.group(1)

# --- Navbar extrahieren (von Kommentar bis </nav>) ---
m = re.search(
    r'([ \t]*<!-- Navigationsleiste -->.*?</nav>)',
    index_html, re.DOTALL
)
if not m:
    print("FEHLER: Navbar Block nicht gefunden in index.html"); exit(1)
navbar = m.group(1)

# --- Footer extrahieren (von Kommentar bis </footer>) ---
m = re.search(
    r'([ \t]*<!-- Footer -->.*?</footer>)',
    index_html, re.DOTALL
)
if not m:
    print("FEHLER: Footer Block nicht gefunden in index.html"); exit(1)
footer = m.group(1)


def strip_home_id(block):
    """Entfernt id='home' — gehört nur auf index.html."""
    return re.sub(r'\s+id="home"', '', block)


def adjust_for_articles(block):
    """Pfade für articles/*.html anpassen (../ hinzufügen)."""
    block = strip_home_id(block)
    block = block.replace('href="#', 'href="../index.html#')
    block = block.replace('href="index.html', 'href="../index.html')
    block = block.replace('href="impressum.html', 'href="../impressum.html')
    block = block.replace('href="datenschutz.html', 'href="../datenschutz.html')
    block = block.replace('href="glossary.html', 'href="../glossary.html')
    block = block.replace('src="images/', 'src="../images/')
    block = block.replace('src="js/', 'src="../js/')
    return block


def adjust_for_impressum(block):
    """Anker-Links für impressum.html anpassen."""
    block = strip_home_id(block)
    block = block.replace('href="#home', 'href="index.html#home')
    block = block.replace('href="#wichtige-themen', 'href="index.html#wichtige-themen')
    block = block.replace('href="#faq', 'href="index.html#faq')
    block = block.replace('href="#kontakt', 'href="index.html#kontakt')
    return block


def replace_section(content, comment_marker, end_tag, new_block):
    """Ersetzt HTML-Abschnitt zwischen Kommentar-Marker und End-Tag."""
    pattern = re.compile(
        r'[ \t]*' + re.escape(comment_marker) + r'.*?' + re.escape(end_tag),
        re.DOTALL
    )
    return pattern.subn(new_block, content, count=1)


def update_file(filepath, new_topbar, new_navbar, new_footer):
    """Aktualisiert Top-Bar, Navbar und Footer in einer Datei."""
    with open(filepath, "r") as f:
        content = f.read()

    original = content

    # Top-Bar: von <!-- Obere Kontaktleiste --> bis zum schließenden </div> des .top-bar
    tp = re.compile(r'[ \t]*<!-- Obere Kontaktleiste -->.*?</div>\s*</div>', re.DOTALL)
    content = tp.sub(new_topbar, content, count=1)

    # Navbar: von <!-- Navigationsleiste --> bis </nav>
    content, _ = replace_section(content, "<!-- Navigationsleiste -->", "</nav>", new_navbar)

    # Footer: von <!-- Footer --> bis </footer>
    content, _ = replace_section(content, "<!-- Footer -->", "</footer>", new_footer)

    if content == original:
        print(f"  Keine Änderungen: {filepath}")
        return

    if dry_run:
        print(f"  Würde aktualisieren: {filepath}")
    else:
        with open(filepath, "w") as f:
            f.write(content)
        print(f"  Aktualisiert: {filepath}")


# --- Artikel aktualisieren ---
print("Artikel aktualisieren...")
art_topbar = adjust_for_articles(topbar)
art_navbar = adjust_for_articles(navbar)
art_footer = adjust_for_articles(footer)

for filepath in sorted(glob.glob("articles/*.html")):
    update_file(filepath, art_topbar, art_navbar, art_footer)

# --- Impressum aktualisieren ---
print("\nImpressum aktualisieren...")
imp_topbar = adjust_for_impressum(topbar)
imp_navbar = adjust_for_impressum(navbar)
imp_footer = adjust_for_impressum(footer)
update_file("impressum.html", imp_topbar, imp_navbar, imp_footer)

# --- Datenschutz aktualisieren ---
print("\nDatenschutz aktualisieren...")
update_file("datenschutz.html", imp_topbar, imp_navbar, imp_footer)

# --- Glossar aktualisieren ---
print("\nGlossar aktualisieren...")
update_file("glossary.html", imp_topbar, imp_navbar, imp_footer)

print("\nFertig.")
PYTHON_SCRIPT
