function DisplayContact({picture, name, popularity}){
    return (
        <div className="contact">
            <div className="id_photo"><img src={picture} alt="id_photo"/></div>
            <p>{name}</p>
            <p>{popularity}</p>
        </div>
    )
}
export default DisplayContact