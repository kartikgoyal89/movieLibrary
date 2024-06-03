const crewModel = require("../model/crewModel");

const addCrew = async (req, res) => {
  const title = req.body.title;
  const findCrew = await crewModel.findOne({ title: title });
  if (!findCrew) {
    // create a new crew
    const newCrew = await crewModel.create(req.body);
    res.status(201).json(newCrew);
  } else {
    throw new Error("Crew Already Exists!");
  }
};

const getAllCrews = async (req, res) => {
  try {
    const allCrews = await crewModel.find();
    res.json(allCrews);
  } catch (error) {
    throw new Error(error);
  }
};

const getACrew = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const findCrew = await crewModel.findById(id);
    res.json(findCrew);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteCrew = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const crew = await crewModel.findByIdAndDelete(id);
    res.json({ message: "crew deleted Succesfully!" });
  } catch (error) {
    throw new Error(error);
  }
};

const updateCrew = async (req, res) => {
  const { _id } = req.crew;
  try {
    const crew = await crewModel.findByIdAndUpdate(_id, req.body, {
      new: true,
    });
    res.json(crew);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  addCrew,
  getAllCrews,
  getACrew,
  updateCrew,
  deleteCrew,
};
