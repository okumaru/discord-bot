// import discord.js
import { SlashCommandBuilder } from 'discord.js';

const data = new SlashCommandBuilder()
	.setName('ping')
	.setDescription('Replies with Pong!');
const execute = async ( interaction: any ) => {
	await interaction.reply('Pong!');
}

export { data, execute }