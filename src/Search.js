import React from "react";

const Search = ({ searchOption, radioOption }, ref) => {

    const search = (value) => {
        searchOption(value);
    }

    const radio = (value) => {
        radioOption(value);
    }

    return ( 
        <div className="Search">
            <label>Filtrera på:</label>
            <input type="text" id="SearchField" onKeyUp={(e) => search(e.target.value)}/>
            <div className="SearchBox">
                <input 
                    ref= { ref }
                    type="radio" 
                    name="radio" 
                    value="All" 
                    onChange={(e) => radio(e.target.value)}/>
                <label>Alla</label>
                <input 
                    type="radio" 
                    name="radio" 
                    value="Hushållsarbete" 
                    onChange={(e) => radio(e.target.value)}/>
                <label>Hushållsarbete</label>
                <input 
                    type="radio" 
                    name="radio" 
                    value="Jobb" 
                    onChange={(e) => radio(e.target.value)}/>
                <label>Jobb</label>
            </div>            
        </div>
     );
}
 
export default React.forwardRef(Search);
