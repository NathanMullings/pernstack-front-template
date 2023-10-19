import React from 'react';


const HomePage = ({} ) => {

  const containerStyle = {
    background: `url(/homeimage.png) no-repeat center center fixed`,
    backgroundSize: 'cover',// this line is added
    minHeight: '100vh',
    color: 'black',
    padding: '50px',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
};

  return (
    <div style={containerStyle}>
            <h1>Notes Made Simple</h1>
            <p>Helping you create conceptual linking notes for research, educaiotn, product workflow and much more </p>
            <p>Where just you and your team can collaborate to make working on new concepts much simpler</p>
            
            

            {/* Add your animated characters images and other elements here */}
        </div>
  );
};

export default HomePage;
