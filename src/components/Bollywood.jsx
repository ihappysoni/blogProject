import React, { useContext } from "react";
import { happy } from "./APIs/Api";
const Bollywood = () => {
  const [data, setData] = useContext(happy);

  return (
    <>
    <div className="contentPage">
      
      {data.map((item) => {
        return (
            <div className="card">
              <img src={item.ImageAsset} alt="BollyImg" />
              <p>{item.Title}</p>
              <p>{item.BlogContent}</p>
              <p>{item.PublishedDate}</p>
              <hr />
            </div>
        );
      })}
      </div>
      <div className="right">
        
      </div>
    </>
  );
};

export default Bollywood;





{/* {data.map(item=><img src={item.ImageAsset} alt='BollyImg'/>)}
    {data.map(item=><p>{item.Title}</p> )} */}