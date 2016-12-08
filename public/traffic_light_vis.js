import './traffic_light_vis.less';
import './traffic_light_vis_controller';

import visTypes from 'ui/registry/vis_types';
visTypes.register(TrafficLightVisProfider);

import TemplateVisTypeProvider from 'ui/template_vis_type/template_vis_type';
import VisSchemasProvider from 'ui/vis/schemas';

function TrafficLightVisProfider(Private) {

  var TemplateVisType = Private(TemplateVisTypeProvider);
  var Schemas = Private(VisSchemasProvider);

  // return the visType object, which kibana will use to display and configure new
  // Vis object of this type.
  return new TemplateVisType({
    name: 'traffic_light',
    title: 'Traffic Light',
    description: 'Great for one-glance status readings, the traffic light visualization expresses in green / yellow / red the position of a single value in relation to low and high thresholds.',
    icon: 'fa-car',
    template: require('plugins/traffic_light_vis/traffic_light_vis.html'),
    params: {
      defaults: {
        fontSize: 60,
        width: 50,
        redThreshold: 20,
        greenThreshold: 80
      },
      editor: require('plugins/traffic_light_vis/traffic_light_vis_params.html')
    },
    schemas: new Schemas([
      {
        group: 'metrics',
        name: 'metric',
        title: 'Metric',
        min: 1,
        defaults: [
          { type: 'count', schema: 'metric' }
        ]
      }
    ])
  });
}