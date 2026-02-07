#!/bin/bash
# Aktualisiert die Navbar in allen Artikel-Seiten,
# damit sie mit der index.html übereinstimmt.
# Verwendung: bash update-nav.sh

for file in articles/*.html; do
  sed -i '' 's/>Wichtige Themen</>Themenübersicht</g' "$file"
  echo "Aktualisiert: $file"
done

echo "Fertig."
