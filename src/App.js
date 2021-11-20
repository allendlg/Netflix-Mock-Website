
import './App.css';
import Row from './Row';
import requests from './requests';

function App() {
  return (
    <div className="App">
      <h1> 
        Mock Netflix front end
      </h1>
     <Row 
     title="NETFLIX ORIGINALS" 
     fetchURL={requests.fetchNetflixOriginals} 
      isLargeRow
     />
     <Row title="Trending Now" fetchURL={requests.fetchTrending} />
     <Row title="Action Movies" fetchURL={requests.fetchActionMovies} />
     <Row title="Comedies" fetchURL={requests.fetchComedyMovies} />
     <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies} />
     <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies} />
     <Row title="Documentaries" fetchURL={requests.fetchDocumentaries} />
     

    </div>
  );
}

export default App;
