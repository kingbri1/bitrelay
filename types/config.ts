export interface AppConfig {
    twitch: {
        channelName: string;
        eventListener: boolean;
    };
    youtube: {
        channelName: string;
    };
    bridge: {
        pollLimitMs: number;
        pollIntervalMs: number;
    };
}
