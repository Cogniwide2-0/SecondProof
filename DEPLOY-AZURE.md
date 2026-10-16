# Deploy SecondProof to Azure Static Web Apps

This folder is the whole website. No build step is needed.

## Option A — Azure Portal (drag and drop, no Git)
1. Install the SWA CLI once: `npm install -g @azure/static-web-apps-cli`
2. In the Azure Portal: Create a resource → Static Web App → Plan: Free (or Standard for custom auth/SLA) → Deployment source: **Other** → Create.
3. Open the new Static Web App → Overview → **Manage deployment token** → copy the token.
4. From this folder run:
   `swa deploy . --env production --deployment-token <TOKEN>`
5. Open the URL shown on the Overview page (…azurestaticapps.net).

## Option B — GitHub (auto-deploy on every push)
1. Push this folder to a GitHub repository (repository root = this folder).
2. Azure Portal → Create Static Web App → Deployment source: **GitHub** → pick repo and branch.
3. Build details: Build preset **Custom**, App location `/`, API location (empty), Output location (empty).
4. Azure adds a GitHub Actions workflow; every push redeploys.

## Custom domain (secondproof.ai)
Static Web App → Custom domains → Add → follow the TXT/CNAME (or ALIAS for the apex) records at your DNS provider. HTTPS certificates are free and automatic.

## After deploy
- `config.js`: contact email and form mode. Default `formMode: 'email'` (visitors are asked to email you).
  To collect the pilot form instead, create a Formspree form, set `formMode: 'endpoint'` and `formEndpoint: 'https://formspree.io/f/XXXX'`.
- `staticwebapp.config.json`: 404 page, security headers, caching. Netlify files (`_headers`, `netlify.toml`) are ignored by Azure.
- If you change `siteUrl`, also update `sitemap.xml` and `robots.txt`.
