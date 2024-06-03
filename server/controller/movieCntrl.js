const movieModel = require("../model/movieModel");

const addMovie = async (req, res) => {
  const title = req.body.title;
  const findMovie = await movieModel.findOne({ title: title });
  if (!findMovie) {
    // create a new movie
    const newMovie = await movieModel.create(req.body);
    res.status(201).json(newMovie);
  } else {
    throw new Error("Movie Already Exists!");
  }
};

const getAllMovies = async (req, res) => {
  try {
    const allMovies = await movieModel.find();
    res.json(allMovies);
  } catch (error) {
    throw new Error(error);
  }
};

const getAMovie = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const findMovie = await movieModel.findById(id);
    res.json(findMovie);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteMovie = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const movie = await movieModel.findByIdAndDelete(id);
    res.json({ message: "movie deleted Succesfully!" });
  } catch (error) {
    throw new Error(error);
  }
};

const updateMovie = async (req, res) => {
  const { _id } = req.movie;
  try {
    const movie = await movieModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(movie);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addMovie,
  getAllMovies,
  getAMovie,
  updateMovie,
  deleteMovie,
};
