import React from 'react';
import ReactDom from 'react-dom';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { HookApp } from './HookApp';
import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';

ReactDom.render(<CounterWithCustomHook />, document.getElementById('root'));
