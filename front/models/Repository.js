const Activity = require('./Activity');
class Repository {
    constructor() {
      this.activities = [];
    }
    getAllActivities() {
      return this.activities;
    }
  
    createActivity(object) {
      const activity = new Activity(object);
      this.activities.push(activity);
    }
  
    deleteActivity(id) {
      this.activities = this.activities.filter((x) => x.id !== id);
    }
  }

//! Lo puedo hacer de esta forma
  module.exports = Repository;

  //! Existe otra forma cuando quiero disponibilizar de un modulo 
  //! varias cosas.
