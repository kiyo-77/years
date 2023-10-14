import React,{useState} from "react";
import "./App.css";

export default function App()
{





  const [birthDate, setBirthDate] = useState("");
  const [years, setYears] = useState(null);
  
  
  const calculateAge = () => {
    if (!birthDate) return;

    const currentDate = new Date();
    if (new Date(birthDate) > currentDate) {
      setBirthDate("");
      setYears(null);
      
      alert("Invalid Date of Birth");
      return;
    }

    const diffTime = currentDate - new Date(birthDate);
    const totalDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    setYears(Math.floor(totalDays / 365.25));
   
    
  };

  return (
    <div className="container">
      <h1>Age Calculator</h1>
      <form>
        <h3>Enter your date of birth</h3>
        <input
          type="date"
          value={birthDate}
          onChange={(e) => {
            setBirthDate(e.target.value);
          }}
        />
        <br />
        <br />
        <button onClick={calculateAge}>Calculate Age </button>
      </form>
      {birthDate && years &&(
        <h2>
          You are {years} years old 
        </h2>
      )}
    </div>
  );
};
