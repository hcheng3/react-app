import axios from "axios";

export default axios.create({
    baseUrl: "https://api.unsplash.com/",
    headers:{
        Authorization: "Client-ID FeDmeeQLa0SEo-QtY-3PkFHUI4KyHkpDyEl4cISUBF8"
    }
})