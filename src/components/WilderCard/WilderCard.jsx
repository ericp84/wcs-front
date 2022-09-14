import { useEffect, useState } from 'react';

import Blank_Profile from '../../assets/Blank_Profile.png';
import Skill from '../Skill/Skill';

const WilderCard = ( props ) => {
  const [wilders, setWilders] = useState([]);

  const fetchData = async() => {
    const request = await fetch('http://localhost:3000/api/wilders')
    return await request.json();
  }

  useEffect(() => {
    const datas = async () => {
      const wildersFromDb = await fetchData();
      if(wildersFromDb) {
        setWilders(wildersFromDb)
      }
    }
    datas();
  }, [])

  console.log(wilders)
  const wilder = wilders.map((wild) => {
    return (
      <article className="card">
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