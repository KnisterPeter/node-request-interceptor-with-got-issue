const got = require("got");
const { setupServer } = require("msw/node");

const msw = setupServer();
msw.listen({
  onUnhandledRequest: "bypass",
});

got("http://localhost:65432")
  .then((response) => {
    console.log({ response });
  })
  .catch((e) => {
    console.error("error", e);
  });
