// import { Client, GatewayIntentBits } from 'discord.js';
const { Client, GatewayIntentBits } = require("discord.js")
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent,
    ],
});

client.on('messageCreate', (message) => {
    if(message.author.bot) return;
    if(message.content.startsWith('create')) {
        const url = message.content.split('create')[1];
        return message.reply({
            content: "Generating Short ID for " + url,
        });
    }
    message.reply({
        content: "Hi From Bot",
    });
    console.log(message.content);
});

client.on('interactionCreate' , (interaction) => {
    console.log(interaction.command);
    interaction.reply("Pong....!!!!");
});
client.login("MTE4MjkwNzQ4MjY0NTk5NTU0MA.GTcsqs.cAQANmrmhOUWwyy98PobMtjSbfIJXuQUlBpkPo");