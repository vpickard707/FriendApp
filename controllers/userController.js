exports.allAccess = (req, res) => {
    res.status(200).send("Public Content.");
  };
  
exports.userAuth = (req, res) => {
    res.status(200).send("User Content.");
  };