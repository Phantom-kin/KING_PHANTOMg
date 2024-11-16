//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "www.youtube.com";
global.video = "www.youtube.com";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "kingphantom488@gmail.com";
global.location = "Pretoria, South Africa";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://astrofx0011:astro@cluster0.lmwnxdt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
global.allowJids = process.env.ALLOW_JID || "true";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Johannesburg";
global.github = process.env.GITHUB || "https://github.com/Phantom-kin/King_Phantom";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaoLotu42DchJmXKBN3L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://files.catbox.moe/5zxe1k.jpg";
global.devs = "27748255848";
global.sudo = process.env.SUDO || "27748255848";
global.owner = process.env.OWNER_NUMBER || "27748255848";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "true";
global.wlcm = process.env.WELCOME || "true";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://files.catbox.moe/5zxe1k.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://king-phantom.onrender.com/pair";

global.SESSION_ID =
  process.env.SESSION_ID ||
"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ1BsVFVpUTBZM1lpUUs2RDZGTTEvcy9jQUU2QkNhR0hteFpWaCtsZW0wTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiRFVGcEl2dThwcC9nVlI3VkJFVVJBWmkyemtpSEJrVk1EeGJzY3M5aHZEQT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI4RWhtZmNISFpTbGpPRVNML2Y3aE9EMkNJemwxa1RWaWZ6dHREeW1JN25jPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpZkVXU3VNWnl2ditYVUw3OUlKK3hMWDBDaGtVM3h1cDhjeEtEeTVtMWw0PSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDSEhtdzZlS1h5dUJXN3RlRXMwNlpqRUlWTDNpU2p0STVSS0FydVBrVlk9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImNDbHRHN2dFSjNwdEp3MXlESU9mQWpJajZzQlM4Si8xaW9PS1NNMjZ0SG89In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0NIMUF0Nk5NNTgra1RGaWxwV09KOVVsWnZuZStpQ2pHaWhkSVRDY0ttOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiNURZd1BjbUVxWXZFMzh1RUM0dFRWdkl4SFNaWEwrK2wxZmZPb21lcXVDYz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImV2dUkzTVQ2ellHb0RtMkdLYlZIQnV0VytpNGpXWGIwZCtLOEtWTUU5OVYyOUhDdW9UQjNsNC95QUxPMGNZSGxoMlFiVC9ZMnM5TGZuTFJTWnQ0TER3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTI2LCJhZHZTZWNyZXRLZXkiOiJlVTFTUUpqTFpMdEhJa0hRSEZjczI1YU5EdDB4dzNUTVd0SDB4NHNORWdBPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJOM2xVRnF1OFJNaWFmaWdSaEFuaGxBIiwicGhvbmVJZCI6ImI4MmQyNzE4LTg4OWUtNDFiZS05OWEyLWNmMWRlZjRhNWViZCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJYR3hrVmZWVU91UDVMSjhGTk9wdExCaGw0bms9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaDhkOGpqUFRxakdueERxSXNmMGozbkVFaFB3PSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IlYySDYyV1g4IiwibWUiOnsiaWQiOiIyNzc0ODI1NTg0ODoxMUBzLndoYXRzYXBwLm5ldCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTGIvOXZNR0VJR3c0cmtHR0FVZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoiVXp5OUtRWTRiQzkyN1h2bnd1SGl4L0dzMk9ldjI4L3ZpSGk4U3pYTVF4RT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiam9GUzRyWXVNejVESmpRTVkzMzFwQnhEWHFWc0w3YTVmQjF4ZHVxd1dGZktodUJsa3hpWGFsNzZmMmowcS9pNVhNdHRtandhbGVRVzVSY3pwZWZyQWc9PSIsImRldmljZVNpZ25hdHVyZSI6InpjeGZpWXMyYk1HSGdUV1hrNEdudmNkL1AwOFdPWTNDVkU2K2duTUtDQVphM1liY3p6YS9TeG1sT1I4Z2pGVUdDSkdiZGxlQVlYdHMwcm9HN05qekNRPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMjc3NDgyNTU4NDg6MTFAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk04dlNrR09Hd3ZkdTE3NThMaDRzZnhyTmpucjl2UDc0aDR2RXMxekVNUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTc2MjE5MH0=" //session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || "0",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`PHANTOM™`",
  author: process.env.PACK_AUTHER || "PHANTOM",
  packname: process.env.PACK_NAME || "KING",
  botname: process.env.BOT_NAME || "KING_PHANTOM",
  ownername: process.env.OWNER_NAME || "PHANTOM",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "P H A N T O M").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = true;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
