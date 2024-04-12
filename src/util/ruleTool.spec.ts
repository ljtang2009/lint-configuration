import { describe, expect, it } from 'vitest';
import { addPluginName } from './ruleTools.js';

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
    expect(result).toEqual(expectedResult);
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
    expect(result).toEqual(expectedResult);
  });
});
