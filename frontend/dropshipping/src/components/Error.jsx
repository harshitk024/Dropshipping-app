const Error = (message) => {

    console.log(message)

    return (
        <>
        <div className = "error-container">
            {message.message}
        </div>
        </>
    )
}

export default Error