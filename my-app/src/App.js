import React, { useState, useEffect } from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import FilterBar from "./components/FilterBar";
import CardWrapper from "./components/CardWrapper";
import TeamCard from "./components/TeamCard";
import teamArray from "./team.json";


function App() {
  const [team, setTeam] = useState(teamArray);

  const [search, setSearch] = useState('');
  const [warning, setWarning] = useState(false);

  const handleInputChange = event => {
    setSearch(event.target.value);
  };


  useEffect(() => {
    if (!search) {
      return setTeam(teamArray);
    }

    if (!/^[a-zA-Z]*$/g.test(search)) {
      setSearch("");
      setTeam(teamArray);
      setWarning(true);
      return;

    }

    const results = team.filter(person =>
      person.name.includes(search.toLowerCase())
    );
    setTeam(results);
    setWarning(false);


  }, [search])




  return (
    <>
      <Header />
      <Main>
        <FilterBar
          inputValue={search}
          handleInputChange={handleInputChange}
        />
        {/* Validation */}
        {warning === false ? null : <h4>Woops, please use letters only. Numbers or special characters won't display results.</h4>}
        {team.length === 0 ? <h4>Looks like we don't have a team member by that name. Please try a different name.</h4> : null}
        
        <CardWrapper>
          {team.map(person => (
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




const sort = arr => arr.sort((a, b) => a - b);
//By default,the sort() function sorts values as strings.Fix this by providing a compare function.
// Example
sort([1, 5, 2, 4, 3]);      // [1, 2, 3, 4, 5]