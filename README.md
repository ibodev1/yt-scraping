# ytscraping use
 
 ```npm i ytscraping```

```
const ytscraping = require('ytscraping');

ytscraping.SetUrl("https://www.youtube.com/watch?v=YRerQwKAM2A").then((videoId) => {
    ytscraping.getTitle(videoId).then((title) => {
        console.log(title);
    }).catch((err) => {
        console.error(err);
    });
    ytscraping.getWiews(videoId).then((view) => {
        console.log(view);
    }).catch((err) => {
        console.error(err);
    });
    ytscraping.getChannelName(videoId).then((name) => {
        console.log(name);
    }).catch((err) => {
        console.error(err);
    });
}).catch((err) => {
    console.error(err);
});
```
