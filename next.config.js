module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      "/": { page: "/" },
      "/posts/lets-party": {
        page: "/posts/[slug]",
        query: { slug: "lets-party" },
      },
      "/posts/some-food-for-thought": {
        page: "/posts/[slug]",
        query: { slug: "some-food-for-thought" },
      },
    };
  },
};
