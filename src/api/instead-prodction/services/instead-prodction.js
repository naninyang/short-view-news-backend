"use strict";

/**
 * instead-production service
 */

const { createCoreService } = require("@strapi/strapi").factories;

module.exports = createCoreService(
  "api::instead-production.instead-production"
);
