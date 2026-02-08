#!/bin/bash
# Aktualisiert die Navbar in allen Artikel-Seiten,
# damit sie mit der index.html übereinstimmt.
# Verwendung: bash update-nav.sh

for file in articles/*.html; do
  # Kontakt -> Beratungstermin CTA
  sed -i '' 's|<li><a href="../index.html#kontakt">Kontakt</a></li>|<li><a href="../index.html#kontakt" class="nav-cta">Beratungstermin</a></li>|g' "$file"
  echo "Aktualisiert: $file"
done

echo "Fertig."
