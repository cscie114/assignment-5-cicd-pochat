require('dotenv').config()

console.log("process.env.GATSBY_YOUTUBE_API");
console.log(process.env.GATSBY_YOUTUBE_API);

exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from YouTube API at build time
  const result = await fetch(`https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=5&playlistId=UUQeRaTukNYft1_6AZPACnog&key=${process.env.GATSBY_YOUTUBE_API}`)

  console.log("result");
  console.log(result);

  const resultData = await result.json();

  console.log("Result Data:");
  console.log(resultData); // Log resultData

  // If resultData.items is undefined, exit early to avoid the error
  if (!resultData.items) {
    console.error("No items found in result data");
    return;
  }

  // create nodes for each item in the result
  resultData.items.forEach(item => {
    createNode({
      // add necessary fields from the item
      // For example, if you want to include video title and description:
      title: item.snippet.title,
      description: item.snippet.description,
      id: item.id,
      videoId: item.snippet.resourceId.videoId,
      parent: null,
      children: [],
      internal: {
        type: `YoutubeVideo`,
        contentDigest: createContentDigest(item),
      },
    });
  });
};
