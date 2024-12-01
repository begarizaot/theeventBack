'use strict';

/**
 * discount service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::discount-code.discount-code');
