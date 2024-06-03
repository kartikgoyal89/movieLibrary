const userModel = require("../model/userModel");

const register = async (req, res) => {
  const email = req.body.email;
  const findUser = await userModel.findOne({ email: email });
  if (!findUser) {
    // create a new user
    const newUser = await userModel.create(req.body);
    res.status(201).json(newUser);
  } else {
    throw new Error("User Already Exists!");
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  const findUser = await userModel.findOne({ email });
  if (findUser && (await findUser.isPasswordMatched(password))) {
    const refreshToken = await generateRefreshToken(findUser?._id);
    const updateUser = await userModel.findByIdAndUpdate(
      findUser?.id,
      { refreshToken: refreshToken },
      { new: true }
    );
    res.cookie("refreshToken", refreshToken, {
      httpOnly: true,
      maxAge: 72 * 60 * 60 * 1000,
    });
    res.json({
      _id: findUser._id,
      firstName: findUser?.firstName,
      lastName: findUser?.lastName,
      email: findUser?.email,
      mobile: findUser?.mobile,
      token: generateToken(findUser?._id),
    });
  } else {
    throw new Error("Invalid Credentials!");
  }
};

const getAllUsers = async (req, res) => {
  try {
    const allUsers = await userModel.find();
    res.json(allUsers);
  } catch (error) {
    throw new Error(error);
  }
};

// GET SINGLE USER
const getAUser = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);

  try {
    const findUser = await userModel.findById(id);
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;
  validateMongoDbId(id);
  try {
    const user = await userModel.findByIdAndDelete(id);
    res.json({ message: "user deleted Succesfully!" });
  } catch (error) {
    throw new Error(error);
  }
};

// UPDATE USER
const updateUser = async (req, res) => {
  const { _id } = req.user;
  try {
    const user = await userModel.findByIdAndUpdate(
      _id,
      {
        firstName: req?.body?.firstName,
        lastName: req?.body?.lastName,
        password: req?.body?.password,
        mobile: req?.body?.mobile,
      },
      { new: true }
    );
    res.json(user);
  } catch (error) {
    throw new Error(error);
  }
};

const logout = async (req, res) => {
  const cookie = req.cookies;
  if (!cookie?.refreshToken) throw new Error("No refresh token in cookies!");

  const refreshToken = cookie.refreshToken;
  const user = await userModel.findOne({ refreshToken });
  if (!user) {
    res.clearCookie("refreshToken", {
      httpOnly: true,
      secure: true,
    });
    return res.sendStatus(204);
  }
  await userModel.findOneAndUpdate({ refreshToken }, { refreshToken: "" });
  res.clearCookie("refreshToken", {
    httpOnly: true,
    secure: true,
  });
  res.sendStatus(204);
};

const getWishlist = async (req, res) => {
  const { _id } = req.user;
  validateMongoDbId(_id);
  try {
    const findUser = await userModel.findById(_id).populate("wishlist");
    res.json(findUser);
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = {
  register,
  login,
  logout,
  updateUser,
  deleteUser,
  getAUser,
  getAllUsers,
  getWishlist,
};
