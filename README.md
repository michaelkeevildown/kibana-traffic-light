# Kibana - Traffic Light Visualisation

## Considerations
This has only been tested on the following versions:

- Elasticsearch 5.0.2 
- Kibana 5.0.2
 
## Install Instructions:

To install this visualisation into Kibana run the below command:

`bin/kibana-plugin install https://github.com/michaelkeevildown/kibana-traffic-light/releases/download/major.minor.patch/kibana-traffic-light-major.minor.patch.zip`

## How does it work?

This visualisation has two configuration parameters

1. Red threshold
2. Green threshold

If you load the data in the test-data.txt which is formatted to work in Sense, you will have 7 documents inserted into an index called traffic with they type called light.

If you go to the visualisation tab and select Traffic Light:

![visulisation tab](https://cloud.githubusercontent.com/assets/16757754/17933612/b079d7ae-6a0c-11e6-9547-b6216932e09f.png)

You will then need to select the traffic index. Once that is done, you will be taken to the default visualisation tab. Here you can choose how you want to aggregate your data, whether that be Sum, Avg, Max, Min, etc...

Once you have selected your aggregation type, you can select the boundaries for your traffic lights in the Options tab:

![settings](https://cloud.githubusercontent.com/assets/16757754/17933626/b6c854b4-6a0c-11e6-966a-33ef497ce073.png)

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
