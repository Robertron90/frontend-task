import React, { useState } from 'react';

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
    console.log(checkedItems);
  };

  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Room type</th>
            {tableHeads.map(date => (
              <th key={date}>{date}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(hotel => (
            <tr key={hotel.name}>
              <td>{hotel.name}</td>
              {hotel.dates.map(date => (
                <td key={`${hotel.name}-${date.date}`}>
                  <div>
                    <input
                      type="checkbox"
                      onChange={handleCheck}
                      value={`${hotel.name} room on ${date.date}`}
                    />
                    <p>{date.currentPrice}</p>
                    <p>{date.recommendedPrice}</p>
                    <p>
                      {date.currentPrice < date.recommendedPrice
                        ? 'High'
                        : date.currentPrice > date.recommendedPrice
                        ? 'Low'
                        : 'Same'}
                    </p>
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

export default Table;
