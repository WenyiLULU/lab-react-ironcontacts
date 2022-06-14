import allContacts from '../contacts.json'

function getRandomIndex(){
    return Math.floor(Math.random()*allContacts.length)
}

function AddRandomBtn({contactArr, setter}){
    return(
        <button onClick={()=> {
            let randomIndex = getRandomIndex()
            while(contactArr.includes(allContacts[randomIndex])){
                randomIndex = getRandomIndex()
            }
            setter(contactArr
                .concat(allContacts[randomIndex])
                )}
        }>Add Random Contact</button>
    )
}

export default AddRandomBtn