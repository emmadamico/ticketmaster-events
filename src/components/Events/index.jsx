import { useState } from "react";
import EventItem from "./components/EventItem";
import eventsJSON from "../../data/events.json";

const Events = () => {

    const [data] = useState(eventsJSON);
    const events = data._embedded.events;
    //Tmb se puede hacer asi: const { _embedded: { events }} = data;

    const handleEventItemClick = (id) => {
        console.log('evento clickeado: ', id);
    };

    const eventsComponent = events.map((eventItem) => (
        <EventItem 
            key={`event-item-${eventItem.id}`} 
            name={eventItem.name}
            info={eventItem.info}
            image={eventItem.images[0].url}
            onEventClick={handleEventItemClick}
            id={eventItem.id}
        />
    ));

    return (
        <div>
            Events
            {eventsComponent}
        </div>
    );
};

export default Events;