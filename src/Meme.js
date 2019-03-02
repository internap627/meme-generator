import React from 'react'

const Meme = ({memeObj}) => {

    
    return (
        <div className="row">
            <div className="col s12 m7">
                <div className="card">
                    <div className="card-image">
                        <img src={memeObj.imgUrl}></img>
                        <span className="card-title top">{memeObj.topText}</span>
                        <span className="card-title bottom">{memeObj.bottomText}</span>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default Meme