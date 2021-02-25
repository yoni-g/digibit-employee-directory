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
    if (!search) {
      return setTeam(team);
    }
    // if(team.length == 0){
    getMembersList()
      .then(members => {
        setTeam(members);
        console.log(members);
    })
    // }

    // Validates that the input is not a valid letter. If so it sets the warning boolean to true, resets the team array and clears the search field, before returning 
    // if (!/^[a-zA-Z]*$/g.test(search)) {
    //   setSearch("");
    //   setTeam(teamArray);
    //   setWarning(true);
    //   return;

    // }

    // Powers the search to only show the people that match the search value state
    const results = team.filter(person =>
      person.name.includes(search.toLowerCase())
    );
    setTeam(results);
    // setWarning(false);


  }, [search])



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

  // const fetchMembers = async () => {
  //   // setTeam(teamArray);
  //   // setSearch("");
  //   await fetchKlikaMembers()
  //     .then(res => {
        
  //       res.json().then(data => {
  //         console.log(data);

  //       });
  //      })
  // }

  // fetchMembers()
  // console.log(members);
  

  return (
    <>
      <Header />
      <Main>
        <FilterBar
          inputValue={search}
          handleInputChange={handleInputChange}
          resetBtn={resetTeam}
          sortBtn={sortNames}
          children={nameSort === "AZ" ? "Sort A–Z" : "Sort Z–A"} 
        />

        { team.length === 0 && <h4>.לא נמצאו תוצאות</h4>}
        
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