var minDB = require("../module/OracleDB.js");
    



module.exports = router => {
  router.post("/GetIndexFragmentationRatioEx", async (req, res) => {
    const responseBody = await minDB.GetIndexFragmentationRatioEx();

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    res.send(responseBody);
  });
  router.get("/GetIndexList", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    const responseBody = await minDB.GetIndexListEx();
    res.send(responseBody);
  });

  router.post("/GetIndexFragmentationRatioMock", async (req, res) => {
    const responseBody = await minDB.GetIndexFragmentationRatioMock();

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    res.send(responseBody);
  });

  router.get("/GetIndexListMock", async (req, res) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header(
      "Access-Control-Allow-Headers",
      "Content-Type, Authorization, Content-Length, X-Requested-With"
    );
    const responseBody = await minDB.GetIndexListMock();
    res.send(responseBody);
  });

  // router.get('/*', async (req, res) => {
  //     console.log(__dirname)
  //       res.sendFile(path.resolve(__dirname,'..', 'build', 'index.html'));
  // });
};
