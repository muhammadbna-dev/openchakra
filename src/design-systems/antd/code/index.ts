export const ANTD_PACKAGE_JSON_DEPS = `"antd": "^5.17.0",`

export const getAntdAppCode = (
  imports,
  iconImports,
  componentCodes,
  code,
) => `import React from 'react';
import {
  ChakraProvider,
  ${imports.join(',')}
} from "@chakra-ui/react";${
  iconImports.length
    ? `
import { ${iconImports.join(',')} } from "@chakra-ui/icons";`
    : ''
}

${componentCodes}

const App = () => (
  <ChakraProvider resetCSS>
    ${code}
  </ChakraProvider>
);

export default App;`
