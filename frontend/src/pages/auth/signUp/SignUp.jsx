import React from 'react'

const SignUp = () => {
  return (
      <div className="grid grid-cols-2 h-screen">
      <div className="bg-gray-200 flex items-center justify-center text-2xl">
        1 of 2
      </div>
      <div className="bg-blue-500 text-white flex items-center justify-center text-2xl">
        <div className="row mb-3">
          <label for="colFormLabelSm" className="col-sm-2 col-form-label col-form-label-sm">Email</label>
          <div className="col-sm-10">
            <input type="email" className="form-control form-control-sm" id="colFormLabelSm" placeholder="col-form-label-sm"/>
          </div>
        </div>
      </div>
    </div>

  )
}

export default SignUp
