import { setupTwitch } from "#/common/twitch/setup.js";
import { setupEventListener } from "#/common/twitch/eventListener.js";
import { setupCommands } from "#/common/twitch/manualHandler.js";
import { setupYoutube } from "#/common/youtube/setup.js";
import { config, loadConfig } from "#/common/config.js";

await loadConfig();

// Populate platforms
const twitch = await setupTwitch(config.twitch.channelName);
const youtube = await setupYoutube(config.youtube.channelName);

// Setup listners and commands
if (config.twitch.eventListener) {
    await setupEventListener(twitch, youtube);
}

await setupCommands(twitch, youtube);

console.log(
    `Bridging chat from YouTube channel ${config.youtube.channelName} ` +
        `and Twitch channel ${config.twitch.channelName}`,
);
