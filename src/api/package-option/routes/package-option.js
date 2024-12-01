'use strict';

/**
 * package-option router
 */

const { createCoreRouter } = require('@strapi/strapi').factories;

module.exports = createCoreRouter('api::package-option.package-option');
