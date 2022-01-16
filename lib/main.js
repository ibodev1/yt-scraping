const puppeteer = require('puppeteer');

module.exports = {
    async SetUrl(url) {
        const dataUrl = await new URL(url);
        var videoId = dataUrl.searchParams.get('v');
        return videoId;
    },
    
    async getTitle(videoId) {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/watch?v='+videoId);
         var element = await page.waitForSelector('#container > h1.title');
         var text = await page.evaluate(element => element.textContent, element);
        browser.close();
        return text;
    },

    async getViews(videoId) {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/watch?v='+videoId);
         var element = await page.waitForSelector('#count > ytd-video-view-count-renderer > span.view-count.style-scope.ytd-video-view-count-renderer');
         var data = await page.evaluate(element => element.textContent, element);
         var repData = data.replace(/[^0-9]/g,"");
         var FormatRepDataViews = new Intl.NumberFormat('tr-TR').format(repData);
        browser.close();
        return FormatRepDataViews;
    },

    async getPublishDate(videoId) {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/watch?v='+videoId);
         var element = await page.waitForSelector('#info-strings > yt-formatted-string');
         var PublishDate = await page.evaluate(element => element.textContent, element);
        browser.close();
        return PublishDate;
    },

    async getLikeCount(videoId) {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/watch?v='+videoId);
         var element = await page.waitForSelector('#text');
         var PublishDate = await page.evaluate(element => element.textContent, element);
        browser.close();
        return PublishDate;
    },
    
    async getChannelName(videoId) {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/watch?v='+videoId);
         var element = await page.waitForSelector('#text > a');
         var ChannelName = await page.evaluate(element => element.textContent, element);
        browser.close();
        return ChannelName;
    },
    
    async getChannelSub(videoId) {
        const browser = await puppeteer.launch({});
        const page = await browser.newPage();
        await page.goto('https://www.youtube.com/watch?v='+videoId);
         var element = await page.waitForSelector('#owner-sub-count');
         var ChannelSub = await page.evaluate(element => element.textContent, element);
        browser.close();
        return ChannelSub;
    }
}
