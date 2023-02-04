import React, { useState, useEffect } from 'react'

const VideoData = [
    { name: "Appolo.mp4" },
    { name: "Badar.mp4" },
    { name: "Atlas.mp4" },
    { name: "Atlas.mp4" },
    { name: "Appolo.mp4" }
]

const VideoSection = ({searchItem}) => {
    const [videoFile, setVideoFile] = useState(VideoData);
    const [videoArray, setVideoArray] = useState(VideoData);

   
    useEffect(() => {
        if(searchItem){
            applyFilter(searchItem)
        }
        else{
            setVideoFile(videoArray)  
        } 
    
    }, [searchItem])

    function applyFilter(val) {

        let temp = [];
        videoFile.forEach((list) => {
            if (list.name.toLocaleLowerCase().search(val.toLocaleLowerCase()) > -1) {
                temp.push(list)
            }
        }) 
        setVideoFile(temp)
    }

    function pickVideoFile() {
        const fileInput = document.createElement("input");
        fileInput.type = "file";
        fileInput.accept = "video/*";
        const temp = [...videoFile]
        fileInput.addEventListener("change", () => {
            temp.push(fileInput.files[0])
            console.log(fileInput.files[0])

            setVideoFile(temp)

        });

        fileInput.click();
    }

    return (
        <div class="flex flex-wrap mt-9 ">

            {videoFile.length > 0 ?
                videoFile.map(videosrc =>
                    <div class="video-container">
                        <p class="video-caption">{videosrc.name}</p>
                        <video width="100%" height="100%" src={videosrc.name} controls />
                    </div>
                ) : null
            }

            <div class="video-container border-0  flex items-center justify-center   ">
                <button onClick={pickVideoFile} class="border-2 border-purple-400 rounded py-2 px-4  text-purple-400 hover:bg-purple-400 hover:text-white transition duration-150 ease-out hover:ease-in">
                    Select Video
                </button>

            </div>
        </div>
    )
}

export default VideoSection
