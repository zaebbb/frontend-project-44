import globals from "globals";
import pluginJs from "@eslint/js";
/* eslint-disable */


export default [
  {languageOptions: { globals: globals.browser }},
  pluginJs.configs.recommended,
];