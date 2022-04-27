const KongouEvent = require("../abstract/BaseEvent.js");
class Ready extends KongouEvent {
    get name() {
        return "ready";
    }
    get once() {
        return !0;
    }
    async run() {
        this.client.user.setActivity({ name: "*help - green-bot.app", type: "WATCHING" }),
            setInterval(() => {
                this.client.user.setActivity("*help - green-bot.app", { type: "WATCHING" });
            }, 1e3 * 60 * 30);
    }
}
module.exports = Ready;