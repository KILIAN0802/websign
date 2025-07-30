const { model } = require("mongoose");
const Information = require("../models/Information");
// const { index } = require("./NewController");

class ManageController {
    // [GET] / 
    index(req, res) {
        res.render('home', {
            isHome: true,
          });
    }

   manage(req,res) {
    res.render('manage',{
        isHome: false,
      });
   }
}

module.exports = new ManageController();