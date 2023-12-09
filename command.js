// import { REST, Routes } from 'discord.js';
const { REST, Routes } = require("discord.js")

const commands = [
    {
        name: 'ping',
        description: 'Replies with Pong!',
    },
];

const rest = new REST({ version: '10' }).setToken("MTE4MjkwNzQ4MjY0NTk5NTU0MA.GTcsqs.cAQANmrmhOUWwyy98PobMtjSbfIJXuQUlBpkPo");
(async () => {
    try {
        console.log('Started refreshing application (/) commands.');

        await rest.put(Routes.applicationCommands("1182907482645995540"), { body: commands });

        console.log('Successfully reloaded application (/) commands.');
    } catch (error) {
        console.error(error);
    }
})();
