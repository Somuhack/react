import React from 'react'

function AddTODO() {
    return (
        <div className='container'>
        <div className="row sm-row">
            <div className="col-6">
                <input type="text" placeholder="Entet TODO Here" />
            </div>
            <div className="col-4">
                <input type="date" />
            </div>
            <div className="col-2 ml-0" >
                <button type="button" className="btn btn-success sm-btn">Add</button>
            </div>
        </div>
        </div>
    )
}
export default AddTODO;