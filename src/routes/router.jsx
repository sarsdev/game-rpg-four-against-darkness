import { 
    BrowserRouter, 
    Routes,
    Route, 
} from "react-router-dom";
import App from './../app/App';
import ClassView from './../app/components/class-view/classView';
import PlayerSheetView from './../app/components/player-sheet-view/playerSheetView';

function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="classes" element={<ClassView />} />
                <Route path="player-sheet" element={<PlayerSheetView />} />
            </Routes>
        </BrowserRouter>
    );
}

export default Router;