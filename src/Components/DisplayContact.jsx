function DisplayContact({picture, name, popularity, oscar, emmy}){
    return (
        <div className="contact">
            <div className="id_photo"><img src={picture} alt="id_photo"/></div>
            <p>{name}</p>
            <p>{popularity}</p>
            {oscar && (<div>🏆</div>)}
            {emmy && (<div>🏆</div>)}
        </div>
    )
}
export default DisplayContact