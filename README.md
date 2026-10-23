# human.wad

The webring for [wheresallthedata.fyi](https://wheresallthedata.fyi), served at
[human.wheresallthedata.fyi](https://human.wheresallthedata.fyi). Fully static (GitHub Pages).

## Members

Membership travels by word of mouth. Admins add people to [`members.json`](members.json):

```json
{ "name": "your-name", "url": "https://your-site.example" }
```

Order in the file is order on the ring.

## Links for your site

```html
<a href="https://human.wheresallthedata.fyi/prev/?from=your-name">&larr; prev</a>
<a href="https://human.wheresallthedata.fyi/">
  <img src="https://human.wheresallthedata.fyi/badge.png" width="88" height="31" alt="human.wad">
</a>
<a href="https://human.wheresallthedata.fyi/random/?from=your-name">random</a>
<a href="https://human.wheresallthedata.fyi/next/?from=your-name">next &rarr;</a>
```

`from` takes your name or your site's hostname. Unknown names land on the hub.
Badge art by Harsha.
