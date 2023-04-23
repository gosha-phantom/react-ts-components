import { AsideMenu } from 'shared/ui';
import './styles/App.css';

function App() {
    return (
        <main className="app">
            <AsideMenu />
            <main className="page">
                Страница приложения...
            </main>
        </main>
    )
}

export default App
