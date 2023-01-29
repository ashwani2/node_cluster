loadtest -n 1000 -c 100 --rps 200 http://localhost:4000?number=20

-n Number of requests
-c concurrent number of requests
--rps requests per second


artillery quick --count 10 -n 20 http://localhost:4000?number=20
--count Number of virtual users
-n number of requests made by each users

## to generate the ecosystem file in pm2
pm2 ecosystem
pm2 monit to monitor all processes