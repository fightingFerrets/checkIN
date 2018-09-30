import axios from "axios";

export default {
    userLogIn: function (userId) {
        console.log(userId);
        return axios.post("/api/user/", userId);
    },

    getContacts: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Saves an article to the database
    saveContact: function (id, contactData) {
        return axios.post("/api/user/" + id, contactData);
    },
    //Send message or check in
    sendMessage: function (receiverData) {
        return axios.post("/api/sms", receiverData);
    }
};