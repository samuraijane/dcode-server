const mongoose = require('mongoose');

const categorySchema = mongoose.Schema({
  name: {type: String},
  summary: {type: Boolean}
});

categorySchema.methods.apiRepr = function() {
  return {
    id: this._id,
    name: this.name,
    summary: this.summary
  };
}

const Category = mongoose.model('Categories', categorySchema);

module.exports = {Category};
