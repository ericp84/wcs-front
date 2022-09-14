/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState, useCallback } from 'react';

import Blank_Profile from '../../assets/Blank_Profile.png';
import Skill from '../Skill/Skill';

import './wilder.css'

const WilderCard = () => {
  const [wilders, setWilders] = useState([]);
  const [id, setId] = useState(0);

    const fetchData = useCallback(async() => {
        const request = await fetch('http://localhost:3000/api/wilders')
        const response = await request.json();
        setWilders(response);
      }, [id])

  useEffect(() => {
    const datas = async () => {
      const wildersFromDb = await fetchData();
      if(wildersFromDb) {
        setWilders(wildersFromDb)
      }
    }
    datas();
  }, [fetchData])

  const handleDelete = async (id) => {
    setId(id)
    await fetch(`http://localhost:3000/api/wilders/deleteone/${id}`, {
      method: 'DELETE'
    })
  }

  const handleUpdate = async (id) => {
    setId(id)
    await fetch(`http://localhost:3000/api/wilders/update/${id}`, {
      method: 'PUT'
    })
  }

  const wilder = wilders.map((wild) => {
    return (
      <article className="card" key={wild.id}>
      <img src={Blank_Profile} alt="Jane Doe Profile" />
      <h3>{wild.name}</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
        enim ad minim veniam, quis nostrud exercitation ullamco laboris
        nisi ut aliquip ex ea commodo consequat.
      </p>
      <h4>Wild Skills</h4>
      <Skill skills={wild.skills}/>
      <button onClick={() => {handleDelete(wild.id)}}>
          Delete
      </button>
      <button onClick={() => {handleUpdate(wild.id)}}>
          Update
      </button>
    </article>
    )
  })
  
  return (
    <section className="card-row">
      {wilder}
  </section>
  );
};

export default WilderCard;