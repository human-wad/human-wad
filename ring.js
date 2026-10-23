/* human.wad ring redirects. Each of /next/, /prev/ and /random/ loads this
   with <html data-dir="...">, reads ?from=<name> and sends the visitor on.
   `from` may be a member's name or their site's hostname. Anything that
   can't be resolved (unknown member, ring of one) lands on the hub. */
(async () => {
  const dir = document.documentElement.dataset.dir;
  const hub = new URL("../", location.href).href;
  const go = url => location.replace(url);

  let members = [];
  try {
    const res = await fetch("../members.json", { cache: "no-store" });
    members = (await res.json()).filter(m => /^https?:\/\//.test(m.url));
  } catch (e) {
    return go(hub);
  }

  const from = (new URLSearchParams(location.search).get("from") || "").trim().toLowerCase();
  const host = u => { try { return new URL(u).hostname.replace(/^www\./, ""); } catch (e) { return ""; } };
  const i = from ? members.findIndex(m => m.name.toLowerCase() === from || host(m.url) === from.replace(/^www\./, "")) : -1;

  if (dir === "random") {
    const pool = members.filter((_, k) => k !== i);
    return go(pool.length ? pool[Math.floor(Math.random() * pool.length)].url : hub);
  }
  if (i < 0 || members.length < 2) return go(hub);
  const n = members.length;
  go(members[(i + (dir === "next" ? 1 : n - 1)) % n].url);
})();
