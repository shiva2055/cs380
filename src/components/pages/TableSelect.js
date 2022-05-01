import React, {useState} from "react";
import "../css/TableSelect.css";
import { link } from "react-router-dom";
import Table4 from "../Tables/Table_4seats.js";
import Table6 from "../Tables/Table_6seats.js";
import Table12 from "../Tables/Table_12seats.js";


function TableSelect() {
    var [tableSelected, setTable] = useState(false);
    var tables = ["1","2","3","4","5","6","7","8","9", "10"];
    // table 1 - 5 : 4 seats, table 6 - 8 : 6 seats, table 9 : 12 seats
    var seats = {"1":4,"2":4,"3":4,"4":4,"5":4,"6":6,"7":6,"8":6,"9":12, "10":12};
    var tableOccupied = {"1":true,"2":false,"3":false,"4":false,"5":false,"6":false,"7":false,"8":false,"9":false};
    var times = {1:"1:00 PM", 1.5: "1:30 PM", 2: "2:00 PM", 2.5 : " 2:30 PM", 3: "3:00 PM", 3.5: "3:30 PM", 4: "4:00 PM", 4.5: "4:30 PM", 5: "5:00 PM", 5.5: "5:30 PM", 6: "6:00 PM", 6.5: "6:30 PM", 7: "7:00 PM", 7.5: "7:30 PM", 8: "8:00 PM", 8.5: "8:30 PM", 9: "9:00 PM", 9.5: "9:30 PM", 10: "10:00 PM"};
    var time = 3;
    var Name = "Jay";


    return (
        <>
         <div className="Home">
             <h1 className="h1--main">Table plan</h1>
         <section className="container--tables">
             <br/>
             <div className="row--4seats">
                <button className= {tableOccupied[tables[0]] ? "btn--large--4seats--occupied" : "btn--large--4seats"} onClick={tableOccupied[0] ? ()=> setTable(tables[0]) : () => setTable(false)}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[0]}</div>
                    <Table4/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[0]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
            <   button className= {tableOccupied[tables[1]] ? "btn--large--4seats--occupied" : "btn--large--4seats"} onClick={()=> setTable(tables[1])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[1]}</div>
                    <Table4/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[1]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
                <button className= {tableOccupied[tables[2]] ? "btn--large--4seats--occupied" : "btn--large--4seats"} onClick={()=> setTable(tables[2])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[2]}</div>
                    <Table4/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[2]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
                <button className= {tableOccupied[tables[3]] ? "btn--large--4seats--occupied" : "btn--large--4seats"} onClick={()=> setTable(tables[3])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[3]}</div>
                    <Table4/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[3]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
                <button className= {tableOccupied[tables[4]] ? "btn--large--4seats--occupied" : "btn--large--4seats"} onClick={()=> setTable(tables[4])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[4]}</div>
                    <Table4/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[4]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
             </div>
            <div className="row--6seats">
                <button className= {tableOccupied[tables[5]] ? "btn--large--6seats--occupied" : "btn--large--6seats"} onClick={()=> setTable(tables[5])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[5]}</div>
                    <Table6/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[5]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
                <button className= {tableOccupied[tables[6]] ? "btn--large--6seats--occupied" : "btn--large--6seats"} onClick={()=> setTable(tables[6])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[6]}</div>
                    <Table6/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[6]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
                <button className= {tableOccupied[tables[7]] ? "btn--large--6seats--occupied" : "btn--large--6seats"} onClick={()=> setTable(tables[7])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[7]}</div>
                    <Table6/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[7]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
            </div>
            <div className="row--12seats">
                <button className= {tableOccupied[tables[8]] ? "btn--large--12seats--occupied" : "btn--large--12seats"} onClick={()=> setTable(tables[8])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[8]}</div>
                    <Table12/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[8]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
                <button className= {tableOccupied[tables[9]] ? "btn--large--12seats--occupied" : "btn--large--12seats"} onClick={()=> setTable(tables[9])}>
                <div style={{fontSize:"15px"}}>{"Table " + tables[9]}</div>
                    <Table12/>
                    <div style={{fontSize:"10px"}}>
                        {tableOccupied[tables[9]] ? Name + " " + times[time] : ""}
                    </div>
                </button>
            </div>
            <div style={{alignItems:"end"}}>
                    <button disabled={!tableSelected} className="btn--outline">
                        {(tableSelected ? "Proceed" : "Please select the table")}
                    </button>
                    <div>{(tableSelected ? "table " + tableSelected + " selected" : " ")}</div>
            </div>
            </section>
            
         </div>
        </>
    )
}

export default TableSelect;