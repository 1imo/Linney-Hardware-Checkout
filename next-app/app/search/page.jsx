"use client"

export default function Search() {

    const getLocation = () => {
        const successCallback = (position) => {
            console.log(position);
          };
          
          const errorCallback = (error) => {
            console.log(error);
          };
          
          navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
    }
    return <div>
        <button onClick={() => getLocation()}>Location</button>
    </div>
}