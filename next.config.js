module.exports = {
  // produce a fully exported static site with `next build`
  output: 'export',
  // set basePath/assetPrefix when GITHUB_PAGES=1 (GitHub Actions sets this env)
  // Replace 'testing_chess' with your repo name if different
  basePath: process.env.GITHUB_PAGES ? '/testing_chess' : '',
  assetPrefix: process.env.GITHUB_PAGES ? '/testing_chess/' : '',
  // ensure exported pages end with trailing slash (helps with static hosting)
  trailingSlash: true,
};
