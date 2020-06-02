/*------JOIN Controller------*/
export const getJoin = (req, res) => {
  res.render("join", { pageTitle: "Join" });
};

export const postJoin = (req, res) => {
  const {
    body: { name, email, password, password2 },
  } = req;
  if (password == password2) {
    res.redirect("/");
  } else {
    res.status(400);
    res.render("join", { pageTitle: "Join" });
  }
};

/*------LOG IN Controller------*/
export const getLogin = (req, res) => {
  res.render("login", { pageTitle: "Log In" });
};

export const postLogin = (req, res) => {
  res.redirect("/");
};

/*------LOG OUT Controller------*/
export const logout = (req, res) => res.redirect("/");

export const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });
export const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });

export const userDetail = async (req, res) => {
  const {
    params: { id },
  } = req;
  try {
    const user = await User.findById(id).populate("videos");
    res.render("userDetail", { pageTitle: "User Detail", user });
  } catch (error) {
    // req.flash("error", "User not found");
    res.redirect("/");
  }
};
