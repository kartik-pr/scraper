import { useEffect, useState, useRef } from "react";

export const SearchEngine = () => {
    const [results, setResults] = useState([]);
    const [query, setQuery] = useState([]);
    const [debounceTimer, setDebounceTimer] = useState(null);
    const searchRef = useRef(null);

    let getBrowserClient = () => {
        const userAgent = navigator.userAgent.toLowerCase();
      
        if (userAgent.includes('firefox')) return 'firefox';
        else if (userAgent.includes('chrome')) return 'chrome';
        else if (userAgent.includes('safari')) return 'safari';
        else if (userAgent.includes('edge')) return 'edge';
        return 'chrome';
      }

      const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setResults([]); // Collapse the dropdown when clicking outside
        }
    };

    useEffect(() => {
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
          document.removeEventListener('mousedown', handleClickOutside);
      };
    }, []);

      const searchAPI = (q) => {
        if(q == '') return
          const client = getBrowserClient();
          const url = `https://suggestqueries.google.com/complete/search?client=${client}&q=${encodeURIComponent(q)}`;
        
          fetch(url)
            .then(response => response.json())
            .then(data => {
              setResults(data[1])
            })
            .catch(error => console.error("Error fetching suggestions:", error));
      }

      const handleSearch = (e) => {
        if (debounceTimer) clearTimeout(debounceTimer);
        setQuery(e?.target?.value)
        const timer = setTimeout(() => {
          searchAPI(e?.target?.value);
        }, 500);
        setDebounceTimer(timer);
      }

      const handleResultClick = (data) => {
        console.log("data>", data);
        
        setQuery(data)
        setResults([])
      }

      return(
        <>
          <label className="s_label" htmlFor="searchengine" ref={searchRef} >search</label>
          <div id="searchengine" className="search_main" ref={searchRef}>
              <input 
                type="text"
                value={query}
                onChange={handleSearch} 
              />
              {
               results?.length ?
                <div className="search_bar">
                  {
                    results?.map(data =>(
                          <div className="s_container">
                            <button 
                              className="s_btn" 
                              type="button"
                              onClick={() => handleResultClick(data)}
                            >
                                {data}
                              </button> 
                          </div>
                        ))                
                  }
                </div>
                :""
              }
          </div>
        </>
      )
} 