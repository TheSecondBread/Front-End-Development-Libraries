import {useState } from 'react';
import {marked} from 'marked';
import './App.css';

function App() {
  marked.setOptions({
    breaks: true,
  });

  const initialText = `
# This is H1
## This is H2

**This is bolded text**

[This is a link](https://www.freecodecamp.org)

\`This is inline code\`

\`\`\`
This is a code block
function example() {
  console.log('Hello, world!');
}
\`\`\`

- This is an unordered list item
1. This is an ordered list item

> This is a blockquote

![This is an image](https://via.placeholder.com/150)
`;

  const [preview, setPreview] = useState(initialText);
  const [output, setOutput] = useState(marked(initialText));

  const handleChange = (e) => {
    const newText = e.target.value;
    setPreview(newText);
    setOutput(marked(newText));
  };

  return (
    <>
      <textarea
        id="editor"
        value={preview}
        onChange={handleChange}
      ></textarea>
      <div id="preview" dangerouslySetInnerHTML={{ __html: output }}></div>
    </>
  );
}

export default App;
