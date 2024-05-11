type RuleObject = Record<string, unknown>;

// 用于存储重复规则的对象接口
interface DuplicatedRules {
  ruleNameWithoutPlugin: string;
  rules: RuleObject[];
}

// 包含插件名称与规则信息的接口
interface ruleInfoWithpluginName {
  pluginName: string | undefined;
  ruleNameWithoutPlugin: string;
  ruleName: string;
}

/**
 * 从规则名称中解析出插件名称与规则本身的名称。
 * @param ruleName - 规则名称，可能包含插件名称。
 * @returns 返回一个对象，包含插件名称、不含插件名称的规则名称和完整的规则名称。
 */
function getRuleNameWithoutPlugin(ruleName: string): ruleInfoWithpluginName {
  if (ruleName.includes('/')) {
    const ruleNameSubArray = ruleName.split('/');
    let pluginName = '';
    // 构建插件名称
    for (let i = 0; i < ruleNameSubArray.length; i++) {
      if (i < ruleNameSubArray.length - 1) {
        if (i > 0) {
          pluginName += '/';
        }
        pluginName += ruleNameSubArray[i]!;
      } else {
        // 返回解析后的结果
        return {
          pluginName,
          ruleNameWithoutPlugin: ruleNameSubArray[i]!,
          ruleName,
        };
      }
    }
  }
  // 如果规则名称不包含'/', 则插件名称为undefined
  return {
    pluginName: undefined,
    ruleNameWithoutPlugin: ruleName,
    ruleName,
  };
}

/**
 * 检测并获取重复的规则对象。
 * @param ruleObjectArray - 规则对象数组。
 * @returns 返回一个包含重复规则的数组。
 */
function getDuplicatedRules(
  ruleObjectArray: RuleObject[],
): DuplicatedRules[] {
  // 使用 Map 以规则名称（不包含插件名称）为键存储规则对象数组
  const ruleGroupByNameWithoutPlugin = new Map<string, RuleObject[]>();

  // 遍历规则对象数组，为每个规则建立映射
  ruleObjectArray.forEach((ruleObject) => {
    Object.keys(ruleObject).forEach((ruleName) => {
      // 解析规则名称
      const {
        ruleNameWithoutPlugin,
      } = getRuleNameWithoutPlugin(ruleName);
      // 存储或更新规则对象数组
      const existingRule = ruleGroupByNameWithoutPlugin.get(ruleNameWithoutPlugin);
      if (existingRule !== undefined) {
        // 规则已存在，添加到已存在的规则数组中
        existingRule.push({ [ruleName]: ruleObject[ruleName] });
      } else {
        ruleGroupByNameWithoutPlugin.set(
          ruleNameWithoutPlugin,
          [{ [ruleName]: ruleObject[ruleName] }],
        );
      }
      // }
    });
  });

  // 构建并返回重复规则数组
  const result: DuplicatedRules[] = [];
  ruleGroupByNameWithoutPlugin.forEach((ruleObjectArray, ruleNameWithoutPlugin) => {
    if (ruleObjectArray.length > 1) {
      result.push({
        ruleNameWithoutPlugin,
        rules: ruleObjectArray,
      });
    }
  });
  return result;
}

export default getDuplicatedRules;
export type { RuleObject };
