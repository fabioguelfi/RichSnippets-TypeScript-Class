<?php
interface iRichSnippets {
    // Injetar valores nas constantes
    const nomeCliente =  public function getNameClient();
    const dominioCliente = 'www.gluesp.com.br';

    // Metodos que se auto assinam
    public function raiting();
    public function comments();
    public function createTime();
    public function urlSelf();

    // Assinar Metodos
    public function setNameClient('teste');
    public function setDomainClient();
    public function setEmail();
    public function setAuthor();
    public function setImage();
    public function setLogo();
    public function setPhone();
    public function setDescripition();
    public function setAddress();
    public function setCity();
    public function setState();
    public function setPostalCode();
    public function setCountry();
    public function setLinkGoogle();
    public function setLinkFacebook();
    public function setLinkTwitter();
    public function setOpeningHours();
    public function setGeoLongitude();
    public function setGeoLatitude();
    public function setKeywords();

};
?>
<script type="application/ld+json">
	{
        "@context": "http://www.schema.org",
		"@type": "Corporation",
		"name": "<?php printf(nomeCliente) ?>", <// preciso retornar aqui o valor da constante que capturo com o metodo get
		"url": "<?=$url;?>",
		"logo": "<?=$url.$logotipo;?>",
		"image": "<?=$url.$imagem;?>",
		"telephone": "5511<?=$tel;?>",
		"email": "<?=$email;?>",
		"description": "<?=$description;?>",
		"address": {
        "@type": "PostalAddress",
			"streetAddress": "<?=$endereco;?>",
			"addressLocality": "<?=$cidade;?>",
			"addressRegion": "<?=$uf;?>",
			"postalCode": "<?=$cep;?>",
			"addressCountry": "BR"
		},
		"sameAs" : [
        "<?=$linkgoogle?>",
        "<?=$linkface?>",
        "<?=$linktwitter?>"
    ],
		"aggregateRating": {
        "@type": "aggregateRating",
			"ratingValue": "<?=$estrelas;?>",
			"reviewCount": "<?=$coments;?>"
		}
	}
</script>

