/**
 * 将插件名称添加到规则中，形成新的规则键。
 *
 * 此函数的目的是为已有的规则对象中的每个规则键，添加一个前缀，这个前缀是插件的名称。
 * 这样做的目的是为了在使用这些规则时，能够明确规则的来源，或者是与特定插件相关联。
 *
 * @param pluginName 插件的名称，用于作为新规则键的前缀。
 * @param rules 原始的规则对象，其键值对将被用于生成新的带前缀的规则键。
 * @returns 返回一个新的对象，其中包含了原规则对象的所有规则，但是键名增加了插件名称的前缀。
 */
function addPluginNameToRules(
  pluginName: string,
  rules: Record<string, unknown>,
) {
  // 使用reduce方法遍历规则对象的键，生成新的带前缀的键值对，并合并到结果对象中。
  return Object.keys(rules).reduce(
    (result: Record<string, unknown>, key: string) => Object.assign(result, { [`${pluginName}/${key}`]: rules[key] }),
    {},
  );
}

/**
 * 为给定的规则或规则数组添加插件名称前缀。
 * 如果规则是一个数组，函数将对数组中的每个规则组应用addPluginNameToRules函数。
 * 这样做的目的是为了支持单个规则对象和规则对象数组的灵活处理。
 *
 * @param pluginName 插件的名称，用于作为规则键的前缀。
 * @param rules 单个规则对象或规则对象数组，它们的键将被添加插件名称前缀。
 * @returns 如果rules是一个数组，返回一个新对象，其中包含了每个规则组经过添加前缀处理后的结果；如果rules是一个对象，则直接返回添加前缀后的对象。
 */
export function addPluginName(
  pluginName: string,
  rules: Record<string, unknown> | Array<Record<string, unknown>>,
) {
  if (rules instanceof Array) {
    return rules.reduce(
      (result, group) => Object.assign(
        result,
        addPluginNameToRules(pluginName, group),
      ),
      {},
    );
  }
  return addPluginNameToRules(pluginName, rules);
}
