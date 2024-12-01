'use strict';

/**
 * status-event service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::status-event.status-event');
