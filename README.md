# cook_bot

①bot用のディレクトリを作成する。以下、コマンド。
mkdir cook_bot
cd cook_bot

②パッケージ作成。
yarn init

③ライブラリを追加。
yarn add discord.js

④dotenvのインストール。
yarn add dotenv

⑤cronのインストール。
yarn add cron

⑥.envファイル作成。
.envファイル
　∟DISCORD_TOKEN = "Discordのトークン情報"
　∟COOK_CHANNEL = "チャンネルID指定"

⑦bot起動。
node index.js