import axios from "axios";
import { url } from "../utils/url";

const getCandidates = async () => {
    try {
        const response = await axios.get(`${url}/candidates`);
        return response.data;
    } catch(e) {
        console.log(e);
    }
}

export { getCandidates }