# react-ninja-message

![npm](https://img.shields.io/npm/v/react-ninja-message) ![npm bundle size](https://img.shields.io/bundlephobia/min/react-ninja-message) ![GitHub top language](https://img.shields.io/github/languages/top/orenef/react-ninja-message) ![npm](https://img.shields.io/npm/dt/react-ninja-message) ![NPM](https://img.shields.io/npm/l/react-ninja-message)

react-ninja-message is a react component with zero dependencies, That present animated ninja with your custom message.  

[See demo at codesandbox](https://okrzh.csb.app/)
## Installation

Use the package manager [npm](https://www.npmjs.com/package/react-ninja-message) to install .

```bash
npm i react-ninja-message 
```

## Usage

```jsx
import React from "react";
import { NinjaMessage } from "react-ninja-message";

export default function App() {
  return (
    <div className="App">
      <h1>react-ninja-message</h1>
        <NinjaMessage color="#32e4ec" message="looking for ninja ?"/>,
    </div>
  );
}
```

props| type | default value| info
--- | --- | --- | ---
message | string | 'hi !' | Text message to display
messageTimeMs | number | 10000 | Delay until message disappear
logoSrc | string | 'https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg' | Path to logo image (50x50)
logoRender | any | undefined | use to render custom logo (limit to 50x50 container). Using this props overwrite `logoSrc` props
color | string | 'red' | Set the ninja ribbon color
pClassName | string | undefined | Advance options for replace all default style.

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.


## License
[ISC](https://choosealicense.com/licenses/isc/)
