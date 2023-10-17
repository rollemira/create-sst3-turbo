function setCorsHeaders(res: Response) {
  res.headers.set("Access-Control-Allow-Credentials", "true");
  res.headers.set("Access-Control-Allow-Headers", "*");
  res.headers.set("Access-Control-Allow-Methods", "OPTIONS, GET, POST");
  res.headers.set("Access-Control-Allow-Origin", "*");
  res.headers.set("Access-Control-Request-Method", "*");
}

export const handler = () => {
  //req) => {
  const response = new Response(null, {
    status: 204,
  });
  setCorsHeaders(response);
  return response;
};
