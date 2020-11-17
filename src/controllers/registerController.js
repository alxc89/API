const mongoose = require("mongoose");

const Register = mongoose.model("Register");

module.exports = {
  async index(req, res) {
    try {
      const register = await Register.find(req.params);
      return res.json(register);
    } catch (error) {
      console.log(error);
    }
  },

  async show(req, res) {
    try {
      const register = await Register.findById(req.params.id);
      return res.json(register);
    } catch (e) {
      console.log("Error", e);
    }
  },

  async store(req, res) {
    try {
      const register = await Register.create(req.body);
      return res.json(register);
    } catch (error) {
      console.log(error);
    }
  },

  async update(req, res) {
    try {
      const register = await Register.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

      return res.json(register);
    } catch (erro) {
      console.log("Erro", e);
    }
  },

  async destroy(req, res) {
    try {
      await Register.findByIdAndDelete(req.params.id);
      return res.json();
    } catch (error) {
      console.log(error);
    }
  },
};
