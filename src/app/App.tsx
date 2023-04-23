import { AsideMenu, Select, SelectOption } from 'shared/ui/index';
import {  } from 'shared/ui/Select/Select';
import './styles/App.css';
import {useState} from 'react';

const selectOptions: SelectOption[] = [
    { label: 'First', value: '1' },
    { label: 'Second', value: '2' },
    { label: 'Third', value: '3' },
    { label: 'Fourth', value: '4' },
    { label: 'Fifth', value: '5' },
];

function App() {
    const [selectValue, setSelectValue] = useState<SelectOption | undefined>(selectOptions[0]);
    const [selectSecondValue, setSelectSecondValue] = useState<SelectOption[]>([]);

    return (
        <main className="app">
            <AsideMenu />
            <main className="page">
                Компоненты...
                <div className="flex">
                    <Select options={selectOptions} value={selectValue} onChange={o => setSelectValue(o)}/>
                    <Select multiple={true} options={selectOptions} value={selectValue} onChange={o => setSelectValue(o)}/>
                </div>
            </main>
        </main>
    )
}

export default App
