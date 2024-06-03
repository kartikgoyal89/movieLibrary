const mongoose = require("mongoose");

const castSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    birthDate: {
      type: Date,
    },
    stateOfBirth: {
      type: String,
    },
    photo: {
      type: String,
    },
    featuredMovies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Cast", castSchema);
