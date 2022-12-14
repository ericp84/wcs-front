import Blank_Profile from '../../assets/Blank_Profile.png';
import Skill from '../Skill/Skill';
import Modal from '../Modal/Modal';
import './wilder.css'
import { useState } from 'react';

const WilderCard = (props) => {
  const [id, setId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  const handleDelete = async (id) => {
    props.onWilderDeleted();
    const { idFromWilder } = props;
    idFromWilder(id)
    await fetch(`http://localhost:3000/api/wilders/deleteone/${id}`, {
      method: 'DELETE'
    })
  }

  const handleUpdate = async (id) => {
    setId(id)
    setShowModal(true)
  }
  
  return (
    <section className="card-row">
      <Modal  id={id} onClose={() => setShowModal(!showModal)} show={showModal} refresh={ () => props.onWilderDeleted() }/>
      {props.wilder.map((wild) => {
        return(
          <article className="card" key={wild.id}>
          <img src={Blank_Profile} alt="Jane Doe Profile" />
          <h2>{wild.name}</h2>
          <h4>{wild.city}</h4>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
            enim ad minim veniam, quis nostrud exercitation ullamco laboris
            nisi ut aliquip ex ea commodo consequat.
          </p>
          <h4>Wild Skills</h4>
          <Skill skills={wild.upvotes}/>
          <div className="btn-cont">
            <button className="btn" onClick={() => {handleDelete(wild.id)}}>
                Delete
            </button>
            <button className="btn" onClick={() => {handleUpdate(wild.id)}}>
                Update
            </button>
          </div>
        </article>
        )
      })}
  </section>
  );
};

export default WilderCard;