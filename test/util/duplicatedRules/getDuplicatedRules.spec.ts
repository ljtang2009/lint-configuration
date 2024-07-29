import getDuplicatedRules, { type RuleObject } from '@/util/duplicatedRules/getDuplicatedRules.ts';
import {
  describe, it, expect,
} from 'vitest';

describe('getDuplicatedRules', () => {
  it('should return an empty array when there are no duplicated rules', () => {
    const ruleObjectArray: RuleObject[] = [
      { rule1: true },
      { rule2: false },
      { rule3: true },
    ];
    const duplicatedRules = getDuplicatedRules(ruleObjectArray);
    expect(duplicatedRules).toEqual([]);
  });

  it('should return an array with duplicated rules', () => {
    const ruleObjectArray: RuleObject[] = [
      { rule1: true },
      { rule1: false },
      { rule2: true },
      { rule2: false },
      { rule3: true },
    ];
    const duplicatedRules = getDuplicatedRules(ruleObjectArray);
    expect(duplicatedRules).toEqual([
      {
        ruleNameWithoutPlugin: 'rule1',
        rules: [
          { rule1: true },
          { rule1: false },
        ],
      },
      {
        ruleNameWithoutPlugin: 'rule2',
        rules: [
          { rule2: true },
          { rule2: false },
        ],
      },
    ]);
  });

  it('should handle rules with plugin names', () => {
    const ruleObjectArray: RuleObject[] = [
      { rule1: true },
      { 'plugin1/rule1': true },
      { 'plugin2/rule1': false },
      { 'plugin2/sub1/rule1': false },
      { 'plugin2/rule2': true },
      { 'plugin2/rule2': false },
    ];
    const duplicatedRules = getDuplicatedRules(ruleObjectArray);
    expect(duplicatedRules).toEqual([
      {
        ruleNameWithoutPlugin: 'rule1',
        rules: [
          { rule1: true },
          { 'plugin1/rule1': true },
          { 'plugin2/rule1': false },
          { 'plugin2/sub1/rule1': false },
        ],
      },
      {
        ruleNameWithoutPlugin: 'rule2',
        rules: [
          { 'plugin2/rule2': true },
          { 'plugin2/rule2': false },
        ],
      },
    ]);
  });
});
