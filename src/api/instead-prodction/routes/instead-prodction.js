"use strict";

/**
 * instead-production router
 */

const { createCoreRouter } = require("@strapi/strapi").factories;

module.exports = createCoreRouter("api::instead-production.instead-production");
