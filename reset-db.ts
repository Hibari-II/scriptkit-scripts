// Name: Reset Local Database

import "@johnlindquist/kit"


await term("docker stop h2 \
&& cd /Users/dinhh/h2-data \
&& rm local.mv.db \
&& docker start h2 \
&& exit")
