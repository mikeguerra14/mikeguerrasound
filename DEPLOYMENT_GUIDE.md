# Deployment Guide

This guide will help you complete the deployment of your Mike Guerra Sound portfolio to the internet using GitHub Pages.

## ✅ What's Already Done

The following has been configured for you:

1. **GitHub Actions Workflow** - A workflow file has been created at `.github/workflows/deploy.yml`
2. **Automated Deployment** - The workflow will automatically deploy your site when changes are pushed to the `main` branch
3. **Updated README** - Documentation has been added with the live website URL

## 🚀 Final Steps to Enable Deployment

To complete the deployment, you need to enable GitHub Pages in your repository settings:

### Step 1: Enable GitHub Pages

1. Go to your repository on GitHub: https://github.com/mikeguerra14/mikeguerrasound
2. Click on **Settings** (top navigation bar)
3. In the left sidebar, click on **Pages** (under "Code and automation")
4. Under **Source**, select **GitHub Actions** from the dropdown menu
5. Click **Save**

That's it! Your website will now be deployed automatically.

### Step 2: Verify Deployment

Once you've merged this PR to the `main` branch:

1. Go to the **Actions** tab in your repository
2. You should see the "Deploy to GitHub Pages" workflow running
3. Wait for it to complete (usually takes 1-2 minutes)
4. Your website will be live at: **https://mikeguerra14.github.io/mikeguerrasound/**

### Step 3: Access Your Live Website

After deployment completes, visit:
- **Live URL:** https://mikeguerra14.github.io/mikeguerrasound/

## 📝 How It Works

- **Automatic Deployment:** Every time you push changes to the `main` branch, GitHub Actions will automatically deploy the updated website
- **Manual Deployment:** You can also manually trigger deployment from the Actions tab
- **No Build Step Needed:** This is a static website, so no build process is required

## 🔧 Troubleshooting

### If the workflow doesn't run:

1. Make sure you've enabled GitHub Pages with "GitHub Actions" as the source
2. Check that the workflow file exists at `.github/workflows/deploy.yml`
3. Ensure you've pushed the changes to the `main` branch

### If you get a 404 error:

1. Wait a few minutes after the first deployment (DNS propagation)
2. Verify that GitHub Pages is enabled in Settings > Pages
3. Check that the workflow completed successfully in the Actions tab

## 🎉 Next Steps

Once deployed, you can:

1. Share your portfolio URL: https://mikeguerra14.github.io/mikeguerrasound/
2. Update content by pushing changes to the `main` branch
3. Monitor deployments in the Actions tab
4. Consider adding a custom domain (optional)

## 📚 Additional Resources

- [GitHub Pages Documentation](https://docs.github.com/en/pages)
- [GitHub Actions Documentation](https://docs.github.com/en/actions)
