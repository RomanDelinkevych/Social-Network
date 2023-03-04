export function creatorOrChangerLocalStorageUid(value) {
    localStorage.setItem("userUID", JSON.stringify(value));
}

export function deleteLocalStorageUid() {
    localStorage.removeItem("userUID");
}

export function getLocalStorageUid() {
    const localData = JSON.parse(localStorage.getItem("userUID"));

    if (localData === null) {
        return null
    } else {
        return localData.uid;
    }
}