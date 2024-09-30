import React from 'react';
import MeetupItem from './MeetupItem';
import dt from '../../app/Datainf';
const  MeetupList:React.FC<{meetups:dt[]}>=(props)=> {
  return (

    <ul className="flex flex-wrap gap-12 mt-24 justify-center items-center mb-32">
      {props.meetups.map((meetup) => (
        // <MeetupItem
        //   key={meetup.id}
        //   id={meetup.id}
        //   image={meetup.image}
        //   title={meetup.title}
        //   address={meetup.address}
        // />
        // 
        <MeetupItem 
          key={meetup.id}
          id={meetup.id}
          title={meetup.title}
          image={meetup.image}
          traveler={meetup.traveller}
          date={meetup.date}
          des={meetup.des}
          days={meetup.days}
          cost={meetup.cost}
          location={meetup.location}/>
      ))}
    </ul>
  );
}

export default MeetupList;
