// import { Client, GatewayIntentBits } from 'discord.js';
const { Client, GatewayIntentBits } = require("discord.js");
require('dotenv').config();
const express = require("express");
const app = express();
const PORT = 8003;
const { generateShortUrl } = require("./controller/url");

const token = process.env.TOKEN;

const { connectToMongoDB } = require("./database");
connectToMongoDB('mongodb://127.0.0.1:27017/MVC?directConnection=true&serverSelectionTimeoutMS=2000&appName=mongosh+2.0.2')
    .then(() => console.log("MongoDB Connected ")
    );


const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('messageCreate', async (message) => {
    if (message.author.bot) return;

    if (message.content.startsWith('create')) {
        const url = message.content.split('create')[1];

        try {
            const shortID = await generateShortUrl(url);            
            return message.reply({
                content: `Short ID generated successfully: ${shortID}`,
            });
        } catch (error) {
            console.error("Error generating short URL:", error);
            return message.reply({
                content: "Error generating short URL. Please try again later.",
            });
        }
    }

    message.reply({
        content: "Hi From Bot",
    });
    console.log(message.content);
});

client.on('interactionCreate', (interaction) => {
    //console.log(interaction);
    interaction.reply("Pong....!!!!");
});
client.login(token);

app.listen(PORT, () => console.log(`Server Started At PORT :${PORT}`));