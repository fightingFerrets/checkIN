import axios from "axios";

export default {
    getUser: function (userId) {
        console.log(userId);
        return axios.get("/api/user/", userId);
    },
    userLogIn: function (userId) {
        console.log(userId);
        return axios.post("/api/user/", userId);
    },
    //get user contacts
    getContacts: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Save Contact Info to db
    saveContact: function (id, contactData) {
        return axios.post("/api/user/" + id, contactData);
    },
    //Send message or check in
    sendMessage: function (receiverData) {
        return axios.post("/api/sms", receiverData);
    },
    doesExist: function (id) {
        console.log("exist", id);
        return axios.get("/api/user/does-exist/" + id)
    }
};