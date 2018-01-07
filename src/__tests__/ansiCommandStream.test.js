import hasYarn from 'has-yarn';
import execa from 'execa';

import ansiCommandStream from '../ansiCommandStream';

jest.mock('has-yarn');
jest.mock('execa');

describe('ansiCommandStream()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('with yarn installed', () => {
    beforeAll(() => {
      hasYarn.__setHasYarn(true);
    });

    test('use `yarn remove`', () => {
      ansiCommandStream({ args: ['remove', 'lodash'] });

      expect(execa).toHaveBeenCalledTimes(1);
      expect(execa).toHaveBeenCalledWith('yarn', ['remove', 'lodash']);
    });
    test('use `yarn add`', () => {
      ansiCommandStream({ args: ['add', 'lodash'] });

      expect(execa).toHaveBeenCalledTimes(1);
      expect(execa).toHaveBeenCalledWith('yarn', ['add', 'lodash']);
    });
  });

  describe('when yarn is NOT installed', () => {
    beforeAll(() => {
      hasYarn.__setHasYarn(false);
    });

    test('use `npm uninstall`', () => {
      ansiCommandStream({ args: ['remove', 'lodash'] });

      expect(execa).toHaveBeenCalledTimes(1);
      expect(execa).toHaveBeenCalledWith('npm', ['uninstall', 'lodash']);
    });

    test('use `npm install --save`', () => {
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
