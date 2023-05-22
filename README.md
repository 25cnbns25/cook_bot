# cook_bot

①bot用のディレクトリを作成する。以下、コマンド。
mkdir cook_bot
cd cook_bot

②パッケージ作成。
yarn init

③ライブラリを追加。
yarn add discord.js

④discord.js、dotenvのインストール。
npm install discord.js dotenv

⑤.envファイル作成、トークン情報を記載。
.envファイル
　∟DISCORD_TOKEN = "Discordのトークン情報"

⑥bot起動。
node index.js