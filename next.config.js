module.exports = {
  // export static HTML with `next export`
  output: 'export',
  // set basePath and assetPrefix when deploying to GitHub Pages.
  // Replace 'testing_chess' with your repo name if different.
  basePath: process.env.GITHUB_PAGES ? '/testing_chess' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/testing_chess/' : '',
  // ensure exported pages end with trailing slash (helps with static hosting)
  trailingSlash: true,
};
