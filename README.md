# yt-scraping use
 
 ```npm i yt-scraping```

```
const yt-scraping = require('yt-scraping');

deneme.SetUrl("https://www.youtube.com/watch?v=YRerQwKAM2A").then((videoId) => {
    deneme.getTitle(videoId).then((title) => {
        console.log(title);
    }).catch((err) => {
        console.error(err);
    });
    deneme.getWiews(videoId).then((view) => {
        console.log(view);
    }).catch((err) => {
        console.error(err);
    });
    deneme.getChannelName(videoId).then((name) => {
        console.log(name);
    }).catch((err) => {
        console.error(err);
    });
}).catch((err) => {
    console.error(err);
});
```
