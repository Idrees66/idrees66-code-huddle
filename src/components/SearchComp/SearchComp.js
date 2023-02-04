import React from 'react'

const SearchComp = ({updateSearch}) => {
    return (
        <form>
            <div class="relative">

                <input type="search" onChange={e=>updateSearch(e.target.value)} id="default-search" class="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-purple-600 focus:border-purple-600 dark:bg-darkshade dark:border-gray-600 dark:placeholder-purple-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-purple-600" placeholder="Search.." required />
                <div  class="text-white absolute right-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-purple-600 font-medium rounded-lg text-sm px-4 py-2 dark:bg-purple-600 dark:hover:bg-purple-400 dark:focus:ring-blue-800">
                    <svg aria-hidden="true" class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                </div>

            </div>
        </form>
    )
}

export default SearchComp
