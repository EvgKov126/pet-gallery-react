import Header from './components/Header';
import Main from './components/Main';
import Footer from './components/Footer';
import './index.css';


const PET_DATA = [
  { id: 1, name: "Бакс", species: "Собака", age: 7, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTp3oZBH312SzPuSV5wtYK3meaay3axZXG-ug&s" },
  { id: 2, name: "Мурка", species: "Кішка", age: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwHSaeGOMGbRAQBkkwL6kSyjNse9LFbaq75Q&s" },
  { id: 3, name: "Рекс", species: "Собака", age: 5, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS0QdoyIu1C-9_NqSENqzokmCVmIOrneWXfCg&s" },
  { id: 4, name: "Сімба", species: "Кішка", age: 2, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWKolOwe99yaAns-rE19pdRntMps-AVoOjIg&s" },
  { id: 5, name: "Барсик", species: "Собака", age: 3, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0d4HhnuFCTEkDdv_tpjZXGY2uo2Uod0h6yA&s" },
  { id: 6, name: "Антон", species: "Хом'як", age: 1, imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQF1lcCVB7c2wwB7FgD3FpdFMYNuoOzXWospg&s" }
];

function App() {
  return (
    <div className="App">
      <Header />
      <Main pets={PET_DATA} />
      <Footer year="2026" author="Ковалнко Євгеній" />
    </div>
  );
}

export default App;