import React, { useState, useEffect } from "react";
import { useHistory, useParams } from "react-router-dom";
import { producers } from "../data/producerData";

const ProducerPage = (props) => {
  const [producer, setProducer] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const producerInfo = producers.find((p) => p.id === id);
    setProducer(producerInfo);
  }, []);
  return (
    <>
      {producer ? (
        <div style={{ width: "500px", height: "500px" }}>
          <div style={{ width: "80%", height: "100%" }}>
            <h1>{producer.name}</h1>
            <img src={producer.pic} alt="" />
          </div>
        </div>
      ) : (
        <div>
          <h1>Undefined Route</h1>
        </div>
      )}
    </>
  );
};

export default ProducerPage;
