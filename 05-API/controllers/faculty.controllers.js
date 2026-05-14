import Faculty from "../models/faculty.model.js";

export const readAllFaculty = (req, res) => {
  // Submit fetch query to DB and get data in faculty array[]
  res.status(200).json({
    msg: "I will read all faculty from DB",
  });
};

export const readOneFaculty = (req, res) => {
  console.log(req.params);

  //  code to send a DB query to read a faculty data with id = 22920
  res.status(200).json({
    msg: "I will fech specific Faculty info",
  });
};

// create new facultry
export const createNewFaculty = (req, res) => {
  // read data from Frontend and submit to DB

  res.status(201).json({
    msg: "I will create new faculty in DB",
  });
};
