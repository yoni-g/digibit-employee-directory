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
  const [nameSort, setNameSort] = useState("AZ");

  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  // Runs the first time the app starts or a new search term is provided
  useEffect(() => {

    // When the search field (state) is empty the orginal team array is loaded
    if (!search) {
      return setTeam(teamArray);
    }

    // Validates that the input is not a valid letter. If so it sets the warning boolean to true, resets the team array and clears the search field, before returning 
    if (!/^[a-zA-Z]*$/g.test(search)) {
      setSearch("");
      setTeam(teamArray);
      setWarning(true);
      return;

    }

    // Powers the search to only show the people that match the search value state
    const results = team.filter(person =>
      person.name.includes(search.toLowerCase())
    );
    setTeam(results);
    setWarning(false);


  }, [search])

  // Resets to all the team cards
  const resetTeam = () => {
    setTeam(teamArray);
    setSearch("");
    console.log("ResetTeam function ran");
  }


  const sortNames = () => {
    switch (nameSort) {
      case 'AZ':
        setTeam([...team].sort((a, b) => (a.name > b.name) ? 1 : -1));
        setNameSort("ZA")
        break;
      case 'ZA':
        setTeam([...team].sort((a, b) => (a.name < b.name) ? 1 : -1))
        setNameSort("AZ")
        break;
      default:
        return;
    }
  }


  return (
    <>
      <Header />
      <Main>
        <FilterBar
          inputValue={search}
          handleInputChange={handleInputChange}
          resetBtn={resetTeam}
          sortBtn={sortNames}
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