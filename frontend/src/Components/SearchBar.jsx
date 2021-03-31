import React, {useEffect} from 'react';
/*import styled from "styled-components";

	Az input tag a komponens a style componentsben (egy object) van tag formájában előkészítve, onnét van behivatkozva ide
  const Input = styled.input`
  margin: 10px auto;
  background: linear-gradient(
    90deg,
    rgba(3, 4, 147, 1) 0%,
    rgba(9, 9, 121, 1) 35%,
    rgba(0, 212, 255, 1) 100%
  );
  color: yellow;
  `;*/


  const SearchBar = ({search, setSearch}) => {

    useEffect(() => {    
      setSearch(search);
    }, [search, setSearch]);

    //esemény figyelő a input mező értékeinek a figyelésére
    const onChangeHandler = (event) => {
      setSearch(event.target.value);
    };
    
    //input mező szabadszavas kereséshez, a komponens a style componentsben (egy object) van tag formájában előkészítve, onnét van behivatkozva ide
    return (
      <div>
        <input className="searchbar" onChange={onChangeHandler} autoFocus /> 
      </div>
    );

  } 

	export default SearchBar;
