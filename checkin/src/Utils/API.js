import axios from "axios";

export default {
    // Gets articles from the NYT API
    getContacts: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Saves an article to the database
    saveContact: function (contactData) {
        return axios.post("/api/user", contactData);
    }
};
