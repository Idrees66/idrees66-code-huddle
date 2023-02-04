import React, { useState, useEffect } from 'react'
import Card from '../Card/Card'

const Submenu = () => {
    const [show, setShow] = useState(false);


    useEffect(() => {
        dropdown();
    }, [])

    function dropdown() {
        setShow(!show)
    }
    return (
        <>
            <li>
                <button onClick={dropdown} type="button" class="flex items-center w-full p-2 text-base font-normal text-gray-900 transition duration-75 rounded-lg group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="submenu" data-collapse-toggle="submenu">
                    <span class="flex-1 ml-3 text-left whitespace-nowrap" sidebar-toggle-item>Active Channels</span>
                    <span class={`${show ? "rotate-90" : "rotate-360"} text-sm  text-white`} id="arrow" >&#x27A4;</span>
                </button>

                {show ?
                    <div id="submenu" class="p-2 py-4 space-y-4 " >
                        <div class="card-row">
                            <Card title="CP" />
                            <Card title="DPD" />
                        </div>
                        <div class="card-row">
                            <Card title="SWAT" />
                            <Card title="ALL SWAT" />
                        </div>
                        <div class="card-row">
                            <Card title="GANG" />
                        </div>
                    </div>
                    : null
                }

            </li>
        </>
    )
}

export default Submenu
