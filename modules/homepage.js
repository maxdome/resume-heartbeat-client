'use strict';

/**
 * Serves the homepage for the application
 * @example
    homepage: {
        server: ''
    }
 */

module.exports = function (config, libraries, services) {
    var app = services.app;

    app.get('/', function (req, res) {
        res.render('homepage.html.twig', { config: config, env: app.get('env') });
    });
};
