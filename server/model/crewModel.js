const mongoose = require("mongoose");

const crewSchema = new mongoose.Schema(
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
    Movies: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Movie",
      },
    ],
  },
  { timestamps: true }
);

module.exports = mongoose.model("Crew", crewSchema);
