import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import List from './components/List'
import Slider from './components/Carousel'
import GroupChat from './components/Chat'
import CodeEditor from './components/Editor'
import AceEditor from "react-ace";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import "ace-builds/src-noconflict/ext-language_tools";
import { highlight, languages } from "prismjs/components/prism-core";
import EditorWithTerminal from './components/Editor'
import Editor from './components/Editor'
import PlaygroundEditor from './components/Editor'
import Monacoeditor from './components/Editor'
import MonacoEditor from './components/Editor'

function App() {
  
  

  return (
    <>
      <Header />
      <MonacoEditor />
      <List />
      <GroupChat />
      
    </>
  )
}

export default App
