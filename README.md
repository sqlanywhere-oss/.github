# .github

The organization profile and shared assets of [sqlanywhere-oss](https://github.com/sqlanywhere-oss).

| Path | What it is |
|---|---|
| `profile/README.md` | The profile shown on the organization's page |
| `assets/sqlanywhere-oss-mark.svg` | The logo |
| `assets/sqlanywhere-oss-mark.png` | The logo at 1024x1024, for the organization avatar |
| `assets/social-preview.png` | The 1280x640 social preview banner |
| `tools/banner/` | Regenerates both PNGs from `banner.html` and the SVG |

To regenerate the PNGs:

    cd tools/banner
    npm install
    npx playwright install chromium
    npm run banner
