# How to Deploy F9-Tools Portfolio

## 1. Push to GitHub

1.  Initialize Git if you haven't already:
    ```bash
    git init
    git add .
    git commit -m "Initial commit of F9-Tools V2"
    ```
2.  Create a new repository on GitHub (e.g., `f9-tools-portfolio`).
3.  Link your local repo to GitHub:
    ```bash
    git remote add origin https://github.com/YOUR_USERNAME/f9-tools-portfolio.git
    git branch -M main
    git push -u origin main
    ```

## 2. Deploy to Vercel (Recommended)

1.  Go to [Vercel.com](https://vercel.com) and log in.
2.  Click **"Add New..."** -> **"Project"**.
3.  Import your `f9-tools-portfolio` repository from GitHub.
4.  Vercel will auto-detect **Vite**.
    - **Framework Preset:** Vite
    - **Root Directory:** `./`
    - **Build Command:** `npm run build`
    - **Output Directory:** `dist`
5.  Click **Deploy**.

## 3. Verify Deployment

Once deployed, Vercel will give you a live URL (e.g., `https://f9-tools-portfolio.vercel.app`).
Test it on Mobile, Tablet, and Desktop to ensure the responsive layout works perfect.

## 4. Updates

Whenever you want to update the site:

1.  Make changes locally.
2.  `git add .`
3.  `git commit -m "Update details"`
4.  `git push`
    Vercel will automatically re-deploy your new version!
