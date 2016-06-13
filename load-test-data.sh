echo "Loading document 1"
curl -XPOST http://localhost:9200/traffic/light -d '{
  "number": 1
}'

echo "\nLoading document 2"
curl -XPOST http://localhost:9200/traffic/light -d '{
  "number": 2
}'

echo "\nLoading document 3"
curl -XPOST http://localhost:9200/traffic/light -d '{
  "number": 3
}'

echo "\nLoading document 4"
curl -XPOST http://localhost:9200/traffic/light -d '{
  "number": 4
}'

echo "\nLoading document 5"
curl -XPOST http://localhost:9200/traffic/light -d '{
  "number": 5
}'

echo "\nLoading document 6"
curl -XPOST http://localhost:9200/traffic/light -d '{
  "number": 6
}'

echo "\nLoading document 7"
curl -XPOST http://localhost:9200/traffic/light -d '{
  "number": 7
}'
