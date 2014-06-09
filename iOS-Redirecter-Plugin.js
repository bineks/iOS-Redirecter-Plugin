"use strict";

(function (ns) {
  var InvalidArgumentException = function(message) {
    this.message = message;

    this.getMessage = function() {
      return this.message;
    }
  }

  InvalidArgumentException.prototype.toString = function () { return 'InvalidArgumentException: ' + this.message; }

  var defaults = {
    urlValidationRegExpr: /^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,
    iPhone: true,
    iPad: true
  };

  var pluginConfig = {};

  ns.initialize = function (config) {
    if (!config.hasOwnProperty('redirectTo')) throw new InvalidArgumentException('Config property redirectTo is not defined.');
    pluginConfig = mergeObjects(config, defaults);

    if (!pluginConfig.urlValidationRegExpr.test(pluginConfig.redirectTo)) {
      throw new InvalidArgumentException('Provided URL is not valid. Please provide valid URL for redirectTo property.');
    }

    return this;
  };

  ns.redirect = function() {
    var userAgents = [];

    if(pluginConfig.iPhone == true) userAgents.push('iPhone');
    if(pluginConfig.iPad == true) userAgents.push('iPad');

    if(userAgents.length >= 1) {
      var userAgentsRegExpr = new RegExp(userAgents.join('|'), 'g');
      if (userAgentsRegExpr.test(navigator.userAgent)) {
        location.href = pluginConfig.redirectTo;
      }
    }

    return this;
  };

  var mergeObjects = function (objectA, objectB) {
    var objectC = {}, attributeName;

    for (attributeName in objectA) {
      if(objectA.hasOwnProperty(attributeName)) objectC[attributeName] = objectA[attributeName];
    }

    for (attributeName in objectB) {
      if(objectB.hasOwnProperty(attributeName)) objectC[attributeName] = objectB[attributeName];
    }

    return objectC;
  };
}(window.iOSRedirecter = window.iOSRedirecter || {}))


