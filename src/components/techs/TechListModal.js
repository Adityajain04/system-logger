import React, { useState, useEffect } from 'react'
import Preloader from '../layout/Preloader';
import TechItem from './TechItem';

const TechListModal = () => {

  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getTechs = async () => {
    setLoading(true);
    const res = await fetch('/techs');
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  }

  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, [])

  return (
    <div id="tech-list-modal" className="modal">
      <div className="modal-content">
        <h4 className="center">Technician List</h4>

        <ul className="collection">
          {loading && (
            <div className="center">
              <Preloader />
            </div>)}
            
          {!loading && techs.length === 0 ? (
            <p className="center">No technician to show....</p>
          ) : (
            techs.map(tech => (<TechItem key={tech.id} tech={tech} />))
          )}
        </ul>
      </div>
    </div>
  )
}

export default TechListModal
