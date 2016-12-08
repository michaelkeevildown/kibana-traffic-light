'use strict';

module.exports = function (kibana) {

  return new kibana.Plugin({
  	name: 'traffic_light_vis',
    uiExports: {
      visTypes: [ 'plugins/traffic_light_vis/traffic_light_vis' ]
    }

  });
};