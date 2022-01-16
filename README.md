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

# SetUrl(params)
```params``` : Youtube video url ex. (https://www.youtube.com/watch?v=YRerQwKAM2A)

usage:
``` 
    ytscraping.SetUrl("https://www.youtube.com/watch?v=YRerQwKAM2A").then((videoId) => {
        console.log(videoId);
    }).catch((err) => {
        console.error(err);
    });
```


# getTitle(params)
```params``` : Youtube video id ex. (YRerQwKAM2A)

usage:
``` 
    ytscraping.getTitle("YRerQwKAM2A").then((title) => {
        console.log(title);
    }).catch((err) => {
        console.error(err);
    });
```

# getViews(params)
```params``` : Youtube video id ex. (YRerQwKAM2A)

usage:
``` 
    ytscraping.getViews("YRerQwKAM2A").then((views) => {
        console.log(views);
    }).catch((err) => {
        console.error(err);
    });
```

# getChannelName(params)
```params``` : Youtube video id ex. (YRerQwKAM2A)

usage:
``` 
    ytscraping.getChannelName("YRerQwKAM2A").then((name) => {
        console.log(name);
    }).catch((err) => {
        console.error(err);
    });
```

# getPublishDate(params)
```params``` : Youtube video id ex. (YRerQwKAM2A)

usage:
``` 
    ytscraping.getPublishDate("YRerQwKAM2A").then((date) => {
        console.log(date);
    }).catch((err) => {
        console.error(err);
    });
```

# getLikeCount(params)
```params``` : Youtube video id ex. (YRerQwKAM2A)

usage:
``` 
    ytscraping.getLikeCount("YRerQwKAM2A").then((count) => {
        console.log(count);
    }).catch((err) => {
        console.error(err);
    });
```

# getChannelSub(params)
```params``` : Youtube video id ex. (YRerQwKAM2A)

usage:
``` 
    ytscraping.getChannelSub("YRerQwKAM2A").then((sub) => {
        console.log(sub);
    }).catch((err) => {
        console.error(err);
    });
```
