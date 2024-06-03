const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    releaseDate: {
      type: Date,
      required: true,
    },
    genres: [String],
    synopsis: {
      type: String,
      required: true,
    },
    cast: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Cast",
      },
    ],
    crew: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Crew",
      },
    ],
    ratings: [
      {
        rating: Number,
        postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    reviews: [
      {
        review: String,
        postedBy: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
      },
    ],
    poster: {
      type: String,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Movie", movieSchema);
