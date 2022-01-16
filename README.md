# ytscraping use
 
 # install module
 ```npm i ytscraping```

# example usage
```
const ytscraping = require('ytscraping');

ytscraping.SetUrl("https://www.youtube.com/watch?v=YRerQwKAM2A").then((videoId) => {
    ytscraping.getTitle(videoId).then((title) => {
        console.log(title);
    }).catch((err) => {
        console.error(err);
    });
    ytscraping.getViews(videoId).then((view) => {
        console.log(view);
    }).catch((err) => {
        console.error(err);
    });
    ytscraping.getChannelName(videoId).then((name) => {
        console.log(name);
    }).catch((err) => {
        console.error(err);
    });
    ytscraping.getPublishDate(videoId).then((date) => {
        console.log(date);
    }).catch((err) => {
        console.error(err);
    });
    ytscraping.getLikeCount(videoId).then((count) => {
        console.log(count);
    }).catch((err) => {
        console.error(err);
    });
    ytscraping.getChannelSub(videoId).then((sub) => {
        console.log(sub);
    }).catch((err) => {
        console.error(err);
    });
}).catch((err) => {
    console.error(err);
});
```
