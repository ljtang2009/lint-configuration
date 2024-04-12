function addPluginNameToRules(
  pluginName: string,
  rules: Record<string, unknown>,
) {
  return Object.keys(rules).reduce(
    (result: Record<string, unknown>, key: string) => Object.assign(result, { [`${pluginName}/${key}`]: rules[key] }),
    {},
  );
}

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
