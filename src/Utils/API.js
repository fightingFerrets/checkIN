import axios from "axios";

export default {
    // Gets articles from the NYT API
    getContacts: function (id) {
        return axios.get("/api/user/" + id);
    },
    // Saves an article to the database
    saveContact: function (id, contactData) {
<<<<<<< HEAD
        return axios.post("/api/user/" + id, contactData);
=======
        return axios.post("/api/user" + id, contactData);
>>>>>>> 5ffc791bc2ce816d11946b431583ef2e5cf9796d
    },

    userLogIn: function (user) {
        return axios.post("/api/user", user);
    },

<<<<<<< HEAD
    //Send message or check in 
=======
    //Send message or check in
>>>>>>> 5ffc791bc2ce816d11946b431583ef2e5cf9796d
    sendMessage: function (receiverData) {
        return axios.post("/api/sms", receiverData);
    }
};