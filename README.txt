ASN MEMBERSHIP CARDS — ONE LINK + DIFFERENT PASSWORDS

HOW IT WORKS
Everyone uses the SAME GitHub Pages link.
Each member enters their own password and the matching card appears.

FILES
index.html
style.css
script.js
cards/
  member001-front.png
  member001-back.png
  member002-front.png
  member002-back.png
  ...

ADDING CARDS
Put your PNG files inside the cards folder.
Use exactly:
member001-front.png
member001-back.png
member002-front.png
member002-back.png

DEMO PASSWORDS
ASN001 -> member001
ASN002 -> member002
ASN003 -> member003

SECURITY WARNING
GitHub Pages is a public static website. JavaScript password protection is NOT
real secure authentication. A technically skilled person can inspect the code,
and the PNG files may still be directly accessible if their filenames are known.

For ordinary membership-card sharing this can be a convenient access gate.
For genuinely private cards, use server-side authentication or encrypted
assets (for example, a server/Cloudflare Worker that verifies the password
before serving the card).

BEST FREE IMPROVEMENT
Use random, non-guessable image filenames and do not put personal data in
the filenames. This makes direct guessing harder, but it still does not turn
GitHub Pages into a secure private system.

BEFORE PUBLISHING
1. Change the demo passwords.
2. Upload the PNGs into cards/.
3. Upload index.html, style.css, script.js and cards/ to GitHub.
4. Keep GitHub Pages on main / (root).
5. Share only the single Pages link.
