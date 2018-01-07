import hasYarn from 'has-yarn';
import execa from 'execa';

import ansiCommandStream from '../ansiCommandStream';

jest.mock('has-yarn');
jest.mock('execa');

describe('ansiCommandStream()', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  test('when yarn is installed use `yarn remove`', () => {
    hasYarn.__setHasYarn(true);
    ansiCommandStream({ args: ['remove', 'lodash'] });

    expect(execa).toHaveBeenCalledTimes(1);
    expect(execa).toHaveBeenCalledWith('yarn', ['remove', 'lodash']);
  });

  test('when yarn is not installed use `npm uninstall`', () => {
    hasYarn.__setHasYarn(false);
    ansiCommandStream({ args: ['remove', 'lodash'] });

    expect(execa).toHaveBeenCalledTimes(1);
    expect(execa).toHaveBeenCalledWith('npm', ['uninstall', 'lodash']);
  });

  test('when yarn is installed use `yarn add`', () => {
    hasYarn.__setHasYarn(true);
    ansiCommandStream({ args: ['add', 'lodash'] });

    expect(execa).toHaveBeenCalledTimes(1);
    expect(execa).toHaveBeenCalledWith('yarn', ['add', 'lodash']);
  });

  test('when yarn is not installed use `npm install --save`', () => {
    hasYarn.__setHasYarn(false);
    ansiCommandStream({ args: ['add', 'lodash'] });

    expect(execa).toHaveBeenCalledTimes(1);
    expect(execa).toHaveBeenCalledWith('npm', ['install', '--save', 'lodash']);
  });
});
