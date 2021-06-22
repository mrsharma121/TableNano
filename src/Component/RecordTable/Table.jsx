import React from 'react'


function Table({children}) {
    return (
        // <table>
        <div className="record-table">
        {children}
        </div>    
        // </table> 
    )
}

export default Table
