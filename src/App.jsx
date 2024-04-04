import { createRoot } from "react-dom/client"
import Boxes from "./Boxes";
import { useState } from "react";
import WidthContext from "./widthContext";


const App = () => {
    const tableWidth = useState(400);
    return (
        <div>
            <WidthContext.Provider value={tableWidth}>
                <Boxes />
            </WidthContext.Provider>
        </div>
    );
};

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />);