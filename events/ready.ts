// import discord.js
import { Events } from 'discord.js';

const name = Events.ClientReady
const once = true
const execute = (client: any) => {
	console.log(`Ready! Logged in as ${client.user.tag}`);
}

export { name, once, execute }