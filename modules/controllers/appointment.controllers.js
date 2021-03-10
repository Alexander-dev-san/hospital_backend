const Appointments = require("../../db/models/appointment");

module.exports.getAllAppointments = (req, res, next) => {
  Appointments.find().then((result) => {
    res.send({ data: result });
  });
};

module.exports.createNewAppointment = (req, res, next) => {
  const appoint = new Appointments(req.body);
  appoint
    .save()
    .then((result) => {
      res.send({ data: result });
    })
    .catch((error) => {});
};

module.exports.changeAppointment = (req, res, next) => {};

module.exports.deleteAppointment = (req, res, next) => {};
