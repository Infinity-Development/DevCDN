// This file was generated by [ts-rs](https://github.com/Aleph-Alpha/ts-rs). Do not edit this file manually.

export type RPCMethod = { BotApprove: { bot_id: string, reason: string, } } | { BotDeny: { bot_id: string, reason: string, } } | { BotVoteReset: { bot_id: string, reason: string, } } | { BotVoteResetAll: { reason: string, } } | { BotUnverify: { bot_id: string, reason: string, } };