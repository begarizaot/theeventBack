'use strict';

/**
 * emergency-service router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::emergency-service.emergency-service');
