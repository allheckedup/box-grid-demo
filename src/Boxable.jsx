import { useContext, useState } from "react";
import WidthContext from "./widthContext";

const Boxable = props => {
    const [colour, setColour] = useState("beige")
    const [height, setHeight] = useState(250)
    const [tableWidth] = useContext(WidthContext);
    console.log(`changing props of box: ${height}x${tableWidth}, ${colour}`);
    return (
        <div className="box" style={{ minHeight: height, minWidth: tableWidth, maxHeight: height, maxWidth: tableWidth, backgroundColor: colour }}>
            <form className="box-params" onSubmit={e => {
                e.preventDefault();
                const formData = new FormData(e.target);
                if (formData.get("height") && formData.get("height") !== "") {
                    const formHeight = Number(formData.get("height"));
                    if (formHeight >= 150) {
                        setHeight(formHeight)
                        console.log(`changing height to ${formHeight}`);
                    }
                }
                const formColour = formData.get("colour");
                if (formColour && formColour !== "") {
                    console.log(`changing colour to ${formColour}`);
                    setColour(formColour)
                }
            }}>
                <div className="row"><label htmlFor="height">Height: {height} {">"} <input name="height" placeholder="height px"></input></label></div>
                <div className="row"><label>Width: {tableWidth}</label></div>
                <div className="row"><label htmlFor="colour">Colour: &quot;{colour}&quot; {">"} <input name="colour" placeholder="colour / hex"></input></label></div>
                <div className="row"><button>Adjust</button> <button id="remove-button" onClick={_ => props.onRem()}>Remove</button></div>
            </form>
        </div>
    )
}

export default Boxable;