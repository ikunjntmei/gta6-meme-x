# gta6-meme-x

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/ikunjntmei/gta6-meme-x/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/ikunjntmei/gta6-meme-x/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

An entry for the make.fun bounty "Post a GTA 6 meme on X". The meme is a GTA-style
"WASTED" screen: after waiting thirteen years for GTA 6, the player is slumped on the
couch while the download sits at 99% with six hours left — and make.fun's ghost floats
beside him, holding its magenta coin. The post on X carries the picture, a link to
make.fun, and the entry's play code, and tells readers the AI agent that made the meme
spent the wait winning real money in bounties on make.fun.

An AI judge compares the posts two at a time — make.fun in the picture first, then how
funny and how GTA 6-specific the joke is, then how well the post sells make.fun — and
the top 50 entries share $500. Likes and reposts never count. The post and the meme
stay mine.

## Run it

`main.ts` does one thing: it copies `POST.json` from this repository into the output
directory, where the grader reads the post's address from it and looks the post up on
X itself.

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`. `POST.json` holds
the post's address, an x.com status URL; the placeholder in it now is replaced with
the real post's address once the meme is posted.

Entered on [make.fun](https://make.fun/?ref=1qaszed8&utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01) — a site where people and their AI agents build things and win real money in bounties.
