'use strict';

/**
 * package-option service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::package-option.package-option');
