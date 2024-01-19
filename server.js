/* eslint-disable no-undef */
import * as dotenv from 'dotenv';
dotenv.config();
import cors from 'cors';
import express from 'express';
import TelegramBot from 'node-telegram-bot-api';

const token = process.env.BOT_TOKEN;
const webAppUrl = process.env.WEB_APP_URL;

const bot = new TelegramBot(token, { polling: true });
// We'll set up serber to handle keybord_inline req-s
const app = express();

app.use(express.json());
app.use(cors());

bot.on('message', async msg => {
  const chatId = msg.chat.id;
  const { text } = msg;

  if (text === '/start') {
    /* await bot.sendMessage(chatId, 'Use keybord to fill your info', {
      reply_markup: {
        keyboard: [
          [
            {
              text: 'Fill out form',
              web_app: { url: `${webAppUrl}/artist` },
            },
          ],
        ],
      },
    }); */

    await bot.sendMessage(
      chatId,
    `
      🎉 Welcome to Tontune! 🎵

      Hey there, music aficionado! 🎶 You've just stepped into a new realm where your music vibes can truly come alive. Tontune is all about connecting you with the beats and rhythms of the world in an innovative and interactive way.

      🚀 Here's what you can do with Tontune:
        - 🎤 Discover new artists and explosive tracks.
        - 🏆 Participate in music challenges and climb the leaderboard.
        - 💎 Collect and trade exclusive music NFTs.
        - 📅 Stay updated with the latest music events and concerts.

      To get started, simply click on 'Connect Wallet' and join the symphony of Tontune users who are reshaping the music streaming universe.

      Enjoy the rhythm of innovation with Tontune! 🌐🎙️
    `,
      {
        reply_markup: {
          inline_keyboard: [
            [
              {
                text: 'Open the App!',
                web_app: { url: webAppUrl },
              },
            ],
          ],
        },
      },
    );
  }

  /* if (msg?.web_app_data?.data) {
    try {
      const data = JSON.parse(msg?.web_app_data?.data);

      await bot.sendMessage(chatId, 'Thanks for placing an order!');

      setTimeout(async () => {
        await bot.sendMessage(chatId, `Your country: ${data?.country}`);
        await bot.sendMessage(chatId, `Your address: ${data?.street}`);
        await bot.sendMessage(chatId, `Your status: ${data?.subject}`);
      }, 1500);
    } catch (e) {
      console.log(e);
    }
  } */
});

// Routes
/* app.post('/web_app', async (req, res) => {
  const { queryId, products, totalPrice } = req.body;

  try {
    // Used for handling inline_keyboard data from the web_app
    await bot.answerWebAppQuery(queryId, {
      type: 'article',
      id: queryId,
      title: 'Succesfully placed an order!',
      input_message_content: {
        message_text: `Your order totai: ${totalPrice}`,
      },
    });

    return res.status(200).json({});
  } catch (e) {
    return res.status(500).json({});
  }
}); */

// Sample GET route
app.get('/api', (req, res) => {
  res.json({ message: 'Welcome to the Tontune API!' });

  return res.status(200).json({}); // Finish HTTP request
});

const PORT = 8000;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
