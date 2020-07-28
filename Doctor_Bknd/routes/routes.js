module.exports = app => {
    const treatments = require("../controllers/import_treatments.js");
  
    var router = require("express").Router();
  
      
    router.get("/", treatments.findAll);
     
    router.get("/:id", treatments.findOne);
    
   
    app.use('/api/treatments', router);
  };