# Entscheidungen – whiteblick-karriere

Unbeaufsichtigter Lauf am 2026-10-02 (Mitarbeiter nicht erreichbar): gebaut mit dem, was die alte
Karriereseite und die Hauptseite hergeben. Jede Annahme steht hier. Was weder Seite noch Mitarbeiter
hergab, ist leer geblieben – nichts erfunden.

| Datum | Entscheidung | Wer | Warum |
|---|---|---|---|
| 2026-10-02 | Projekt `whiteblick-karriere` aus der Vorlage angelegt; Struktur 1:1 von whiteblick-karriere.de, Optik nach CI von www.whiteblick.de | Claude | Standard des Skills karriereseite-2-0, Auftrag des Mitarbeiters |
| 2026-10-02 | Live-Domain bleibt `whiteblick-karriere.de` **ohne www** (so lief die alte Seite); `.htaccess` leitet www → ohne www | Claude (Annahme) | alte Adressen und Google-Index bleiben erhalten |
| 2026-10-02 | Firmenschreibweise überall „WHITEBLICK Dr. Feise + Kollegen“ (Impressum schreibt „WHITEBLICK DR FEISE + KOLLEGEN“, alte Seite mal mit, mal ohne Punkt) | Claude (Annahme) | eine Schreibweise für Seite, JSON-LD und Feed |
| 2026-10-02 | Adresse „Silberburgstr. 122“ (Schreibweise der Hauptseite) | Claude | wie Impressum/Google-Unternehmensprofil |
| 2026-10-02 | Fünf Stellen übernommen: 3 `aktiv` (ZFA Behandlungsassistenz, ZMP/ZMF/DH Prophylaxe, ZFA/ZMP/ZMF Prophylaxe – auf der alten Seite „Neu / ab sofort“), 2 `initiativ` (Ausbildung ZFA 2026, ZMV Abrechnung – auf der alten Seite „Initiativ“) | Claude | Status 1:1 von der alten Startseite |
| 2026-10-02 | Reihenfolge der Stellen wie auf der alten Seite über neues Feld `reihenfolge` in `stellen/*.json`; `bauen.py` sortiert: aktiv zuerst, dann `reihenfolge`, dann Kennung | Claude | die Vorlage sortierte nur alphabetisch (Ausbildung stand vorn) |
| 2026-10-02 | **Kein Gehalt** eingetragen. In den Plugin-Daten der alten Seite stand bei allen fünf Stellen – auch der Ausbildung – 3000–3500 EUR/Monat; auf der Seite nicht sichtbar, sieht nach Vorgabewert aus | Claude | Skill: Gehalt nur mit Freigabe; Zahl ist nicht glaubwürdig |
| 2026-10-02 | Zusatzfragen des alten Formulars übernommen, aber alle **optional** (alt: teils Pflicht): Fortbildungen (Text), Jahre Erfahrung (Auswahl), Ausbildung als ZFA (Ja/Nein), Verfügbarkeit (Auswahl); Azubi-Stelle: Schulabschluss (Auswahl) | Claude | Standard des Skills, jede Pflichtfrage kostet Bewerbungen |
| 2026-10-02 | Formular: ein Feld „Vor- und Nachname“ statt zwei (Vorlage/PHP); Freitext heißt wie früher „Fragen, Anregungen etc.“ | Claude | Vorlage beibehalten, Wortlaut vom Kunden |
| 2026-10-02 | Antwortzeit-Satz: „Wir melden uns in kurzer Zeit bei Dir.“ (aus dem alten Prozess-Text) – kein 48–72-Stunden-Versprechen | Claude | nichts versprechen, was der Kunde nicht gesagt hat |
| 2026-10-02 | Beginn bei `initiativ`-Stellen leer → Seite zeigt „nach Vereinbarung“ (Vorgabe von bauen.py) | Claude | alte Seite nennt keinen Beginn |
| 2026-10-02 | Empfänger aller Stellen `jobs@whiteblick.de`; Absender `bewerbung@whiteblick-karriere.de` (Postfach existiert noch nicht) | Claude (Annahme) | einzige Bewerbungsadresse auf beiden Seiten |
| 2026-10-02 | CI aus dem Theme-CSS der Hauptseite (`child-theme.min.css`, Understrap-Childtheme „Whiteblick“ von Beocondis): Dunkel #44403d, Beige #bdb5aa, Hell #eceae8, Grau #9fa1a7, Grün #899773; Buttons eckig mit dunkler Schrift auf Beige; Überschriften Schnitt 300 | Claude | gemessen, nicht geschätzt |
| 2026-10-02 | Beige #bdb5aa nur für Flächen/Linien, nie als Textfarbe auf Weiß (Kontrast ~2:1) | Claude | Lesbarkeit |
| 2026-10-02 | Schrift „Apex New Web“ in `kunde.json` eingetragen, aber **keine Schriftdateien im Paket** (lizenzpflichtig, Village Type) → Browser fällt auf Helvetica/Arial zurück | Claude | keine Google Fonts, keine Lizenz ohne Freigabe |
| 2026-10-02 | Logo/Favicon sind **Platzhalter-Wortmarken** (Text „WHITEBLICK“), kein nachgezeichnetes Logo. Original: `www.whiteblick.de/wp-content/themes/whiteblick/img/logo_w.svg` (weiß) – dunkle Variante vom Kunden nötig | Claude | Download aus dem Container nicht möglich (Netzsperre), Logos nie nachzeichnen |
| 2026-10-02 | Keine Fotos übernommen (Hero, drei Gründe, Prozess, Galerie): Dateien konnten nicht geladen werden, Rechte nicht geklärt. Hero ist eine ruhige CI-Fläche. Alle Bild-Adressen stehen in `inhalte-quelle.md` | Claude | Skill: Fotos nur mit Rechten |
| 2026-10-02 | Team-Videos: drei MP4 der alten Seite als schlichte Links eingebunden (keine Einbettung fremder Player). Vor dem Livegang nach `assets/video/` kopieren und lokal einbetten | Claude | alte Adressen sterben mit WordPress |
| 2026-10-02 | **FAQ-Abschnitt weggelassen** (Menüpunkt „F.A.Q“ und FAQPage-JSON-LD ebenfalls): Die Fragen und Antworten des Divi-Akkordeons ließen sich nicht maschinell auslesen. Platz ist als HTML-Kommentar in `index.html` markiert | Claude | lieber Lücke als erfundene FAQ |
| 2026-10-02 | Abschnitt „Drei gute Gründe“ und „Dein Ansprechpartner“ an alter Stelle gelassen (nach den Stellen) – keine Umsortierung | Claude | Auftrag „Struktur 1:1“ |
| 2026-10-02 | Gleichstellungshinweis als eigene Seite `rechtliches/gleichstellungshinweis.html` übernommen (Text 1:1) | Claude | gab es auf der alten Seite, Fuß verlinkt ihn |
| 2026-10-02 | Impressum aus Hauptseite + alter Karriereseite zusammengeführt (Kammer, KZV, sechs berufsrechtliche Regelungen mit Links, Schlichtungsstelle). Streitschlichtung ohne Teilnahme-Aussage. **Zur Prüfung durch den Kunden** | Claude | nichts ergänzt, was nirgends stand |
| 2026-10-02 | Datenschutz **neu aus der Vorlage** aufgebaut (Verantwortlicher, Datenschutzbeauftragter Dr. Feise, Löschfrist 6 Monate wie alte Seite; neu: All-Inkl, Formular ohne Speicherung, Matomo cookiefrei). Alte Erklärung nannte Raidboxes, Borlabs, Google Analytics, Meta-Pixel, reCAPTCHA, Maps, Zapier – gibt es auf der 2.0 nicht mehr. Volltext der alten Erklärung konnte nicht 1:1 kopiert werden. **Zur Prüfung durch Kunde/Anwalt** | Claude | Claude ist kein Anwalt |
| 2026-10-02 | Matomo vorgesehen (Standard), `matomo_id` leer → Skript misst nichts, Datenschutz-Absatz steht trotzdem schon drin | Claude | Eintrag folgt beim Livegang |
| 2026-10-02 | Weiterleitungen alter Adressen bereits in `.htaccess` eingetragen (schaden in der Vorschau nicht, GitHub Pages ignoriert sie) | Claude | nichts vergessen beim Umzug |
| 2026-10-02 | Vorlage `stelle.html` angepasst: Menü-Knopf für Handy ergänzt (fehlte – Navigation war unter 880 px unsichtbar), Datenschutz-Haken-Text in `<span>` (brach bei 390 px aus dem Bild), Fuß mit Gleichstellungshinweis | Claude | Render-Prüfung bei 390 px |
| 2026-10-02 | `pruefen.py` grün (0 Fehler, 5 Hinweise „kein Gehalt“), gerendert bei 390 und 1280 px, Screenshots in `doku/screenshots/` | Claude | Pflicht vor dem Hochladen |

