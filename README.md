# Learning CORS

Just one of the things I'm learning. <https://github.com/hchiam/learning>

## Tutorial

Set CORS on a server: <https://web.dev/cross-origin-resource-sharing>

### How CORS works

<https://web.dev/cross-origin-resource-sharing/#how-does-cors-work>

browser sends `Origin` -> server responds with `Access-Control-Allow-Origin` -> browser (dis)allows response data to client site

### Demo

<https://glitch.com/edit/#!/cors-demo-hchiam?path=server.js>

<https://cors-demo-hchiam.glitch.me/>

- Go to some other URL (for example, a blank page or <https://www.wikipedia.org/>).
- Open the console log of developer tools in your browser.
- Enter this: `var a = fetch('https://cors-demo.glitch.me/', {mode:'cors'}); a;`
  - This should be **blocked** by CORS.
  - It's blocked because the `server.js` response is only simply `response.sendFile(__dirname + '/message.json');`
- Enter this: `var b = fetch('https://cors-demo.glitch.me/allow-cors', {mode:'cors'}); await b;`
  - This should **not** be blocked by CORS.
  - Any origin is allowed because the `server.js` also sets a header `response.set('Access-Control-Allow-Origin', '*');` in the response before sending the response `response.sendFile(__dirname + '/message.json');`.

### Other notes

<https://web.dev/cross-origin-resource-sharing/#share-credentials-with-cors>

- **Sending credentials cookies with CORS (unusual)** requires additional headers:
  - Request: `credentials: 'include'` (For example: `fetch('https://example.com', { mode: 'cors', credentials: 'include' })`)
  - Response: `Access-Control-Allow-Origin` must be specific origin and you must incldue `Access-Control-Allow-Credentials: true`.
