import { useContext, useState } from "react";
import Boxable from "./Boxable";
import WidthContext from "./widthContext";

const newBox = (i) => {
    return {
        i,
        h: 250,
        col: "beige"
    }
}

let index = 9;
const Boxes = () => {
    const [boxList, setBoxList] = useState([newBox(1), newBox(2), newBox(3), newBox(4), newBox(5), newBox(6), newBox(7), newBox(8)])
    const [tableWidth, setTableWidth] = useContext(WidthContext);
    return (
        <div>
            <div className="meta-info box">
                <form onSubmit={e => {
                    e.preventDefault()
                    const formData = new FormData(e.target);
                    const formWidth = formData.get("column-width");
                    console.log(formWidth);
                    if (formWidth && formWidth !== "") {
                        const formTableWidth = Number(formWidth);
                        if (formTableWidth >= 350) {
                            console.log(`changing width to ${formWidth}`);
                            setTableWidth(formTableWidth)
                        }
                    }
                }}>
                    <label htmlFor="column-width">Column Width: <input name="column-width" placeholder="width px"></input></label>
                    <button>Set</button>
                </form>
            </div>
            <div className="box-set" style={{ border: "dashed", borderColor: "black" }}>
                {
                    boxList.map(box => (<Boxable key={box.i} boxh={box.h} boxcol={box.col} onRem={() => setBoxList(boxList.filter(b => b.i != box.i))} />))
                }
                <div className="add- box">
                    <form onSubmit={e => {
                        e.preventDefault();
                        setBoxList([...boxList, newBox(index++)])
                    }} style={{ width: tableWidth }}>
                        <button>+</button>
                    </form>
                </div>
            </div>
        </div >
    )
}

export default Boxes;