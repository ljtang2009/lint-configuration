import _ from 'lodash';

const pluginNameArray = [
  undefined,
  '@stylistic',
  '@stylistic/eslint-plugin-plus',
  '@stylistic/js',
  '@stylistic/ts',
  '@typescript-eslint',
];

/**
 * 从规则名称中解析出不包含插件部分的规则名称。
 * @param ruleName - 待处理的规则名称，可以包含插件名称。
 * @returns 包含插件名称（如果存在）、不包含插件的规则名称以及原始规则名称的对象。
 * @throws 如果输入的规则名称不是非空字符串，则抛出错误。
 */
function getRuleNameWithoutPlugin(ruleName: string): { pluginName: string | undefined; ruleNameWithoutPlugin: string; ruleName: string } {
  // 处理规则名称中包含 '/' 的情况，即包含插件名称
  if (ruleName.includes('/')) {
    // 使用 '/' 分割字符串以获取插件名称和规则名称
    const ruleNameSubArray = ruleName.split('/');
    // 获取插件名称，排除最后一个元素（规则名称）和第一个元素（可能为空字符串）
    const pluginName = ruleNameSubArray.slice(0, -1).join('/');

    // 返回解析后的结果
    return {
      pluginName,
      ruleNameWithoutPlugin: ruleNameSubArray[ruleNameSubArray.length - 1]!,
      ruleName,
    };
  }

  // 如果规则名称不包含 '/'，则认为没有插件部分，直接返回规则名称
  return {
    pluginName: undefined,
    ruleNameWithoutPlugin: ruleName,
    ruleName,
  };
}

/**
 * 根据提供的规则名称（不包含插件信息）从规则集合中获取匹配的规则列表。
 * @param rules - 包含多个规则名称的对象键值对。
 * @param newRuleName - 需要匹配的规则名称，可能包含插件信息。
 * @returns 返回一个包含匹配规则名称的数组；如果无匹配或发生错误，则返回空数组。
 */
function getRulesWithRuleNameWithoutPlugin(rules: Object, newRuleName: string): Array<string> {
  // 尝试从新规则名称中移除插件信息
  const ruleInfo = getRuleNameWithoutPlugin(newRuleName);
  // 确保不直接覆盖外部变量
  const newRuleNameWithoutPlugin = ruleInfo.ruleNameWithoutPlugin;

  const ruleNames = new Set(Object.keys(rules)); // 使用 Set 提高查找效率
  const result = [];

  for (const ruleName of ruleNames) {
    // 尝试从当前规则名称中移除插件信息
    const ruleInfo = getRuleNameWithoutPlugin(ruleName);
    const { ruleNameWithoutPlugin } = ruleInfo;

    // 如果规则名称（不包含插件信息）匹配，则将规则名称添加到结果列表中
    if (newRuleNameWithoutPlugin === ruleNameWithoutPlugin) {
      result.push(ruleName);
    }
  }

  return result;
}

/**
 * 根据插件规则禁用规则
 * @param rules - 原始规则对象，键为规则名称，值为规则状态（如'off'或'on'）
 * @param ruleNameList - 规则名称列表，需根据插件顺序禁用除最后一个外的所有规则
 * @returns 修改后的规则对象，禁用了除列表中最后一个规则外的所有规则
 */
function disableDuplicatedRuleByPluginOrder(rules: Record<string, unknown>, ruleNameList: Array<string>): Record<string, unknown> {
  /**
   * @type {Array<{ruleName: string, sort: number}>}
   */
  const ruleNameWithOrderList: Array<{ ruleName: string; sort: number }> = [];
  // 为每个规则添加插件序号
  ruleNameList.forEach((ruleName) => {
    const { pluginName } = getRuleNameWithoutPlugin(ruleName); // 解构获取插件名
    const sort = pluginNameArray.indexOf(pluginName); // 获取插件在数组中的索引
    if (sort !== -1) { // 如果插件存在于数组中，则添加到ruleNameWithOrderList
      ruleNameWithOrderList.push({
        ruleName,
        sort,
      });
    }
  });
  const newRules = _.cloneDeep(rules); // 深拷贝原始规则对象，以避免修改原始对象
  if (ruleNameWithOrderList.length > 1) {
    // 根据插件序号升序排序
    ruleNameWithOrderList.sort((a, b) => a.sort - b.sort);
    // 禁用除列表中最后一个规则外的所有规则
    for (let i = 0; i < ruleNameWithOrderList.length - 1; i++) {
      newRules[ruleNameWithOrderList[i]!.ruleName] = 'off';
    }
  }
  return newRules;
}

/**
 * 禁用重复的 ESLint 规则，按照给定的插件名称数组顺序进行禁用。
 * @param {Object[]} eslintConfig - ESLint 配置对象数组，每个对象包含一个 `rules` 属性，该属性是一个规则名称到规则设置的映射。
 * @returns {Object[]} 修改后的 ESLint 配置对象数组，其中重复的规则根据插件顺序被禁用。
 */
function disableDuplicatedRules(eslintConfig: Array<{ rules: Record<string, unknown> }>): Array<{ rules: Record<string, unknown> }> {
  // 深拷贝 ESLint 配置，以避免修改原始配置
  const localESLintConfig = _.cloneDeep(eslintConfig);
  for(const eslintConfigElement of localESLintConfig) {
    // 用于存储已检查过的不带插件名的规则名称
    const hasCheckedRuleNameWithoutPlugin: string[] = [];
    // 遍历当前 ESLint 配置项中的所有规则
    if (eslintConfigElement.rules !== undefined) {
      Object.keys(eslintConfigElement.rules).forEach((ruleName) => {
        const { ruleNameWithoutPlugin } = getRuleNameWithoutPlugin(ruleName);
        // 如果该不带插件名的规则名称尚未被检查
        if (!hasCheckedRuleNameWithoutPlugin.includes(ruleNameWithoutPlugin)) {
          hasCheckedRuleNameWithoutPlugin.push(ruleNameWithoutPlugin);
          // 根据不带插件名的规则名称，查找所有相关的规则
          const rulesSearchByRuleNameWithoutPlugin = getRulesWithRuleNameWithoutPlugin(eslintConfigElement.rules, ruleName);
          // 根据插件规则禁用重复的规则
          eslintConfigElement.rules = disableDuplicatedRuleByPluginOrder(eslintConfigElement.rules, rulesSearchByRuleNameWithoutPlugin);
        }
      });
    }
  }
  return localESLintConfig;
}

export default disableDuplicatedRules;
