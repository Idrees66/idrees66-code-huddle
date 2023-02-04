import React from 'react'
import Swal from "sweetalert2"

const Card = ({ title }) => {

    function handleClick() {
        Swal.fire({
            icon: "success",
            title: `Welcome ${title} 🙂🙂`,
            text: "Let's Go! 👍",
            timer: 1500,
            showConfirmButton: false,
        })
    }

    return (
        <div class="card-container" onClick={handleClick}>
            <div class="card-content">
                <h3 class="card-h1" >{title}</h3>
                <h3 class="card-text text-[12px]">&#x2709;  Channel</h3>
            </div>
        </div>
    )
}

export default Card
