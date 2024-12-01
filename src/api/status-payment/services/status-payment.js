'use strict';

/**
 * status-payment service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::status-payment.status-payment');
