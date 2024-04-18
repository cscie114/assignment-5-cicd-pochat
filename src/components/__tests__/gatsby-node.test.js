// destructure sourceNodes from gatsby-node.js
const { sourceNodes } = require('../../../gatsby-node');

test('API must bring 6 results', async () => {
  // Mock createNode function
  // Mock Documentation: https://jestjs.io/docs/mock-functions
  const createNode = jest.fn(); // createNode comes from gatsby.node.js.

  // Mock createContentDigest function
  const createContentDigest = jest.fn();

  // Call the sourceNodes function
  await sourceNodes({
    actions: { createNode },
    createContentDigest, // Comes from gatsby-node.js
  });

  // Check that createNode was called with exactly  items
  expect(createNode).toHaveBeenCalledTimes(6);
});
