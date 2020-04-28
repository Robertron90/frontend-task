import React, { useState } from 'react';
import './App.css';
import myImage1 from './upwardGreenArrow.png'
import myImage2 from './downwardRedArrow.png'
import myImage3 from './blueCheckMark.png'

//function Header() {
  // Import result is the URL of the image
  //return <img src={myImage1} width="50" height="50" alt="Green Arrow!" />;    
//}

const Table = ({ data }) => { 
   
  const [checkedItems, setCheckedItems] = useState([]);
  if (data.length === 0) return <div>No data yet</div>;

  const tableHeads = Array.from(
    new Set(data.flatMap(hotel => hotel.dates).map(dates => dates.date))
  ).sort((a, b) => Date.parse(a.date) - Date.parse(b.date));

  const handleCheck = ({ target: { checked, value } }) => {
    if (checked) {
      setCheckedItems(checkedItems => [...checkedItems, value]);
    } else {
      setCheckedItems(checkedItems =>
        checkedItems.filter(item => item !== value)
      );
    }
  };

  const handleSubmit = () => {
    let result = `You selected:\n${
      checkedItems.length > 0 ? checkedItems.join('\n') : 'Nothing'
    }`;
    alert(result);
  };
 
  return (
    <div className="main">
      <h2>Hotel Bookings</h2>
      <table>
        <thead>
          <tr>
            <th>Room type</th>
            {tableHeads.map(date => (
              <th className="col" key={date}>
                {date}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(hotel => (
            <tr key={hotel.name}>
              <td>{hotel.name}</td>
              {hotel.dates.map(date => (
                <td key={`${hotel.name}-${date.date}`}>
                  <div className="cell">
                    <div className="col">
                      <input
                        type="checkbox"
                        onChange={handleCheck}
                        value={`${hotel.name} room on ${date.date}`}
                      />
                     
                    </div>
                    <div className="col">
                      <p>{date.currentPrice}</p>
                      <p>{date.recommendedPrice}</p>      
               
                    </div>
                    <div className="col">
                      <p>
                        {date.currentPrice < date.recommendedPrice
                            ? <img src={myImage1} width="30" height="50" alt="Green Arrow!"></img>
                            : date.currentPrice > date.recommendedPrice
                            ? <img src={myImage2} width="60" height="60" alt="Red Arrow!"></img>
                            : <img src={myImage3} width="70" height="70" alt="Blue Check Mark!"></img>}
                      </p>
                    </div>
                  </div>
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      <button onClick={handleSubmit}>Apply</button>
    </div>
  );
  
};

export default Table ;
