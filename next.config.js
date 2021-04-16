
const plasmic = require('@plasmicapp/loader/next');
const withPlasmic = plasmic({
  projects: ['u2nC4PUCbS8VNjci8embFD'] // An array of project ids.
});
module.exports = withPlasmic({
  trailingSlash: true,
  // Your NextJS config.
});
  