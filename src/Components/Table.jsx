import React from "react"

const Table = ({ data }) => {

    return (
        <table>
            <tbody>
                {data.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    )
}

export default Table