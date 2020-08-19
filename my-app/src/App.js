import React, { useState } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Filters from "./components/Filters";
import CardWrapper from "./components/CardWrapper";
import TeamCard from "./components/TeamCard";
import teamArray from "./team.json";


function App() {
  // const [team, setTeam] = useState();
  return (
    <>
      <Header />
      <Main>
        <Filters />
        <CardWrapper>
          {teamArray.map(person => (
            <TeamCard
              key={person.id}
              img={person.img}
              name={person.name}
              title={person.title}
              location={person.location}
              phone={person.phone}
              email={person.email}
            />
          ))}
        </CardWrapper>


      </Main>




    </>
  );
}

export default App;
