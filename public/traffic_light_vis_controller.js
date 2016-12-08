import uiModules from 'ui/modules';
import _ from 'lodash';

const module = uiModules.get('kibana/traffic_light_vis', ['kibana']);
module.controller('TrafficLightVisController', function ($scope, Private) {
  var tabifyAggResponse = Private(require('ui/agg_response/tabify/tabify'));

  var metrics = $scope.metrics = [];

  $scope.processTableGroups = function(tableGroups) {
    _.forEach(tableGroups.tables, (table) => {
      _.forEach(table.columns, (column, i) => {
        metrics.push({
          label: column.title,
          value: table.rows[0][i]
        });
      })
    })
  };

  $scope.$watch('esResponse', function (resp) {
    if (resp) {
      metrics.length = 0;
      $scope.processTableGroups(tabifyAggResponse($scope.vis, resp));
    }
  });
});