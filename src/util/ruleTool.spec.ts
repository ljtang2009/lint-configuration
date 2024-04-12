import { describe, expect, it } from '@jest/globals';
import { addPluginName } from './ruleTools';

describe('addPluginName', () => {
  it('should add plugin name to rules object', () => {
    expect.hasAssertions();
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
    expect.hasAssertions();
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
