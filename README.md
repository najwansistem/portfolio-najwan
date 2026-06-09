# Portfolio Najwan Mursyidan

Personal portfolio website for Apple Developer Academy application. Built with React, Vite, React Router DOM, and plain CSS.

## Main Features

- Responsive public portfolio website
- Home, About, Projects, Project Detail, Certificates, Skills, and Contact pages
- Project detail page with interactive screenshot preview
- Certificates page with search and category filter
- 55 certificate PDFs from the original ZIP
- Certificate preview images generated from the PDF files
- Profile photo on Home and About pages
- Fixed Vite local network access using `allowedHosts: true`
- Ready to deploy to Vercel

## Local Setup

Open Command Prompt in the project folder, then run:

```bash
npm install
npm run dev
```

Open:

```text
http://localhost:5173/
```

You can also open the network URL shown by Vite, for example:

```text
http://192.168.1.4:5173/
```

## Production Build

```bash
npm run build
npm run preview
```

## Vercel Deployment

1. Push this project to GitHub.
2. Open Vercel.
3. Import the GitHub repository.
4. Use these settings:
   - Framework Preset: Vite
   - Build Command: npm run build
   - Output Directory: dist
5. Deploy.

## Folder Notes

Project screenshots are stored in:

```text
public/projects
```

Certificate PDFs are stored in:

```text
public/certificates
```

Certificate preview images are stored in:

```text
public/certificates/previews
```

Portfolio content is stored in:

```text
src/data
```

The profile photo is stored in:

```text
public/profile/pasphoto-najwan.jpg
```
