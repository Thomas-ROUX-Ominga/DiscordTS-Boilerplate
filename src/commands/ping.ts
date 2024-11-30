import { CommandInteraction, SlashCommandBuilder } from "discord.js";

// Define a simple ping command that responds with "Pong!"
export const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("Replies with Pong!");

// Command execution function that gets called when the command is used
export async function execute(interaction: CommandInteraction) {
    return interaction.reply("Pong!");
}