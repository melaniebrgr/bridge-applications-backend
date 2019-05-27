const { check } = require("express-validator/check");

exports.create = [
  check("id")
    .exists()
    .isNumeric(),
  check("first_name")
    .exists()
    .isAlpha(),
  check("last_name")
    .exists()
    .isAlpha(),
  check("email")
    .exists()
    .isEmail(),
  check("role").isIn(["student", "mentor", "teacher", "coordinator"]),
  check("employment_status").isIn([
    "full_time",
    "part_time",
    "in_school",
    "looking",
    "not_looking"
  ])
];
