# website

Personal website for vinsri.co.

## Local preview

Run a quick local server from the repo root:

```bash
python3 -m http.server 8080
```

Then open `http://localhost:8080`.

## Deployment (GitHub Pages)

1. Push to `main`.
2. In GitHub repo settings, enable Pages with source `Deploy from a branch`.
3. Choose branch `main` and folder `/ (root)`.
4. Add a `CNAME` file with:

```text
vinsri.co
```

5. In your DNS provider, set:
   - `A` records for `vinsri.co` pointing to GitHub Pages IPs.
   - `CNAME` for `www` pointing to `<your-github-username>.github.io`.
