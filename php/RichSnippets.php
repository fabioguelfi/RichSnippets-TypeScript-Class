<?php
require_once 'interfaceRichSnippets.php';
class RichSnippet implements iRichSnippets {

    private $raiting;
    private $comments;
    private $createTime;
    private $urlSelf;

    private $nameClient;
    private $email;
    private $author;
    private $image;
    private $logo;
    private $phone;
    private $description;
    private $address;
    private $city;
    private $state;
    private $postalCode;
    private $country;
    private $linkGoogle;
    private $linkFacebook;
    private $linkTwitter;
    private $openingHours;
    private $geoLongitude;
    private $geolatitude;
    private $keywords;

    public function __construct(){

     }

    public function raiting(){
        //To Do return rand()
    }

    public function comments(){
        //To Do return   
    }

    public function createTime(){
        //To Do return
    }

    public function urlSelf(){
        //To Do return
    }

    public function getNameClient () {
        return $this->nameClient;
    }
    public function setNameClient ($n) {
        return $this->nameClient = $n;
    }

    public function getEmail(){
        return $this->email;
    }
    public function setEmail($e){
        return $this->email = $e; 
    }

    public function getAuthor(){
        return $this->author;
    }
    public function setAuthor($a){
        return $this->author = $a;
    }

    public function getImage(){
        return $this->image;
    }
    public function setImage($i){
        return $this->image = $i;
    }

    public function getLogo(){
        return $this->logo;
    }
    public function setLogo($l){
        return $this->logo = $l;
    }

    public function getPhone(){
        return $this->phone;
    }
    public function setPhone($p){
        return $this->phone = $p;
    }

    public function getDescripition(){
        return $this->description;
    }
    public function setDescripition($d){
        return $this->description = $d;
    }

    public function getAddress(){
        return $this->getAddress;
    }
    
    public function setAdress($a){
        return $this->address = $a;
    }

    public function getCity(){
        return $this->city;
    }
    public function setCity($c){
        return $this->city = $c; 
    }

    public function getState(){
        return $this->state;
    }
    public function setState($s){
        return $this->state = $s;
    }

    public function getPostalCode(){
        return $this->postalCode;
    }
    public function setPostalCode($p){
        return $this->postalCode = $p;
    }

    public function getCountry(){
        return $this->postalCountry;
    }
    public function setCountry($c){
        return $this->country = $c
    }

    public function getLinkGoogle(){
        return $this->linkGoogle;
    }
    public function setLinkGoogle($g){
        return $this->linkGoogle = $g;
    }

    public function getLinkFacebook(){
        return $this->linkFacebook;
    }
    public function setLinkFacebook($f){
        return $this->linkFacebook = $f;
    }

    public function getLinkTwitter(){
        return $this->linkTwitter;
    }
    public function setLinkTwitter($t){
        return $this->linkTwitter = $t;
    }

    public function getOpeningHours(){
        return $this->openingHours;
    }
    public function setOpeningHours($o){
        return $this->openingHours = $o;
    }

    public function getGeoLongitude(){
        return $this->geoLongitude;
    }
    public function setGeoLongitude($l){
        return $this->getLatitude = $l;
    }

    public function getGeoLatitude(){
        return $this->geoLatitude;
    }
    public function setGeoLatitude($l){
        return $this->geoLatitude = $l;
    }

    public function getkeywords(){
        return $this->keywords;
    }
    public function setKeywords($k){
        return $this->keywords = $k;
    }

}