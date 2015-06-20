/**
* A declarative, modular approach to ajaxifying your website.
*
* @namespace aiasify
*/

(function(root, factory) {
    'use strict';
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.aiasify = factory();
  }
}(this, function() {
    'use strict';

    /**
    * Initiates a new XMLHttpRequest.
    *
    * @param {string} type The HTTP verb.
    * @param {string} url The url for the XHR request.
    * @param {object} data Optional. The data to be passed with a POST or PUT request.
    *
    * @memberof aiasify
    */
    function request(config) {
        config = config || {};
        var req = new XMLHttpRequest();
        var settings = {
            type: config.type || 'GET',
            url: config.url || window.location.href
        };

        req.open(settings.type, settings.url);
        req.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');
        req.onreadystatechange = function () {
            if (this.readyState === 4) {
                if (this.status === 200) {
                    console.log(req.responseText);
                }
                else {
                    throw new Error('Request responded with status ' + req.statusText);
                }
            }
        };
        req.send(config.data);
    }

    return {
        request: request
    };
}));
