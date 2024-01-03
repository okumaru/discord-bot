# discord-bot

![Bot Result](https://i.imgur.com/1pHraif.png)

Example discord bot code to interact on your discord server.

## Env variable
```
DISCORD_TOKEN=discord-bot-token
CLIENT_ID=discord-bot-client-id
GUILD_ID=discord-server-id
```

## 1. Install dependencies:

```bash
bun install
```

## 2. Deploy/Register commands guild:
```bash
bun run deploy-commands.ts
```
expected result:
```
Started refreshing 3 application (/) commands.
Successfully reloaded 3 application (/) commands.
```

## 3. Run discord bot:
```bash
bun run bot.ts
```
expected result:
```
Ready! Logged in as xxx#nnnn
```

### More documentation.
- [setup discord bot](https://discordjs.guide/preparations/setting-up-a-bot-application.html#token-leak-scenario)
- [add discord bot to server](https://discordjs.guide/preparations/adding-your-bot-to-servers.html#bot-invite-links)
- [Create discord bot command](https://discordjs.guide/creating-your-bot/main-file.html#running-your-application)

---
This project was created using `bun init` in bun v1.0.20. [Bun](https://bun.sh) is a fast all-in-one JavaScript runtime.