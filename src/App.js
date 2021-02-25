import React, { useState, useEffect } from 'react';
import { Spinner } from "react-bootstrap";

import Header from "./components/Header";
import Main from "./components/Main";
import FilterBar from "./components/FilterBar";
import CardWrapper from "./components/CardWrapper";
import TeamCard from "./components/TeamCard";
// import teamArray from "./team.json";
import { getMembersList } from "./service/getKlikaMembersSync"



function App() {
  // Handles which cards get wrapped to
  const [team, setTeam] = useState([]);

  const [filteredMembers, setFiltered] = useState([]);

  // Handles the search state
  const [search, setSearch] = useState('');

  // Handles the warning validations for search
  const [loading, setLoading] = useState(false);

  // Handles the name sorting state
  const [nameSort, setNameSort] = useState("AZ");


  // Sets the Search State based on the search input
  const handleInputChange = event => {
    setSearch(event.target.value);
  };

  // Runs the first time the app starts or a new search term is provided
  useEffect(() => {
    // When the search field (state) is empty the orginal team array is loaded
    // if(team.length == 0){
    setLoading(true)
    getMembersList()
      .then(members => {
        setTeam(members);
        setLoading(false)
        console.log(members);
      })
      // }
    if (!search) {
      return setTeam(team);
    }

    // Powers the search to only show the people that match the search value state
    const results = team.filter(person => {
      return person.name.includes(search.toLowerCase()) || 
              person.industry.includes(search.toLowerCase()) || 
                person.company.includes(search.toLowerCase())
    });
    setTeam(results);
    // setWarning(false);


  }, [search])

  // const filterMembers = (member) => {

  // }

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

  // Resets to all the team cards
  const resetTeam = () => {
    setTeam(team);
    setSearch("");
  }

  const sortLabel = (sort) => {
    let sortValue = sort === "AZ" ? "ת-א" : "א-ת" 
    return `מיין לפי: ${sortValue}`
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
          children={sortLabel(nameSort)} 
        />

        { team.length === 0 && !loading && <h4>.לא נמצאו תוצאות</h4>}
        
        { loading && (
          <div style={{textAlign: "center"}}>
            <Spinner 
              animation="border"
              variant="light"
            />
          </div>
        )}
          <CardWrapper>
            { team.map(member => (
                <TeamCard {...member} />
            )) }
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