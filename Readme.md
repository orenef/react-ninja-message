# react-ninja-message

react-ninja-message is a react base component that with zero dependencies, That add animated ninja with your custom message to display.  

codesandbox demo -> [Demo](https://okrzh.csb.app/)
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
[MIT](https://choosealicense.com/licenses/mit/)