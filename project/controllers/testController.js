const testUserController = (req, res) => {
  try {
    res.status(200).send("<h1>Test user Data</h1>");
  } catch (error) {
    console.log("error In Test API", error);
  }
};

// export
module.exports = { testUserController };
