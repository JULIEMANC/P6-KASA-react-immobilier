
const Slides =({alt,pictures}) =>{
    return(<div>
    {pictures.map((picture, index)=>(
        <div key={index}>
            <img src={picture} alt={alt}/>
            </div>
    ))}    

    </div>) 
}




export default Slides;
