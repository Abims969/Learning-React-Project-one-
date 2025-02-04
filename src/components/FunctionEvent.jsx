function FunctionEvent (){
    const handleClick = () => {
        console.log ('Button Clicked')
    }

    return(
        <div>
            Functional Component
            <button onClick={handleClick}>Click Me</button>
        </div>
    )
}

export default FunctionEvent;