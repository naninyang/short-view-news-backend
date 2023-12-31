'use strict';

/**
 * twitter-timeline-production service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::twitter-timeline-production.twitter-timeline-production');
