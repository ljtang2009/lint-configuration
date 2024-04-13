import jsonc from './jsonc.js';
import extension from './extension.js';
import { addPluginName } from '../../../util/ruleTools.js';

const ruleGroups = [jsonc, extension];

function getRules(pluginName: string): Record<string, unknown> {
  return addPluginName(pluginName, ruleGroups);
}

export default { getRules };
