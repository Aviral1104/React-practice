import React from 'react'

const footer = () => {
    const today = new Date();
    return (
        <footer>
            <p>copyright &copy; {today.getFullYear()}</p>
        </footer>
    )
}

export default footer