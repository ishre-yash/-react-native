class Place {
    constructor(title, imageUri, address, lat, lng) {
        this.id = new Date().toString() + Math.random().toString();
        this.title = title;
        this.imageUri = imageUri;
        this.address = address;
        this.lat = lat;
        this.lng = lng;
    }
}