import React, { useState } from 'react'
import M from 'materialize-css/dist/js/materialize.min.js';

const AddLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');

  const onSubmit = (e) => {
    if(message === '' || tech === ''){
      M.toast({ html: 'Please enter a message and tech.'});
    }else{
      console.log(e.taget)

      // Clear field
      setMessage('')
      setAttention(false)
      setTech('')
    }
  }

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field s12">
            <input type="text" name="message" value={message} onChange={e => setMessage(e.target.value)} />
            <label htmlFor="message" className="active">Log Message</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field s12">
            <select name="tech" value={tech} onChange={e => setTech(e.target.value)}>
              <option value="" disabled>Select Technician</option>
              <option value="John Doe">John Doe</option>
              <option value="Sara Wilson">Sara Wilson</option>
              <option value="Sam Smith">Sam Smith</option>
            </select>
            <label>Technician</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input type="checkbox" className="filled-in" checked={attention} name="attention" value={attention} onChange={e => setAttention(!attention)} />
                <span>Needs Attention</span>
              </label>
            </p>
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <a href="#!" onClick={onSubmit} className="modal-close waves-effect waves-light btn blue-grey darken-4">Enter</a>
      </div>
    </div>
  )
}

const modalStyle = {
  width: '75%',
  height: '75%'
}
export default AddLogModal
