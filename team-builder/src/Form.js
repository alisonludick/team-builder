import React from 'react';

function Form(props) {
    // what data does the form need to populate itself?
    // what callbacks does the form need to perform
    // its basic functions of updating fields and submitting?
  
    return (
      <form>
        <label htmlFor='nameInput'>Name</label>
        <input id='nameInput' type='text' />
  
        <label htmlFor='emailInput'>Email</label>
        <input id='emailInput' type='text' />

        <label htmlFor='roleInput'>Role</label>
        <input id='roleInput' type='text' />
  
        <button
          disabled={false}
          onClick={e => e.preventDefault()}
        >
          submit
          </button>
      </form>
    );
  }

  export default Form; 