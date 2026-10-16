# Deploying the SecondProof website

This folder is the complete website. It is plain static files (HTML, CSS and JavaScript). It needs no build step and no server code.

## Before you go live

1. **Domain.** The site assumes `https://secondproof.ai`. If you use another domain, replace it in these files:
   - `config.js` (`siteUrl`)
   - `sitemap.xml`
   - `robots.txt`
   - each page's `<link rel="canonical">` and `og:` tags. A find-and-replace of `https://secondproof.ai` across the folder covers all of them.
2. **Privacy notice.** Fill in the amber `[placeholders]` in `privacy.html` (legal entity, address, hosting and form provider, retention period, date). Have it reviewed by your legal or privacy lead.
3. **Brand logos.** The pack and integration pages show third-party logos (SAP, Oracle, Salesforce, Atlassian, GitHub and others). Most brands require permission and adherence to their logo guidelines before you claim an integration publicly. Until you have that, you can switch to names only: set `window.VF_LOGO = function(){ return ''; }` at the end of `logos.js`.
4. **Pilot form.** In `config.js`, choose how form submissions reach you:
   - `formMode: 'netlify'` (default) works automatically on Netlify. Submissions appear under *Site → Forms*, and you can set an email notification to product@cogniwide.com.
   - `formMode: 'endpoint'` posts JSON to `formEndpoint`, for example a Formspree, Basin or Getform URL, or your CRM's web-to-lead endpoint. Also add that domain to `connect-src` in `_headers`.
   - `formMode: 'email'` turns sending off. Visitors are asked to email you instead.

## Option A: Netlify (easiest, form works out of the box)

1. Sign in at app.netlify.com and choose **Add new site → Deploy manually**.
2. Drag this whole folder (or the zip) onto the page. The site is live in under a minute on a `*.netlify.app` address.
3. Go to **Domain management → Add a domain** and enter `secondproof.ai`. Then, at your DNS provider, add the CNAME record Netlify shows you. HTTPS is issued automatically.
4. Go to **Forms → Form notifications → Email** and enter product@cogniwide.com.

## Option B: Cloudflare Pages

1. Go to dash.cloudflare.com → **Workers & Pages → Create → Pages → Upload assets**.
2. Upload this folder.
3. Go to **Custom domains → Set up a domain** and enter `secondproof.ai`.
4. Set `formMode` to `'endpoint'` with a form service, because Netlify Forms does not run on Cloudflare.

## Option C: Azure Static Web Apps, AWS S3 + CloudFront, or your own web server

Upload the folder contents to the web root and serve `index.html` as the default page and `404.html` as the error page. Copy the security headers in `_headers` into your server or CDN settings. `_headers` itself is read only by Netlify and Cloudflare Pages.

## What's in the folder

| File | Purpose |
|---|---|
| `index.html` … `value.html` | The seven pages |
| `privacy.html`, `404.html` | Privacy notice and not-found page |
| `site.css`, `site.js`, `logos.js` | Shared styles, navigation, animations and logos |
| `config.js` | Site address, contact email and form settings |
| `favicon.svg`, `favicon-32.png`, `apple-touch-icon.png`, `icon-512.png`, `site.webmanifest` | Browser and phone icons |
| `og-image.png` | The image shown when the site is shared on LinkedIn, WhatsApp, Teams or Slack |
| `robots.txt`, `sitemap.xml` | Search engine settings |
| `_headers`, `netlify.toml` | Security headers, caching and the 404 rule |

## After launch

- Submit `https://secondproof.ai/sitemap.xml` in Google Search Console and Bing Webmaster Tools.
- To check the share preview, paste the address into LinkedIn's Post Inspector.
- Optional analytics: Cloudflare Web Analytics and Plausible work without cookies. If you add one, name it in `privacy.html`.

## Before launch: name and domain
- Register **secondproof.ai** (plus .io and .co) and run the trademark search before any public use. The build assumes `https://secondproof.ai`.
- The contact email is still `product@cogniwide.com`. Set up a SecondProof address (for example hello@secondproof.ai) and replace it in `config.js`, `value.html`, `privacy.html` and `site.js`.
