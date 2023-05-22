//dotenvの適用
require('dotenv').config();
//.envからtokenの呼び出し
const {token} = process.env;

const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client(
  { intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
    ]
  }
);

client.on('messageCreate', message => {
  if(message.author.bot) return; //BOTのメッセージには反応しない

  if(message.content === "こんにちは") {
    message.channel.send("こんにちは！");
  }
  
  if(message.content === "えらい") {
    message.channel.send("えらい！");
  }

  if(message.content === "おい") {
    message.channel.send("だいすーしーキッチンオープンして");
  }
});

client.on('ready', () => {
  console.log('ボットが起動したよ');
});
client.login(token);