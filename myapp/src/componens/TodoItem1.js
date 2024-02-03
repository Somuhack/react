import React from 'react'

function TodoItem1() {
  let TodoName ="Go to Collage";
  let TodoDate ="4/10/2023";
  return (
  <div className='container'> 
   <div class="row sm-row">
    <div class="col-6">
      {TodoName}
    </div>
    <div class="col-4">
      {TodoDate}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger sm-btn">Delete</button>
    </div>
  </div>
  </div>
  )
}
export default TodoItem1;
