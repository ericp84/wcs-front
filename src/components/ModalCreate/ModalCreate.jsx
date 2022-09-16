import { useState } from "react";
import './modalcreate.css';

const ModalCreate = (props) => {
    const [name, setName] = useState('');
    const [city, setCity] = useState('');
    
    if(!props.show) {
        return null
    }

    const handleCreate = async (e) => {
        e.preventDefault();
        await fetch(`http://localhost:3000/api/wilders/create/`, {
            method: 'POST',
            headers: {"Content-Type": 'application/x-www-form-urlencoded'},
            body: `name=${name}&city=${city}`
        })
        props.onWilderAdded()
        props.onClose()
        setName('');
        setCity('');
    }
  return (
    <div className="modal" onClick={props.onClose}>
        <div className="modal-content" onClick={e => {e.stopPropagation()}}>
            <div className="modal-header">
                <h2>TITLE</h2>
            </div>
            <div className="modal-body">
                <form className="form" action="POST" onSubmit={handleCreate} >
                    <div className="input-container">
                        <label htmlFor="name">name</label>
                        <input type="text" className="name" value={name} onChange={(e) => {setName(e.target.value)}} />
                        <label htmlFor="city">city</label>
                        <input type="text" className="city" value={city} onChange={(e) => {setCity(e.target.value)}} />
                        {/* <label htmlFor="stack">stack</label>
                        <input type="text" className="stack" /> */}
                        <button className="btn" type="submit" value="Valider"> Valider</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  );
};

export default ModalCreate;