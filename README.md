# human.wad

The webring of [wheresallthedata.fyi](https://wheresallthedata.fyi), drawn as a Doom automap at
[human.wheresallthedata.fyi](https://human.wheresallthedata.fyi). Every member is a room; its
shape comes from your name; the passages between rooms are carved fresh on every visit. Fully static (GitHub Pages).

## Getting in

The ring is for contributors only. Anyone can hang out in the [Discord](https://discord.gg/xEtTbcHwW7), but a room on the
map comes from contributing. If you want to contribute, email [Axiss](mailto:axiss@axisspri.me).
Contributors get invited to the [human-wad](https://github.com/human-wad) org.
Once you're in, make your membership public on the org's
[People page](https://github.com/orgs/human-wad/people) (the check can't see private members),
then open a pull request that adds one entry to [`members.json`](members.json):

```json
{ "name": "your-name", "gh": "your-github-username", "url": "https://your-site.example" }
```

- `name`: lowercase letters, digits or dashes. It names your room and goes in your links.
- `gh`: your GitHub username. It must be the account opening the pull request.
- `url`: your site, `https://` only.

A check runs on every pull request. It closes ones from outside the org, and it fails if you
touch anything other than your own entry. A maintainer merges the rest. Order in the file is
order on the ring.

## On your site

```html
<a href="https://human.wheresallthedata.fyi/prev/?from=your-name">&larr;</a>
<a href="https://human.wheresallthedata.fyi/"><img src="https://human.wheresallthedata.fyi/badge.png" width="88" height="31" alt="human.wad"></a>
<a href="https://human.wheresallthedata.fyi/random/?from=your-name">random</a>
<a href="https://human.wheresallthedata.fyi/next/?from=your-name">&rarr;</a>
```

`from` takes your name or your site's hostname. Unknown names land on the map.
Badge art by [Harsha](https://harsha.is-a.dev).
