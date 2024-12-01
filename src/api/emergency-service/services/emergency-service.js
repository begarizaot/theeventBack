'use strict';

/**
 * emergency-service service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::emergency-service.emergency-service');
