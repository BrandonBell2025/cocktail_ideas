import React, { useState } from 'react';

function App() {

  // State to hold the random cocktail data: AI Generated
  const [cocktail, setCocktail] = useState(null);

  // Function to fetch a random cocktail from the API
  // Set the cocktail state with the fetched data
  // Log any errors that occur during fetching
  // Syntax is AI Generated, API implementation was not 
  const fetchRandomCocktail = async () => {
    try {
      const response = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php');
      const data = await response.json();
      setCocktail(data.drinks[0]);
    } catch (error) {
      console.error("Error fetching the cocktail:", error);
    }
  };
 

  // Chat GPT provided me with a broad boiler plate for the following styles, I customized it to fit my desired style

  //App style
  const appStyle = {
    textAlign: 'center',
    padding: '40px',
    background: '#B7C9A5',
    fontFamily: "'Poppins', sans-serif",
    minHeight: '100vh',
    color: '#3D3C35',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  };

  // Styles for the title
  const titleStyle = {
    fontSize: '48px',
    marginBottom: '20px',
    fontFamily: "'Bubblegum Sans', cursive",
    color: '#4B4A43',
  };

  // Styles for the button
  const buttonStyle = {
    backgroundColor: '#F3EBD5',
    border: 'none',
    color: '#3D3C35',
    padding: '15px 30px',
    fontSize: '18px',
    cursor: 'pointer',
    borderRadius: '5px',
    boxShadow: '0 4px 10px rgba(0, 0, 0, 0.2)',
    transition: 'background-color 0.3s, transform 0.2s, box-shadow 0.3s',
  };

  // Styles for button hover effect
  const buttonHoverStyle = {
    backgroundColor: '#E5D8B7',
    transform: 'scale(1.05)',
    boxShadow: '0 0 20px rgba(229, 216, 183, 0.7)',
  };

  // Styles for the cocktail card
  const cocktailCardStyle = {
    background: '#FFF8E3',
    borderRadius: '15px',
    padding: '20px',
    margin: '20px auto',
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    maxWidth: '800px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.2s, box-shadow 0.2s',
    position: 'relative',
    overflow: 'hidden',
  };

  // Styles for cocktail card hover effect
  const cocktailCardHoverStyle = {
    transform: 'scale(1.05)',
    boxShadow: '0 8px 25px rgba(0, 0, 0, 0.3)',
  };

  // Styles for cocktail name
  const cocktailNameStyle = {
    fontSize: '28px',
    marginBottom: '10px',
    color: '#4B4A43',
    fontWeight: 'bold',
    fontFamily: "'Raleway', sans-serif",
  };

  // Styles for cocktail image
  const cocktailImageStyle = {
    width: '250px',
    height: 'auto',
    borderRadius: '10px',
    marginRight: '20px',
  };

  // Styles for cocktail details
  const cocktailDetailsStyle = {
    textAlign: 'left',
    flexGrow: 1,
  };

  // Styles for ingredients list
  const ingredientsListStyle = {
    listStyle: 'none',
    padding: '0',
  };

  // Styles for each ingredient item
  const ingredientItemStyle = {
    margin: '5px 0',
    background: '#f8f8f8',
    padding: '10px',
    borderRadius: '5px',
    transition: 'background 0.2s',
  };

  // Styles for ingredient item hover effect
  
  const ingredientHoverStyle = {
    background: '#D9EAD3',
  };

  // Styles for instructions
  const instructionStyle = {
    marginTop: '10px',
    padding: '10px',
    background: '#f1f1f1',
    borderRadius: '5px',
    fontFamily: "'Poppins', sans-serif",
  };


  // I set up the broad div structure. AI integrated the styling and onclick events / corrected syntax errors
  // The following js code renders the main interface of the Random Cocktail Generator app.
  // It displays a title, a button to fetch a random cocktail, and conditionally renders
  // a cocktail card when a cocktail is fetched. The card includes the cocktail's image,
  // name, list of ingredients with their measurements, and preparation instructions.
  return (
    <div style={appStyle}>
      <h1 style={titleStyle}>Random Cocktail Generator</h1>
      <button
        style={buttonStyle}
        onMouseEnter={(e) => {
          e.target.style.backgroundColor = buttonHoverStyle.backgroundColor;
          e.target.style.transform = buttonHoverStyle.transform;
          e.target.style.boxShadow = buttonHoverStyle.boxShadow;
        }}
        onMouseLeave={(e) => {
          e.target.style.backgroundColor = buttonStyle.backgroundColor;
          e.target.style.transform = 'scale(1)';
          e.target.style.boxShadow = buttonStyle.boxShadow;
        }}
        onClick={fetchRandomCocktail} 
      >
        Get Random Cocktail
      </button>
      {cocktail && (
        <div
          style={cocktailCardStyle}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = cocktailCardHoverStyle.transform;
            e.currentTarget.style.boxShadow = cocktailCardHoverStyle.boxShadow;
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'scale(1)';
            e.currentTarget.style.boxShadow = cocktailCardStyle.boxShadow;
          }}
        >
          <img
            style={cocktailImageStyle}
            src={cocktail.strDrinkThumb}
            alt={cocktail.strDrink}
          />
          <div style={cocktailDetailsStyle}>
            <h2 style={cocktailNameStyle}>{cocktail.strDrink}</h2>
            <h3 style={{ fontFamily: "'Raleway', sans-serif" }}>Ingredients:</h3>
            <ul style={ingredientsListStyle}>
              {Object.keys(cocktail)
                .filter(key => key.startsWith('strIngredient') && cocktail[key]) 
                .map((key, index) => (
                  <li
                    key={index}
                    style={ingredientItemStyle}
                    onMouseEnter={(e) => e.currentTarget.style.background = ingredientHoverStyle.background}
                    onMouseLeave={(e) => e.currentTarget.style.background = ingredientItemStyle.background}
                  >
                    {cocktail[key]} - {cocktail[`strMeasure${index + 1}`]} 
                  </li>
                ))}
            </ul>
            <h3 style={{ fontFamily: "'Raleway', sans-serif" }}>Instructions:</h3>
            <p style={instructionStyle}>{cocktail.strInstructions}</p> 
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
