import { Routes, Route } from 'react-router-dom';
import { Portfolio } from './Portfolio';
import { BrowserRouter } from 'react-router-dom';
import { MetacityProjectPage } from './projects/metacity/metacityProjectPage';
import { FlowProjectPage } from './projects/flow/flowProjectPage';
import { CreationPostPage } from './posts/creation/creation';
import { FlockingPostPage } from './posts/flocking/flockingPostPage';

export function App() {
    return (
        <div id="app">
            <BrowserRouter>
                <Routes>
                    <Route path="/">
                        <Route index element={<Portfolio />} />
                        <Route path="metacity" element={<MetacityProjectPage />} />
                        <Route path="flow" element={<FlowProjectPage />} />
                        <Route path="creationStation" element={<CreationPostPage />} />
                        <Route path="flocking" element={<FlockingPostPage />} />
                        <Route path="*" element={<Portfolio />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </div>
    );
}
