import React from 'react'

const Text = ({handleChange, handleSubmit}) => {

    return (
        <div className='row'>
            <form className='col 12' onSubmit={handleSubmit}>
                <div className="row">
                    <div className="input-field col s4">
                        <input 
                        onChange={handleChange}
                        placeholder="TOP TEXT" id="topText" type="text"></input>
                        
                    </div>
                    <div className="input-field col s4">
                        <input 
                        onChange={handleChange}
                        placeholder="BOTTOM TEXT"
                        id="bottomText" type="text"></input>
                        
                    </div>
                    <div className="gen col s4">
                    <button className="waves-effect waves-light btn">Generate</button>
                    </div>
                </div>
            </form>
        </div>
        
    )

}

export default Text