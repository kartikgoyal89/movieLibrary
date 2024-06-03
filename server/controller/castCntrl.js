const castModel = require("../model/castModel");

const addCast = async (req, res) => {
  const title = req.body.title;
  const findCast = await castModel.findOne({ title: title });
  if (!findCast) {
    // create a new cast
    const newCast = await castModel.create(req.body);
    res.status(201).json(newCast);
  } else {
    throw new Error("Cast Already Exists!");
  }
};

const getAllCasts = async (req, res) => {
  try {
    const allCasts = await castModel.find();
    res.json(allCasts);
  } catch (error) {
    throw new Error(error);
  }
};

const getACast = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const findCast = await castModel.findById(id);
    res.json(findCast);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCast = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const cast = await castModel.findByIdAndDelete(id);
    res.json({ message: "cast deleted Succesfully!" });
  } catch (error) {
    throw new Error(error);
  }
};

const updateCast = async (req, res) => {
  const { _id } = req.cast;
  try {
    const cast = await castModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(cast);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addCast,
  getAllCasts,
  getACast,
  updateCast,
  deleteCast,
};
