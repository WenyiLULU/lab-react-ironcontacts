function SortContacts({contactArr, setter, sortBy, children}){
    let contactsSorted = JSON.parse(JSON.stringify(contactArr))
    return (
        <button onClick={()=>{
            setter(contactsSorted.sort((a, b) => a[sortBy] > b[sortBy] ? 1 : a[sortBy] < b[sortBy] ? -1 : 0))
        }}>{children}</button>
    )
    
}

export default SortContacts