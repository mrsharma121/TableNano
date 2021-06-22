import React from 'react'


function Column({children}) {
    // console.log(rowData[0])
    // Object.keys(rowData[0]).map(e => console.log(e));
    return (
        <td className="record-table-column">
            {children}
        </td>
    )
}

export default Column
