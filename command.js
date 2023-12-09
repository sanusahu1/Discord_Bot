// import { REST, Routes } from 'discord.js';
const { REST, Routes } = require("discord.js");
require('dotenv').config();

const token = process.env.TOKEN;
const client = process.env.CLIENTID;


const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken(token);
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands(client), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
