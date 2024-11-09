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
 
"eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiU09HaEd2Zk9lUC9yMEs3NmFQYXJlUnJ1aHdZWHQxaXU4dU1sZjFIbGYybz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTzVETVAvNmxkWkNLTjJYWVZ1OTJYc0crb1hFazJ0T0wySXZZMVUwRU9sTT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIrTmJoOS9xb3p6OG9qcmg2cXVqa3llVS8yNHZkcE83Z3NYQ0Q5eTBFMVVBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPaWZ5MVpQbzBrRjZIRU0zMkkwMTB2NzZSaVJhUEZXUVppS25zdGRESGtNPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdORGZRNVZmODdSbDdMdnRjQ1BlZWczTkdveHRxdHRIWE9xZTJlRVdXRjA9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImcvakpuTjBFSSsyVnVCMDhicFBOQTBzK2I0ck5WU1FhdG4vL2wyZm9na2c9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiWUhEalFaU3d3VjdCdVFKRXhVSVNaNUIwelJ1RzlkRWdsM1AwQzN2c3htTT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiallUYnF6RS91QmxVbEQvM3VERTZCVkd2WjJBMFBOTmx3aDNpMHpRWk1sWT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Ik1DNDRrWEJjMlNxUGdkc1ZWQm5DUGhxTEwzVmJzVkJFMXl6ZUVlcGdIK0J0ZkxvMmplL3ZxQ0EzYlJ6REx6SVpWSHZwUmFXSEViV29aQXhPUlNaVENBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzIsImFkdlNlY3JldEtleSI6Ii9kY09zUmNQOXdZeHM4ZElHSE14eENFN3YwaEpHSFNjenlJZXlCZ2NlUXM9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6ImNTVmxsRmRtVFUyU2FiekNxZW9zVmciLCJwaG9uZUlkIjoiYTQ0MGZlNTUtYzkzNy00YjdmLWEzOTUtMjY3ODM3MDRlYWY0IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFiVlN1TG5JYzZIVjNadnU2ZndrOFdseGZJbz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJGWG43ZXQrUmtGYzVmTldSeENvYUJKWlJpMGc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiM1pXVEpNUVMiLCJtZSI6eyJpZCI6IjI3NzQ4MjU1ODQ4OjZAcy53aGF0c2FwcC5uZXQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0xYLzl2TUdFS0RLdWJrR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlV6eTlLUVk0YkM5MjdYdm53dUhpeC9HczJPZXYyOC92aUhpOFN6WE1ReEU9IiwiYWNjb3VudFNpZ25hdHVyZSI6ImtvMUxzcEJ5RllhR2JmcURHc3h3aGR1VkM3VGo1aThpejIvU0djOHFjOThWWkVzWnRnTjRyU2V6bzNKR1k0UjQyWXEwZWpNZ2VyUFRoaVI3YVo4eUFRPT0iLCJkZXZpY2VTaWduYXR1cmUiOiIvQzdndzV3M2NuVzBPQ1JTdENocXl1OU5sVzk2NGxBWVVtMEswZnJTbTRjWXUyTXZ1dHpQYUo3T2ZnRUg5dHI5UW02SGJRYXVTM2w4Rm1CaFN1cFNDQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjI3NzQ4MjU1ODQ4OjZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVk04dlNrR09Hd3ZkdTE3NThMaDRzZnhyTmpucjl2UDc0aDR2RXMxekVNUiJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTczMTA5MzgwNiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFDUWkifQ==" //session id here
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ",",
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