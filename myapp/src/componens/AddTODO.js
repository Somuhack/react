import React from 'react'

function AddTODO() {
    return (
        <div className='container'>
        <div class="row sm-row">
            <div class="col-6">
                <input type="text" placeholder="Entet TODO Here" />
            </div>
            <div class="col-4">
                <input type="date" />
            </div>
            <div class="col-2 ml-0" >
                <button type="button" class="btn btn-success sm-btn">Add</button>
            </div>
        </div>
        </div>
    )
}
export default AddTODO;