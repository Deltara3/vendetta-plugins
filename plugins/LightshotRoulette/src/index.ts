import { registerCommand } from "@vendetta/commands";
import Settings from "./Settings";

enum ApplicationCommandOptionType {
    SUB_COMMAND = 1,
    SUB_COMMAND_GROUP,
    STRING,
    INTEGER,
    BOOLEAN,
    USER6,
    CHANNEL,
    ROLE,
    MENTIONABLE,
    NUMBER,
    ATTACHMENT
}

let lightetteCmd = [];

function genUrl() {
    var url = "https://prnt.sc/";
    var string = "abcdefghijklmnoprstuxwyz0123456789";
    for (let i = 0; i < 6; i++) {
        url = url + string.charAt(Math.floor(Math.random() * string.length));
    }
    return url;
}

function creMsg(count) {
    var msg = "";
    for (let i = 0; i < count; i++) {
        msg = msg + `${genUrl()}\n`;
    }
    return msg;
}

export default {
    onLoad: () => {
        lightetteCmd = registerCommand({
            name: "lightette",
            displayName: "lightette",
            description: "Try your luck to see if you can find something interesting",
            displayDescription: "Try your luck to see if you can find something interesting",
            options: [{
                name: "count",
                displayName: "count",
                description: "Note: Discord doesn't embed more than 5 URLs",
                displayDescription: "Note: Discord doesn't embed more than 5 URLs",
                required: false,
                // @ts-ignore
                type: ApplicationCommandOptionType.INTEGER
            }],
            // @ts-ignore
            applicationId: -1,
            inputType: 1,
            type: 1,
            execute: (args, ctx) => {
                var count = 1;
                if (args[0] != undefined) count = args[0].value;
                return { content: creMsg(count) }
            }
        });
    },
    onUnload: () => {
        lightetteCmd();
    }
}
