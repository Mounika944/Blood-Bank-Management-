const testController = (_req, res) => {
    res.status(200).send({
      message:"welcome to user ",
      success: true,
    });
  };

module.exports = { testController };
  
  