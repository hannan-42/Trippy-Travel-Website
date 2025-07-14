import React from 'react'
import "./TripStyle.css"
import TripData from './Tripdata'
import Trip1 from '../../assets/5.jpg'
import Trip2 from '../../assets/8.jpg'
import Trip3 from '../../assets/6.jpg'

function Trip() {
    return (
        <div className='trip'>
            <h1>Recent Trips</h1>
            <p>You can discover unique destinations using Google Maps.</p>
            <div className='tripcard'>
                <TripData 
                image={Trip1}
                heading = "Trip in Indonesia"
                text = "Indonesia, officially the Republic of Indonesia, is a country in Southeast Asia and Oceania between the Indian and Pacific oceans. It consists of over 17,000 islands, including Sumatra, Java, Sulawesi, and parts of Borneo and New Guinea"
                />
                <TripData
                image={Trip2}  
                heading="Trip in France"
                text="France, officially the French Republic, is a country in Western Europe known for its rich history, cultural heritage, and iconic landmarks. It features world-famous destinations including Paris, the French Riviera, the Loire Valley castles, and the snow-capped Alps."
                />  
                <TripData
                image={Trip3}  // Use your Malaysia image
                heading="Trip in Malaysia"
                text="Malaysia, a Southeast Asian nation, is renowned for its multicultural diversity, stunning beaches, and lush rainforests. The country offers iconic attractions including the Petronas Twin Towers in Kuala Lumpur, historic Malacca City, beautiful Langkawi islands, and the majestic Mount Kinabalu in Borneo."
/>
                
            </div>
        </div>
    )
}

export default Trip
