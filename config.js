//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "davidcyril209@gmail.com";
global.location = "Abuja, Nigeria";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github = process.env.GITHUB || "https://github.com/DeeCeeXxx/Queen_Anita-V2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VaeRru3ADTOEKPCPom0L";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/17c8ba84a7761eed633f6.jpg";
global.devs = "https://t.me/deecee_x";
global.sudo = process.env.SUDO || "";
global.owner = process.env.OWNER_NUMBER || "2348104074508";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://i.imgur.com/H4qeXwa.jpeg,https://telegra.ph/file/ba9ced500f9eca7db8acb.mp4";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "false";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0FmekJWYS9WRm9KMTlkNU0xeG9KSE9zbENkSzB5N3VNRjJ6N1dMK2FWaz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTjFIZVovdWxuRFk0U3dQN2k4d3pITVlqWi9QdFV5RWROeitpM2xnU0Robz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRQTFUUDJoZEpXYVl3WnZFeldOREMvSUY0OFlrWmxBY2paYXZIU1BES204PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJQUElMc2hmWEJvUjhKdGg4dit3RGhHYTZrQktEc3I3Qzk0MSt1dEY3cTNnPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjZDVWJYRExwL0pRUFJVS01pejhSU3ZCQWQrWVZybWlNcW1XNURvRURDbU09In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InBLK3VGZUxHRjRsaEY0amJPcDlnZkorY1dQcnZGY1JIMnc3WGM2OGI1UTg9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiY0FtWE5wVExiNjNHOURSbkRLMlhhU1RtS0tZQ1ZFZDVlTnYzK3hMNU1VRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieWJlYlJ2OUdHUERiOURCRXlhR256VnJudDZYZkJPZis0dzJSQ28vYjlsbz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InB3ME9LVTZidnR4U1RvbkhmV2tjazNsVmUrcW9sM0Z0a0ZMNnB4ZHUvYXMrUWw3NzIwTmtPcFJ6SkRKL3E3UHVqMWNMUWQwMnlXOGdXZUVncUtRdWdBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjQyLCJhZHZTZWNyZXRLZXkiOiJmeEQ1Zk1GYkxTdmUzMlFPcmVyWEpWdnFCclhFTVloVzFId1N1dUFJWGNFPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6IjIzNDgxMDQwNzQ1MDhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiNUU3QUI1NUI2MTY2QzUzMjZCQzIyM0IwOUQzOTg1NDgifSwibWVzc2FnZVRpbWVzdGFtcCI6MTczMTQ2MzA3N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjM0ODEwNDA3NDUwOEBzLndoYXRzYXBwLm5ldCIsImZyb21NZSI6dHJ1ZSwiaWQiOiIxNUU5NDFENzZDNTM4Mjk2OERBRUIwRjBGQ0IzRDI2MyJ9LCJtZXNzYWdlVGltZXN0YW1wIjoxNzMxNDYzMDc3fV0sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjoxLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJ6WGdYVHhfeFQ3NnVVRGExVktackdRIiwicGhvbmVJZCI6IjhmNGVlMmE4LWQ5YTQtNGY3ZS1hZGNjLTk2MzI1Yjg3ODY4NSIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiI3OFF2bWc4RlFpMDFMSzFEcm5wYTU4QkhHZ0E9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkljNnVDUjg3dDFDUEV5RTkwSm94bkwrbFJRPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IjZQOE5UWFNHIiwibWUiOnsiaWQiOiIyMzQ4MTA0MDc0NTA4OjJAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiaDI3NzkzNTQifSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ01MWCtPOEJFSlNQMExrR0dBSWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6ImR6ciswVTNCYU5nZllWK2JlMnd4Wlg3dWc3WTF1eVdONDM3SkxKOGU0UWc9IiwiYWNjb3VudFNpZ25hdHVyZSI6IkVidDhVS1pKaTBYMk4rTGxWZi9UU2NJakJJY21sZWJLWGxmazl2d00xK3djTTJzNXZZdDJKOWlBY1NVdUhyR3NyaUkxaEx1REo1SDREVVdtVTlIWUN3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiIxbUFUVWRZMENWTFBBWmJhYkFrTVh0cCtIeVVYMWtPZlpWV1FqOG9aTURNdzFIZlZVS29RZ2hXSFNRVzJFVHphcEx5dkRRRnJUcWhOc0dFWkhjWnJoQT09In0sInNpZ25hbElkZW50aXRpZXMiOlt7ImlkZW50aWZpZXIiOnsibmFtZSI6IjIzNDgxMDQwNzQ1MDg6MkBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJYYzYvdEZOd1dqWUgyRmZtM3RzTVdWKzdvTzJOYnNsamVOK3lTeWZIdUVJIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzMxNDYzMDc0LCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUlPeSJ9"
module.exports = {
  menu: process.env.MENU || "2",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "`QUEEN_ANITA-V2™`",
  author: process.env.PACK_AUTHER || "QUEEN_ANITA-V2",
  packname: process.env.PACK_NAME || "A N I T A",
  botname: process.env.BOT_NAME || "QUEEN_ANITA-V2",
  ownername: process.env.OWNER_NAME || "David Cyril",
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
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "public",
  LANG: (process.env.THEME || "A N I T A").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
