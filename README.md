# Kibana - Traffic Light Visualisation

## Considerations
This has only been tested on the following versions:

- Elasticsearch 2.3.3
- Kibana 4.4.2

## Install Instructions:

To install this visualisation into Kibana run the below command:

`bin/kibana plugin --install traffic-lights -u https://github.com/michaelkeevildown/kibana-traffic-light/raw/master/traffic_light_vis.zip`

## How does it work?

This visualisation has two configuration parameters

1. Red threshold
2. Green threshold

If you load the data in the test-data.txt which is formatted to work in Sense, you will have 7 documents inserted into an index called traffic with they type called light.

If you go to the visualisation tab and select Traffic Light:

![visulisation tab](https://i.imgsafe.org/d5ec37f544.jpg)

You will then need to select the traffic index. Once that is done, you will be taken to the default visualisation tab. Here you can choose how you want to aggregate your data, whether that be Sum, Avg, Max, Min, etc...

Once you have selected your aggregation type, you can select the boundaries for your traffic lights in the Options tab:

![settings](https://i.imgsafe.org/d5f852c75a.png)

- Traffic Light Width - Allows you to resize the visualisation to fit your dashboard.
- Red Threshold - Anything below this number will set the Traffic Light Red
- Green Threshold - Anything Above this will set the traffic light Green

#### So where is Yellow or Amber?
You don't need a yellow or amber as anything between Red and Green falls into this category.

If you set the config like so:

- **Aggregation Type** - `Average` = 4 (Using the data set in test-data.txt)
- **Red Threshold** - 4
- **Green Threshold** - 6
- **RESULT** = Red

- **Aggregation Type** - `Average` = 4 (Using the data set in test-data.txt)
- **Red Threshold** - 2
- **Green Threshold** - 6
- **RESULT** = Yellow

- **Aggregation Type** - `Average` = 4 (Using the data set in test-data.txt)
- **Red Threshold** - 2
- **Green Threshold** - 4
- **RESULT** = Green
