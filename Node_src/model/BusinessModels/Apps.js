const mongoose = require('mongoose');

module.exports = function () {
  const App = {
    id: {
      type: String,
      unique: true,
      index: true,
    },
    name: {
      type: String,
      required: true,
    },
    client_id: {
      type: String,
      required: true,
    },
    client_secret: {
      type: String,
      required: true,
    },
    redirect_uri: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
  };
  const AppSchema = new mongoose.Schema(App);

  const AppModel = mongoose.model('App', AppSchema);

  return AppModel;
};
