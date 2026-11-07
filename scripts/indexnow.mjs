import fs from 'fs';
import path from 'path';

const INDEXNOW_KEY = 'b78e24c9f13a40d5861b539a2d847e10';
const HOST = 'nilaiut.com';
const KEY_LOCATION = `https://${HOST}/${INDEXNOW_KEY}.txt`;

async function submitToIndexNow() {
  console.log('--- Submitting URLs to IndexNow (Bing, Yandex, Naver, Seznam) ---');

  // Read sitemap.xml to extract all URLs
  const sitemapPath = path.join(process.cwd(), 'public', 'sitemap.xml');
  const sitemapContent = fs.readFileSync(sitemapPath, 'utf-8');

  const locRegex = /<loc>(https?:\/\/[^<]+)<\/loc>/g;
  const urlList = [];
  let match;

  while ((match = locRegex.exec(sitemapContent)) !== null) {
    urlList.push(match[1]);
  }

  console.log(`Found ${urlList.length} URLs in sitemap.xml to submit:`);
  urlList.forEach((url) => console.log(`  - ${url}`));

  const payload = {
    host: HOST,
    key: INDEXNOW_KEY,
    keyLocation: KEY_LOCATION,
    urlList: urlList,
  };

  const endpoints = [
    'https://api.indexnow.org/indexnow',
    'https://www.bing.com/indexnow',
  ];

  for (const endpoint of endpoints) {
    try {
      console.log(`\nPinging ${endpoint}...`);
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(payload),
      });

      console.log(`Response Status: ${response.status} ${response.statusText}`);
      if (response.status === 200 || response.status === 202) {
        console.log(`✓ Successfully accepted by ${endpoint}!`);
      } else {
        const text = await response.text();
        console.log(`Notice: ${text}`);
      }
    } catch (err) {
      console.error(`Error pinging ${endpoint}:`, err.message);
    }
  }

  console.log('\n--- IndexNow Submission Process Complete ---');
}

submitToIndexNow();
