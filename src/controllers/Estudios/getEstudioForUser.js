const { Estudio, Usuario, Sede } = require("../../db");

async function getEstudioForUser(req, res, next) {

  const { userId } = req.params;
  try {

    const estudios = await Estudio.findAll({
      where: {
        usuarioId: userId,
      }
    });

    if (estudios) {
      res.status(200).send({
        existe: true,
        study: estudios
      });
    } else {

      res.status(200).send({
        existe: false,
        msg: 'no tiene estudios'
      })
    }
  } catch (error) {
    next(error);
  }
}

module.exports = { getEstudioForUser };