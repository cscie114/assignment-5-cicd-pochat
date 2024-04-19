
exports.handler = async () => {

  const data = { hello: 'Mario, you made a serverless function! ;) '};

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
