import firebase from "firebase";
import {getLocalStorageUid} from "../../LocalStorage/LocalStorage";

const userUID = getLocalStorageUid();
console.log("userUID =", userUID);

export function setUserData(object, path) {
    firebase.database()
        .ref('users/' + userUID + path)
        .set({...object}, (error) => {
            if (error) {
                // The write failed...
            } else {
                // Data saved successfully!
            }
        });
}

export function getUserDataOnce() {
    async function init() {
        let data = null;
        if (userUID !== null) {
            let dataRef = firebase.database().ref();

            await dataRef
                .child('users/')
                .child(userUID)
                .child('/myProfile')
                .get()
                .then((snapshot) => {
                    if (snapshot.exists()) {
                        data = snapshot.val();
                    } else {
                        console.log("No data available");
                    }
                })
                .catch((error) => {
                    console.error(error);
                });
            return data;
        }
        return null;
    }

    return init();


}

export async function getUserDataAlways() {
    let data;
    if (userUID) {
        let dataRef = firebase.database().ref('users/' + userUID);
        await dataRef
            .on('value', (snapshot) => {
                console.log(snapshot.val());
                return data = snapshot.val();
            });
    }
    return data
}