## Noch nicht gemacht (braucht den Mitarbeiter / den Kunden)

Siehe Liste „Beim Kunden einsammeln“ in `../antwort.md` bzw. unten in der README. Kurz: Logo, Fotos,
Schriftlizenz, FAQ-Texte, Gehaltsfreigabe, Postfach für den Absender, Prüfung Impressum/Datenschutz,
Matomo-ID, GitHub-Projekt anlegen und pushen (nur vom Mac), Vorschau-Link an den Kunden.

## 02.10.2026 – Zweiter Durchgang (mit Bildern, Awan)
- Vorgabe von Awan: Die Seite soll aussehen wie die bisherige Karriereseite, nur frischer („Update“) – nicht neu erfunden. Umgesetzt: gleiche Abschnitte, gleiche Reihenfolge, gleiche Fotos an denselben Stellen, Poppins, Beige/Hell/Creme, schräge Flächen, grüne/orange Stellen-Marken.
- Bilder, Icons, Logos (38 Dateien), Videos (3) und Schriften stammen von whiteblick-karriere.de – von der AO Consulting selbst dort eingebaut, Rechte liegen beim Kunden. Originale in `Whiteblick Karriereseite/_quelle/` (Schreibtisch, nicht im Projekt).
- Videos auf 720p verkleinert (5–10 MB statt 19–51 MB), liegen in `website/assets/video/`. Poster-Bilder aus den alten Vorschaubildern.
- Schrift Poppins (OFL, frei) lokal in `assets/fonts/`, statt „Apex New Web“ der Hauptseite: Die Karriereseite nutzt seit jeher Poppins, das bleibt.
- FAQ (7 Fragen) jetzt vollständig aus dem Divi-Akkordeon übernommen.
- Weiter offen (Kunde): Gehaltsangaben, Datenschutz-/Impressumsprüfung, Postfach bewerbung@whiteblick-karriere.de, Google-/Indeed-Konten.

## 02.10.2026 – CI der Hauptseite (Awan)
- Vorgabe: Die Karriereseite muss aussehen wie www.whiteblick.de – gleiche Schrift, Größen, Farben, Knöpfe, Kopf, Fuß. Besucher sollen die Karriereseite als Bereich der Hauptseite empfinden.
- Umgesetzt: Apex New Web (Light/Book/Medium, woff aus dem Theme der Hauptseite), Text 17.6px/1.8 #44403d, Überschriften 45px light #605955, Dachzeilen in fetten Versalien, Knöpfe beige mit weißen Versalien und 4px Sperrung, „—— MEHR ERFAHREN“-Textlinks, eckige Fotos ohne Schatten, graue Flächen #eceae8 mit Schräge, große helle Ziffern im Prozess, schmale weiße Kopfzeile mit Versalien-Menü und unterstrichenen Textlinks rechts, beiger Fuß.
- Offen: Schriftlizenz „Apex New Web“ für die Domain whiteblick-karriere.de beim Kunden/der Agentur der Hauptseite bestätigen lassen (Datei stammt aus dem Theme der Hauptseite).
