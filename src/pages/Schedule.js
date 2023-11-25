import React, { useState, useEffect } from "react";
import axios from 'axios';

export default function SchedulePage() {
  const [schedules, setSchedules] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    const fetchData = async () => {

      try {
        const response = await fetch("https://api.jikan.moe/v4/schedules");
        const data = await response.json();
        setSchedules(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching data:", error);
        setLoading(false);
      }
    };
    fetchData();
}, []);

return (
   < div className="schedule">
      <h2>Watch Schedule</h2>
      {loading ? (
        <p className="schedule-loading">Loading...</p>
      ) : (
        <ul>
          {schedules.data.map((item) => (
            <li key={item.id}>
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {item.title}
              </a>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
          
          }

//   <div>
//     <h1>Anime Schedules</h1>
//     {loading ? (
//       <p>Loading...</p>
//     ) : (
//       <ul>
//         {Object.keys(schedules).map((day) => (
//           <li key={day}>
//             <h2>{day}</h2>
//             <ul>
//               {schedules[day].map((schedule) => (
//                 <li key={schedule.id}>
//                   <h3>{schedule.title}</h3>
//                   <p>{schedule.type}</p>
//                   {/* Add more details as needed */}
//                 </li>
//               ))}
//             </ul>
//           </li>
//         ))}
//       </ul>
//     )}
//   </div>
// );
// };
