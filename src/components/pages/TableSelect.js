import React, {useState} from "react";
import "../css/App.css";
import "../css/Home.css";
import "../css/Button.css";
import { useNavigate } from "react-router-dom";

function TableSelect() {
    var tableNos = ["table1", "table2", "table3", "table4", "table5", "table6","table7","table8","table9","table10","table11"]
    var [tableSelected, setTable] = useState(true);
    const history = useNavigate();
    const handleRoute = () => {
        history("/Confirmation");
    }

    return (
        <>
         <div className="Home">
             <h1 className="h1--main">Table plan</h1>
         <section className="container--tables">
         <br/>
                {tableNos.map(table => (
                    <button className= "btn--large" onClick={()=> setTable(false)}>
                        {"Table No: " + table}
                    </button>
                ))}
                {
                    <div>
                        <br/>
                        <br/>
                        <button disabled={tableSelected} className="btn--outline" onClick={handleRoute}>
                            {!tableSelected + " "} 
                        </button>
                    </div>
                }
            </section>
         </div>
        </>
    )
}

export default TableSelect;