import { Telegraf } from "telegraf";
import dotenv from "dotenv";
dotenv.config();

const bot = new Telegraf(process.env.BOT_TOKEN);

bot.start((ctx) => ctx.reply("Привет! Я бот SlotBooky, помогаю записываться на услуги."));
bot.help((ctx) => ctx.reply("Команды:\n/start — начать\n/help — помощь"));

bot.launch();
console.log("Bot started!");
