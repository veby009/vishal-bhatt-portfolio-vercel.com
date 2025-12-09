# Vishal Bhatt — Executive Portfolio (Maroon + Gold)

A recruiter-ready, SEO-optimized, corporate-modern portfolio with hero video, certifications gallery, and contact form.

## Files
- index.html — site structure
- style.css — theme & animations
- script.js — interactivity & gallery
- robots.txt — SEO crawler rules
- sitemap.xml — Google indexing
- schema.json — JSON-LD rich data
- assets/ — portrait.jpg, leadership_fixed.mp4, favicon.ico, og-banner.png, certificates/

## Prepare assets
- assets/portrait.jpg (your photo)
- assets/leadership_fixed.mp4 (H.264/AAC encoded)
- assets/og-banner.png (1200x630 recommended)
- assets/favicon.ico (32x32 or 48x48)
- assets/certificates/*.jpg (as listed)

## Deploy to Vercel
1. Create a new GitHub repo (public), e.g., `vishal-bhatt-portfolio`.
2. Add all files preserving structure.
3. Commit & push to `main`.
4. Go to Vercel → New Project → Import from GitHub → Deploy.
5. Update `robots.txt`, `sitemap.xml`, and `schema.json` with your Vercel domain.

## Deploy to Netlify
1. Zip the folder `vishal-bhatt-portfolio/`.
2. Go to Netlify → Add new site → Deploy manually → Drag-and-drop ZIP.
3. Update `robots.txt`, `sitemap.xml`, and `schema.json` with your Netlify domain.

## Troubleshooting
- Video not playing? Re-encode:
  - Windows PowerShell:
    ```
    ffmpeg -i "leadership.mp4" -vcodec libx264 -acodec aac leadership_fixed.mp4
    ```
- Gallery images not showing? Ensure paths in `script.js` match your filenames.
- OG preview not correct? Use absolute URL to `assets/og-banner.png` post-deploy.

## SEO checklist
- Submit your domain and sitemap to Google Search Console.
- Add the site link to your LinkedIn and email signature.
- Keep titles and descriptions concise and keyword-rich.
