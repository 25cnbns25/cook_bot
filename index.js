//dotenvの適用
require('dotenv').config();

//cronの適用
const CronJob = require('cron').CronJob;

//.envからの呼び出し
const token = process.env.DISCORD_TOKEN;
const cookChannel = process.env.COOK_CHANNEL;

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
  if(message.content === "は？") {
    message.channel.send("やれよ");
  }
});

client.on('ready', async () => {
  //チャンネル指定
  const channel = await client.channels.fetch(cookChannel);

  //毎週金曜日 18:00に催促メッセージを送信
  new CronJob('00 00 18 * * 5', () => {
      //処理
      channel.send('だいすーしーキッチンオープンして');
  }, null, true, 'Asia/Tokyo');

});

client.on('ready', () => {
  console.log('ボットが起動したよ');
});
client.login(token);