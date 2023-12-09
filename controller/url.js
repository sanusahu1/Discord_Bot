const URL = require("../models/url");
const shortid = require("shortid");

async function generateShortUrl(url) {
    if (!url) {
        throw new Error("URL is required");
    }

    const shortID = shortid();

    try {
        await URL.create({
            shortId: shortID,
            redirectURL: url,
            visitHistory: [],
        });

        //console.log(shortID);
        return shortID;
    } catch (error) {
        console.error("Error generating short URL:", error);
        throw new Error("Error generating short URL. Please try again later.");
    }
}

module.exports = {
    generateShortUrl,
};
