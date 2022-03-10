/**
 * The website's details and links.
 */
import { Environments, EnvironmentType } from "../data/Environments";
import { Flags, FlagType } from "../data/Flags";
import { Keyed } from "./Keyed";

export const SiteDetails = {
    "title": "flags.sh",
    "description": "A simple script generator to start your Minecraft servers with optimal flags.",
    "favicon": "/favicon.ico",
    "logo": "/asset/logo.png",
    "links": {
        "github": "https://github.com/Encode42/flags.sh",
        "support": "https://encode42.dev/support"
    }
};

function findKey<T extends Keyed>(set: T[], key: string): T {
    let result;

    for (const value of set) {
        if (key === value.key) {
            result = value;
            break;
        }
    }

    return result;
}

export function findEnvironment(key: string) {
    return findKey<EnvironmentType>(Environments.types, key);
}

export function findFlag(key: string) {
    return findKey<FlagType>(Flags.types, key);
}
