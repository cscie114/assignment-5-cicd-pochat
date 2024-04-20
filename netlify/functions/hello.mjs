
exports.handler = async () => {

  const data = { hello: 'Mario, you ran a serverless function! ;) '};

  return {
    statusCode: 200,
    body: JSON.stringify(data),
  };
};
