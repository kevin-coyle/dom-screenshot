const puppeteer = require('puppeteer');
const fs = require('fs');

async function screenshotDOMElement(url, selector, path) {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.setViewport({ width: 1920, height: 1080 });

    await page.goto(url);
    await page.waitForSelector(selector);
    // wait for 1 second just to be sure
    await new Promise(resolve => setTimeout(resolve, 1000));

    const rect = await page.evaluate(selector => {
        const element = document.querySelector(selector);
        const { x, y, width, height } = element.getBoundingClientRect();
        return { left: x, top: y, width, height, id: element.id };
    }, selector);

    await page.screenshot({
        path,
        clip: {
            x: rect.left,
            y: rect.top,
            width: rect.width,
            height: rect.height
        }
    });

    await browser.close();
}

// Example. You can loop through all the elements you want to screenshot if you want.
const elements = [
    '#Homepage > main > header > div.lc',
];

// create out dir if it doesn't exist

const dir = './out';
if (!fs.existsSync(dir)){
    fs.mkdirSync(dir);
}

elements.forEach((element, i) => {
    screenshotDOMElement('https://bigmedium.com/', element, 'out/element'+i+'.png');
});
