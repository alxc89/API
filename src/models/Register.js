const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
  name: {
    type: String,
    require: true,
  },
  CPF: {
    type: Number,
    require: true,
  },
  phone: String,
  birthDate: Date,
  CEP: String,
  address: String,
  city: String,
  state: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

// Exportando o model
mongoose.model("Register", registerSchema);
