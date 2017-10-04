class RichSnippet {

    private _raiting: number
    private _comments: number
    private _createTime: number
    private _urlSelf: string

    private _nameClient: string
    private _email: string
    private _author: string
    private _image: string
    private _logo: string
    private _phone: number
    private _description: string
    private _address: string
    private _city: string
    private _state: string
    private _postalCode: number
    private _country: string
    private _linkGoogle: string
    private _linkFacebook: string
    private _linkTwitter: string
    private _openingHours: string
    private _geoLongitutde: number
    private _geolatitude: number
    private _keywords: string

   // constructor(openingHours: string) {
   //     this._openingHours = "Mo,Tu,We,Th,Fr 08:00-18:00"
   // }

    mathRaiting() {
        return Math.floor((Math.random() * 5) + 4);
    }

    getNameClient(): void {
        this._nameClient;
    }

    setNameCliet(nameClient: string): void {
        this._nameClient = nameClient;
    }
}

