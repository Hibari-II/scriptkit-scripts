// Name: Reset Local Database

import "@johnlindquist/kit"


await term("docker stop h2 \
&& cd $HOME/h2-data \
&& rm local.mv.db \
&& docker start h2 \
&& exit")
