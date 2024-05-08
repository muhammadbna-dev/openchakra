import type { Project } from '@stackblitz/sdk';
import sdk from '@stackblitz/sdk';
import { getPackageJsonDeps } from '~design-systems/factory';

const INDEX_HTML = (isTypeScript) => `
<!DOCTYPE html>
<html lang="en">

<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>React App</title>
</head>

<body>
	<div id="root"></div>
    <script type="module" src="/src/index.${isTypeScript ? 'tsx' : 'jsx'}"></script>
</body>

</html>
`;

const INDEX_JS = `
import React from "react";
import ReactDOM from "react-dom";

import App from "./App";

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
`;

const VITE_CONFIG = `
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()]
})
`

export const launchStackblitzProject = (isTypeScript: boolean, code: string, designSystems): Project => {
    const tsDeps = {
        "typescript": "^5.4.5",
        "@types/react": "^18.3.1",
        "@types/react-dom": "^18.3.0",
    }

    const packageJson = {
        "name": "react",
        "version": "1.0.0",
        "dependencies": {
            "react": "^18.3.1",
            "react-dom": "^18.3.1",
        },
        "devDependencies": {
            "@vitejs/plugin-react": "^4.2.1",
            "vite": "^5.2.11",
        },
        "scripts": {
            "dev": "vite",
        }
    }

    if (isTypeScript) {
        packageJson.devDependencies = {...packageJson.devDependencies, ...tsDeps}
    }

    packageJson.dependencies = {...packageJson.dependencies, ...getPackageJsonDeps(designSystems)}

    sdk.openProject({
        title: 'Your site',
        description: 'Download the code from Stackblitz',
        template: 'node',
        dependencies: packageJson.dependencies,
        files: {
            'package.json':  JSON.stringify(packageJson, null, 2),
            'index.html': INDEX_HTML(isTypeScript),
            [`vite.config.${isTypeScript ? 'ts' : 'js'}`]: VITE_CONFIG,
            [`src/index.${isTypeScript ? 'tsx' : 'jsx'}`]: INDEX_JS,
            [`src/App.${isTypeScript ? 'tsx' : 'jsx'}`]: code,
        },
    })
}