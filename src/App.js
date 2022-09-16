import './App.css';
import { useEffect, useState } from 'react';

import Header from './components/Header/Header';
import WilderCard from './components/WilderCard/WilderCard';
import Footer from './components/Footer/Footer';
import ModalCreate from './components/ModalCreate/ModalCreate';
import Modal from './components/Modal/Modal';
function App() {
  const [wilders, setWilders] = useState([]);
  const [id, setId] = useState(0);
  const [showModal, setShowModal] = useState(false);

  // const fetchData = useCallback(async() => {
  //     const request = await fetch('http://localhost:3000/api/wilders')
  //     const response = await request.json();
  //     setWilders(response);
  //   }, [])

  // useEffect(() => {
  //   const datas = async () => {
  //     const wildersFromDb = await fetchData();
  //     if(wildersFromDb) {
  //       setWilders(wildersFromDb)
  //     }
  //   }
  //   datas();
  // }, [fetchData, showModal, id])

    const fetchData = async () => {
      const request = await fetch('http://localhost:3000/api/wilders')
      const response = await request.json();
      setWilders(response);
    }

  const handleCallback = (idFromWilder) => {
    setId(idFromWilder);
  };

  const handleCreateWilder = () => {
    setShowModal(true)
  }

  useEffect(() => {
    fetchData();
  }, [id, showModal])

  return (
    <div>
      <Header/>
    <main className="container">
      <h2>Wilders</h2>
      <button className='btn-modal' onClick={handleCreateWilder} >Create Wilder</button>
      <ModalCreate onClose={() => setShowModal(false)} show={showModal} onWilderAdded={() => fetchData()}/>
      <WilderCard wilder={wilders} idFromWilder={handleCallback} onWilderDeleted={() => fetchData()}/>
      <Modal onWilderModified={() => fetchData()}/>
    </main>
    <Footer/>
  </div>
  );
}

export default App;
