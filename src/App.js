import './App.css';
import { useEffect } from 'react';
import { SearchEngine } from './Components/searchEngin';
import { Header } from './Components/Layout/Header';
import { Footer } from './Components/Layout/Footer';

function App() {

  // useEffect(() => {
  //   // Function to load Google CSE script
  //   const loadGoogleCSE = () => {
  //     const script = document.createElement('script');
  //     script.src = "https://cse.google.com/cse.js?cx=901f79cf0c6454169";
  //     script.async = true;
  //     script.id = 'google-cse-script';
  //     document.head.appendChild(script);
      
  //     script.onload = () => {
  //       if (window.google && window.google.search.cse) {
  //         window.google.search.cse.element.render({
  //           div: "searchResults",
  //           tag: "search"
  //         });
  //       }
  //     };
  //   };

  //   loadGoogleCSE();

  //   return () => {
  //     const script = document.getElementById('google-cse-script');
  //     if (script) {
  //       document.head.removeChild(script);
  //     }
  //   };
  // },  []);

  useEffect(() => {
    // Load the Google CSE script
    const script = document.createElement('script');
    script.src = "https://cse.google.com/cse.js?cx=901f79cf0c6454169";
    script.async = true;
    document.head.appendChild(script);
    
    script.onload = () => {
            if (window.google && window.google.search.cse) {
              window.google.search.cse.element.render({
                div: "searchResults",
                tag: "search"
              });
            }
          };
    // Clean up the script when the component unmounts
    return () => {
      document.head.removeChild(script);
    };

  }, []);
    
  return (
    <>
      <Header/>
      <main>
        {/* Content goes here */}
        <div className="content">
          <h1>Welcome to Our Trading Website</h1>
          <p>Find the best trading tools and resources here.</p>
        </div>
        <div id="searchResults"></div>
      </main>
      <Footer/>
      {/* <script src="https://cse.google.com/cse.js?cx=901f79cf0c6454169" async></script> */}
    </>
  );
}

export default App;
