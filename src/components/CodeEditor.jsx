import React, { useState } from 'react';
import MonacoEditor from '@monaco-editor/react';

export default function CodeEditor() {
    const [code, setCode] = useState(`// Start typing your code here\nconsole.log("Hello, World!");`);

    const handleEditorWillMount = (monaco) => {
        // Define a transparent theme for the editor
        monaco.editor.defineTheme('transparentTheme', {
            base: 'vs-dark',  // Use the dark base theme
            inherit: true,    // Inherit default Monaco styles
            rules: [
                { token: '', foreground: 'FFFFFF' }, // Default text color (white)
            ],
            colors: {
                'editor.background': '#00000000',  // Fully transparent background (RGBA)
                'editor.foreground': '#FFFFFF',    // White text color
                'editorCursor.foreground': '#FFFFFF',  // White cursor
                'editor.lineHighlightBackground': '#11111180', // Semi-transparent for line highlight
                'editorLineNumber.foreground': '#555555',  // Gray line numbers
                'editor.selectionBackground': '#44444480',  // Semi-transparent selection
            }
        });
    };

    return (
        <div className='my-5' style={{ height: '100px', backgroundColor: 'transparent' }}>
            <MonacoEditor
                height="100%"
                language="javascript"
                value={code}
                beforeMount={handleEditorWillMount}  // Define the custom transparent theme before mounting
                theme="transparentTheme"  // Apply the transparent theme
                options={{
                    automaticLayout: true,
                    minimap: { enabled: false },  // Disable the minimap
                }}
            />
        </div>
    );
}
