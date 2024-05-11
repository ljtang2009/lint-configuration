import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import open from 'open';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

function show(jsonObj: Object, filename = 'temp.html') {
  const tempFilePath = path.join(__dirname, `../../.temp/${filename}`);
  fs.writeFileSync(tempFilePath, `
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>JSON Data</title>
    <style>
      pre {
        white-space: pre-wrap;
      }
    </style>
  </head>
  <body>
    <pre id="json-data">${JSON.stringify(jsonObj, null, 2)}</pre>
    <script>
      document.title = document.getElementById('json-data').innerText;
    </script>
  </body>
  </html>
  `);
  open(tempFilePath);
}

export default show;
