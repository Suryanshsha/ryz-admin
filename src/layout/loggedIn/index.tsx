import React, { useState, useRef, useMemo } from 'react';
import JoditEditor, { Config } from 'jodit-react';
// import 'jodit/build/jodit.min.css'
// import "./styles.css";

interface IProps {
  removeToken: () => void;
  placeholder?: string;
}

const LoggedIn: React.FC<IProps> = ({ placeholder }) => {
  const editor = useRef<any>(null);
  const [content, setContent] = useState<string>('');

  const config: Config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: placeholder || 'Start typing...',
    }),
    [placeholder]
  );

  return (
    <>
      <div>
        <form>
          <div>
            <label for='postTitle'>Post Title</label><br/>
            <input id='postTitle' className='border' type="text" placeholder='Start Typing...' />
            <p className='font-bold text-2xl'>hello</p>
          </div>
        </form>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          // tabIndex={1} // tabIndex of textarea
          onBlur={(newContent: string) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent: string) => { }} />
        {content}
      </div>
    </>
  );
};

export { LoggedIn };
