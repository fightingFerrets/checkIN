import axios from "axios";

export default {
    // Gets articles from the NYT API
    getContacts: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Saves an article to the database
    saveContact: function (id, contactData) {
        return axios.post("/api/user" + id, contactData);
    },

    userLogIn: function (user) {
        return axios.post("/api/user", user);
    },

    //Send message or check in
    sendMessage: function (receiverData) {
        return axios.post("/api/sms", receiverData);
    }
};