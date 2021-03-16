REM react basic packages
npm link @babel/polyfill react react-dom @babel/cli @babel/core 
npm link @babel/plugin-proposal-class-properties @babel/preset-env 
npm link @babel/preset-react axios babel-loader css-loader react-hot-loader style-loader 
npm link transfer-webpack-plugin url-loader webpack webpack-cli 
REM material UI
npm link @material-ui/core @material-ui/icons
REM　react-markdown: input .ipynb, then render the markdown doc
npm link react-markdown
REM json-loader to load .ipynb as json objects, as defined in webpack.config.js
npm link json-loader
REM copy-webpack-plugin for ignoring files while npm run build
npm link copy-webpack-plugin
REM react-router-dom
npm link react-router-dom
REM Other tools
npm link react-scroll-up