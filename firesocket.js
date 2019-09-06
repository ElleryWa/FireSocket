"use strict";

const firebase = require("firebase/app");
require("firebase/auth");
require("firebase/firestore");

class FireSocket {
  constructor(address) {
    this.address = address;
  }
}

module.exports = FireSocket;
