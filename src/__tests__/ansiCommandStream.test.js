import hasYarn from 'has-yarn';
import execa from 'execa';

import ansiCommandStream from '../ansiCommandStream';

jest.mock('has-yarn');
jest.mock('execa');

describe('ansiCommandStream()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('with yarn', () => {
    beforeAll(() => {
      hasYarn.__setHasYarn(true);
    });

    test('uses `yarn remove`', () => {
      ansiCommandStream({ args: ['remove', 'lodash'] });

      expect(execa).toHaveBeenCalledTimes(1);
      expect(execa).toHaveBeenCalledWith('yarn', ['remove', 'lodash']);
    });
    test('uses `yarn add`', () => {
      ansiCommandStream({ args: ['add', 'lodash'] });

      expect(execa).toHaveBeenCalledTimes(1);
      expect(execa).toHaveBeenCalledWith('yarn', ['add', 'lodash']);
    });
  });

  describe('without yarn', () => {
    beforeAll(() => {
      hasYarn.__setHasYarn(false);
    });

    test('uses `npm uninstall`', () => {
      ansiCommandStream({ args: ['remove', 'lodash'] });

      expect(execa).toHaveBeenCalledTimes(1);
      expect(execa).toHaveBeenCalledWith('npm', ['uninstall', 'lodash']);
    });

    test('uses `npm install --save`', () => {
      ansiCommandStream({ args: ['add', 'lodash'] });

      expect(execa).toHaveBeenCalledTimes(1);
      expect(execa).toHaveBeenCalledWith('npm', [
        'install',
        '--save',
        'lodash',
      ]);
    });
  });
});
