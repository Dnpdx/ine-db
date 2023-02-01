'use strict';

/**
 * entrada service
 */

const { createCoreService } = require('@strapi/strapi').factories;

module.exports = createCoreService('api::entrada.entrada');
