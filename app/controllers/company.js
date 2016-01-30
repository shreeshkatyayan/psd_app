
module.exports = function (db, utils) {
    
  /********
   *COMPANY *
   ********/
  return {
    list: function (req, res) {
    var company = require('../dummy/company');
    res.json(company);
    },

    show: function(req,res) {
      var project = require('../dummy/project');
      res.json(project);
    },

    showall: function(req,res) {
      var companies = require('../dummy/allcompany');
      res.json(companies);
    },

    save: function(req,res) {
      new db.Company(req.body).save(function (err, user) {
        if(err) {
          console.log(err);
        }
        res.json(user);
      })
    },

    search: function (req, res) {
    db.Company.find({ 'name': {'$regex': new RegExp("^" + req.body.name.toLowerCase(), "i")}}, function (err, company) {
      if(err) {
        console.log(err)
      }
      res.json(company || [])
    })
    }
  }
}
