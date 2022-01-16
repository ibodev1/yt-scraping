# yt-scraping use
 
 ```npm i yt-scraping```

```
const yt-scraping = require('yt-scraping');

yt-scraping.SetUrl("https://www.youtube.com/watch?v=YRerQwKAM2A").then((videoId) => {
    yt-scraping.getTitle(videoId).then((title) => {
        console.log(title);
    }).catch((err) => {
        console.error(err);
    });
    yt-scraping.getWiews(videoId).then((view) => {
        console.log(view);
    }).catch((err) => {
        console.error(err);
    });
    yt-scraping.getChannelName(videoId).then((name) => {
        console.log(name);
    }).catch((err) => {
        console.error(err);
    });
}).catch((err) => {
    console.error(err);
});
```
