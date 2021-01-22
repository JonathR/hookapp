import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

//import { HookApp } from './HookApp';
//import { CounterApp } from './components/01-useState/CounterApp';
//import { CounterWithCustomHook } from './components/01-useState/CounterWithCustomHook';
//import { SimpleForm } from './components/02-useEffect/SimpleForm';
//import { FormWithCustomHook } from './components/02-useEffect/ForWithCustomHook';
import { MultipleCustomHooks } from './components/03-examples/MultipleCustomHooks';

ReactDom.render(<MultipleCustomHooks />, document.getElementById('root'));
