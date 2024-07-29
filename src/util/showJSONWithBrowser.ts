import { fileURLToPath } from 'node:url';
import path from 'node:path';
import fs from 'node:fs';
import open from 'open';
import xss from 'xss';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * 根据提供的JSON数据生成一个包含该数据的HTML页面。
 * 页面会以预格式化的方式显示JSON数据，并将数据作为页面标题。
 *
 * @param jsonData - 以字符串形式表示的JSON数据。
 * @returns 返回一个包含JSON数据的HTML页面的字符串。
 */
function generateHtml(jsonData: string): string {
  return `
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
    <pre id="json-data">${jsonData}</pre>
    <script>
      document.title = document.getElementById('json-data').innerText;
    </script>
  </body>
  </html>
  `;
}

/**
 * 将JSON对象渲染为HTML并展示在浏览器中。
 * @param jsonObj 要展示的JSON对象。
 * @param filename 生成的HTML文件名，默认为'temp.html'。
 */
function show(jsonObj: Object, filename = 'temp.html') {
  const tempDir = path.join(__dirname, '../../.temp');
  const tempFilePath = path.join(tempDir, filename);
  // 确保临时目录存在
  if (!fs.existsSync(tempDir)) {
    fs.mkdirSync(tempDir, { recursive: true });
  }
  const jsonData = xss(JSON.stringify(jsonObj, null, 2));
  const htmlContent = generateHtml(jsonData);
  fs.writeFileSync(tempFilePath, htmlContent);

  open(tempFilePath);
}

export default show;
