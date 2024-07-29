import {
  describe, it, expect,
} from 'vitest';
import { addPluginName } from '@/util/ruleTools.ts';

describe('addPluginName', () => {
  it('should add plugin name to rules object', () => {
    const pluginName = 'myPlugin';
    const rules = {
      rule1: {},
      rule2: {},
    };
    const expectedResult = {
      'myPlugin/rule1': {},
      'myPlugin/rule2': {},
    };
    const result = addPluginName(pluginName, rules);
    expect(result).toStrictEqual(expectedResult);
  });

  it('should add plugin name to rules array', () => {
    const pluginName = 'myPlugin';
    const rules = [
      {
        rule1: {},
      },
      {
        rule2: {},
      },
    ];
    const expectedResult = {
      'myPlugin/rule1': {},
      'myPlugin/rule2': {},
    };
    const result = addPluginName(pluginName, rules);
    expect(result).toStrictEqual(expectedResult);
  });
});
