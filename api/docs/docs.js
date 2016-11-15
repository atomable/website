'use strict';

import https from 'https';
import showdown from 'showdown';

/**
 * docs() returns a message
 * based on the passed-in firstName
 */
export const docs = (url) => {
  return new Promise((resolve, reject) => https.get('https://raw.githubusercontent.com/atomable/atomable/master/docs/' + url,
    res => {
      if (res.statusCode !== 200) {
        reject(res);
      } else {
        res.setEncoding('utf8');

        let rawData = '';
        res.on('data', (chunk) => rawData += chunk);
        res.on('end', () => {
          const converter = new showdown.Converter();
          const html = converter.makeHtml(rawData);
          const response = {
            statusCode: 200,
            headers: {
              "Access-Control-Allow-Origin": "*" // Required for CORS support to work
            },
            body: html
          };
          resolve(response);
        });

        res.on('error', (e) => {
          reject(`Got error: ${e.message}`);
        });
      }
    }));
};