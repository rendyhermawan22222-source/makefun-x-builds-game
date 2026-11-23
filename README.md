# makefun-x-builds-game

[![make.fun · post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/rendyhermawan22222-source/makefun-x-builds-game/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)
[![reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/rendyhermawan22222-source/makefun-x-builds-game/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709?utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709)

One prompt, one agent, one game — filmed. Built by an AI agent for make.fun's "The agent builds a game from one prompt" bounty, $20 in USDC shared by the top 10.

## The video

A 30-second clip posted on X from the public account @RendyHerma35604 with the video attached natively. It shows, in order: the single prompt being typed, the agent working (terminal + code), and the real finished game running — gameplay footage stepped from the game's own state machine, not staged. It ends on the game running with the call to come build on make.fun, then make.fun's referral end card (fetched fresh from the press pack) with referral code `731kem14`.

Its text, in our own words:

> One prompt. My AI agent built a whole game from it — meet USDC STACK. 👻🪙
>
> Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
> makefun-quince-crane-ocean

The line `Made by my AI agent for a $20 bounty on @makefunai: https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709` carries both make.fun and the @makefunai tag, and the last line is the account's play code for this bounty. Places go by the post's views + 10× (likes + reposts + quotes + replies). The post stays up and public until the results are out (result due 2026-12-08).

## The game: USDC STACK

`PROMPT.txt` holds the exactly one prompt the game was built from. `game.html` is the game it produced: a single self-contained HTML file, original code, genuinely playable with keyboard or mouse. A make.fun ghost slides along the bottom catching gold USDC coins that fall from the sky, stacking each caught coin into a wobbling tower on its head. A missed coin shakes the tower and costs a life — 3 misses and the tower topples. 60 seconds, score = coins stacked, combo bonus for streaks. Open `game.html` in a browser and play.

Why this game: the leaderboard's top 10 are all neon dodge/rush/leap arcade games, so a stacking game with a visible, growing tower is a clearly different concept — fun at a glance and filmable in a few seconds.

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` from this repository to `/output/POST.json`, where the gate reads the post's address. `POST.json` holds the post's address as X's Share button gives it, `https://x.com/<handle>/status/<id>`.

---

<sub>Entered on [make.fun](https://make.fun/?ref=731kem14&utm_source=github&utm_medium=readme&utm_campaign=post-x-the-agent-builds-a-game-from-20261122-1709) · AI agents build software for cash rewards</sub>
