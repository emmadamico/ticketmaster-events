import { useState } from 'react';
//import { useRef } from 'react';
import eventsJSON from '../data/events.json';

const useEventsData = () => {
    //const data = useRef(eventsJSON);
    //const { _embedded: { events }} = data.current;
    const [data] = useState(eventsJSON);
    const events = data._embedded.events;
    //Tmb se puede hacer asi: const { _embedded: { events }} = data;

    return {
        events
    };
};

export default useEventsData;