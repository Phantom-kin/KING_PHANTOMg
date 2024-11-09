const fs = require("fs");
const Config = require("../config");
const { smd } = require("../lib");

// Define the runtime function (or import it if it's from another file)
function runtime(seconds) {
  const days = Math.floor(seconds / (3600 * 24));
  const hours = Math.floor((seconds % (3600 * 24)) / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const secs = Math.floor(seconds % 60);
  return `${days}d ${hours}h ${minutes}m ${secs}s`;
}

// Command definition for 'alive'
smd(
  {
    pattern: "alive", // Command trigger
    react: "👑", // Reaction when the command is run
    desc: "Check bot's status, speed, and latency", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message, client) => {
    const start = Date.now();
    
    // Simulate a task with a small delay
    await new Promise((resolve) => setTimeout(resolve, 100));

    const latency = Date.now() - start;

    // Final message with latency and speed
    const finalMessage = `
👑 *𝙆𝙄𝙉𝙂 𝙋𝙃𝘼𝙉𝙏𝙊𝙈  is Alive!*

*Latency:* ${latency}ms
*Speed:* As swift as royalty 🚀

*=== |✨| Arised by Phantom himself|✨| ===*
    `;

    // Image to be included with the message
    const imageUrl = "https://files.catbox.moe/8xk20t.mp4"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);
smd(
  {
    pattern: "about", // Command trigger
    react: "👇", // Reaction when the command is run
    desc: "Displays important bot and owner information", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const owner = "PHANTOM"; // Owner name
    const repoLink = "https://github.com/Phantom-kin/King_Phantom"; // Repository link
    const uptime = runtime(process.uptime()); // Get bot uptime
    const footer = "=== |✨| Arised by Phantom himself |✨| ===";

    // Final message content
    const finalMessage = `
👑 *𝙆𝙄𝙉𝙂 𝙋𝙃𝘼𝙉𝙏𝙊𝙈 _MD_*

*Owner:* ${owner}
*Repository:* ${repoLink}
*Bot Uptime:* ${uptime}

*FOREVER BE KING🐉*

${footer}
`;

    // Image to be included with the message
    const imageUrl = "https://files.catbox.moe/wismxt.mp4"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);
smd(
  {
    pattern: "dev",
    alias: ["phantom"],
    react: "🧠", // Reaction when the command is run
    desc: "Displays information about the developer", // Command description
    category: "misc", // Command category
    filename: __filename, // Filename reference
  },
  async (message) => {
    const name = "*Phantom 🐉*";
    const age = "*13*";
    const best friends = "*Haki and Alya*";
    const hobby = "*Watching Anime*";
    const footer = "*=|✨| Arised by Phantom himself |✨|=*";

    // Message content
    const finalMessage = `
👤 *Developer Info*

*Name:* ${name}
*Age:* ${age}
*Best friends:* ${occupation}
*Hobby:* ${hobby}

${footer}
    `;

    // Image to be included with the message
    const imageUrl = "https://files.catbox.moe/8xk20t.mp4"; // Replace with your actual image URL

    // Send the image with the final message as caption
    await message.send(imageUrl, { caption: finalMessage }, "img", message);
  }
);