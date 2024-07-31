import {
  describe, it, expect, vi, beforeEach,
} from 'vitest';
import { fs, vol } from 'memfs';
import open from 'open';
import showJSONWithBrowser from '@/util/showJSONWithBrowser.ts';

describe('show json with browser function', () => {
  // TODO 本地测试的时候用__mocks__没问题。但是在github actions中会失效（mock不上），只能用factory模式
  // vi.mock('node:fs')
  vi.mock('node:fs', () => {
    return {
      default: fs,
    };
  });
  vi.mock('open');
  beforeEach(() => {
    vol.reset();
  });

  it('should write HTML content to temp file', () => {
    showJSONWithBrowser({ key: 'value123' });
    let htmlString = '';
    const volJSON = vol.toJSON();
    console.warn('volJSON :>> ', volJSON);
    const filePathList = Object.keys(volJSON);
    if (filePathList.length > 0) {
      htmlString = volJSON[filePathList[0]!]!;
    }
    expect(htmlString).toContain('value123');
  });

  it('should open the temp file in the default browser', () => {
    showJSONWithBrowser({ key: 'value' });
    expect(open).toHaveBeenCalled();
  });
});
