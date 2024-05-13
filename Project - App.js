import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import Home from "./routes/Project - Home";

function App() {
    return <Router>
        <Switch>
        {/* switch -- route(URL) 찾아주는 역할 */}
            <Route path="/abot-us">
                <h1>Hello</h1>
            </Route>
            <Route path="/movie">
                <Detail />
            </Route>
            <Route path="/"> 
            {/* "/" -- 홈 화면으로 간다 */}
                <Home />
            </Route>
        </Switch>
    </Router>;
};

export default App;
