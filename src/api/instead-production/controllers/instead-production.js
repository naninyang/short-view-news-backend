"use strict";

/**
 * instead-production controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::instead-production.instead-production"
);
