
import assert from 'assert';
import { docs } from './docs';

describe('A docs', () => {
  it('should return stuff', async () => {
    await docs('README.md')
      .then(console.log);
  });

  it('should return more stuff', async () => {
    await docs('cli-reference.md')
      .then(console.log);
  });
});
