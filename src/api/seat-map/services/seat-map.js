'use strict';

/**
 * seat-map service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::seat-map.seat-map');
