

function DisplayContact({picture, name, popularity, oscar, emmy, id, contactArr, setter}){
    return (
        <div className="contact">
            <div className="id_photo"><img src={picture} alt="id_photo"/></div>
            <p>{name}</p>
            <p>{popularity}</p>
            {oscar ? <div>🏆</div> : <div></div>}
            {emmy ? <div>🏆</div> : <div></div>}
            <div className="deleteBtn">
                <button onClick={()=>{
                setter(contactArr.filter((contact)=> contact.id !== id))
                }}>Delete</button>
            </div>
        </div>
    )
}
export default DisplayContact