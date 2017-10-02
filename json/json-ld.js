<script type="application/ld+json">
	{
		"@context": "http://www.schema.org",
		"@type": "Corporation",
		"name": "document.write(nameClient)",
		"url": "document.write(urlSelf)",
		"logo": "document.write(logo)",
		"image": "document.write(image)",
		"telephone": "document.write(phone)",
		"email": "document.write(email)",
		"description": "document.write(description)",
		"address": {
		"@type": "PostalAddress",
			"streetAddress": "document.write(address)",
			"addressLocality": "document.write(city)",
			"addressRegion": "document.write(country)",
			"postalCode": "document.write(postalCode)",
			"addressCountry": "document.write(country)"
		},
		"sameAs" : [
		"document.write(linkGoogle)",
    "document.write(linkFacebook)",
    "document.write(linkTwitter)"
		],
		"aggregateRating": {
		"@type": "aggregateRating",
			"ratingValue": "document.write(raiting)",
			"reviewCount": "document.write(comments)"
		}
	}
</script>

	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
		"@type": "LocalBusiness",
		"description": "<?=$description;?>",
		"name": "<?=$nomeEmpresa;?>",
		"image": "<?=$url.$imagem;?>",
		"telephone": "5511<?=$tel;?>",
		"openingHours": "document.whrite(openingHours)",
		"address": {
			"@type": "PostalAddress",
			"streetAddress": "<?=$endereco;?>",
			"addressLocality": "<?=$cidade;?>",
			"addressRegion": "<?=$uf;?>",
			"postalCode": "<?=$cep;?>",
			"addressCountry": "<?= $schema->adressCountry ?>"
		},
		"sameAs" : [
		"<?= $schema->linkgoogle ?>",
		"<?= $schema->linkFace ?>",
		"<?= $schema->linkTwitter ?>"
		],
		"geo": {
			"@type": "GeoCoordinates",
			"longitude": "<?=$geoLongitude ?>",
			"latitude": "<?=$geoLatitude;?>"
		}
	}
</script>

	<script type='application/ld+json'>
		{
			"@context": "http://www.schema.org",
		"@type": "WebSite",
		"name": "<?=$nomeEmpresa;?>",
		"url": "<?=$url;?>",
		"description": "<?=$description;?>",
		"publisher": "<?=$author;?>"
	}
</script>

	<script type='application/ld+json'>
		{
			"@context": "http://www.schema.org",
		"@type": "product",
		"brand": "<?=$nomeEmpresa;?>",
		"logo": "<?=$url.$logotipo;?>",
		"name": "<?=$title;?>",
		"category": "Widgets",
		"image": "<?=$url.$imagem;?>",
		"description": "<?=$description;?>",
		"aggregateRating": {
			"@type": "aggregateRating",
			"ratingValue": "<?=$estrelas;?>",
			"reviewCount": "<?=$coments;?>"
		}
	}
</script>

	<script type="application/ld+json">
		{
			"@context": "http://schema.org/",
		"@type": "Recipe",
		"mainEntityOfPage": "<?=$urlSelf;?>",
		"name": "<?=$title;?>",
		"image": "<?=$url.$imagem;?>",
		"author": {
			"@type":"Person",
			"name":"<?=$nomeEmpresa;?>"
		},
		"datePublished": "<?=$criacao?>",
		"description": "<?=$description;?>",
		"aggregateRating": {
			"@type": "AggregateRating",
			"ratingValue": "<?=$estrelas;?>",
			"reviewCount": "<?=$coments;?>"
		},
		"publisher": {
			"@type": "Organization",
			"name": "<?=$author;?>",
			"logo": "<?=$url.$logotipo;?>"
		}
	}
</script>

	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
		"@type": "TechArticle",
		"headline": "<?=$title;?>",
		"alternativeHeadline": "<?=$title;?> - <?=$nomeEmpresa;?>",
		"proficiencyLevel": "Beginner",
		"image": "<?=$url.$imagem;?>",
		"author": "<?=$nomeEmpresa;?>",
		"genre": "<?=$keywords;?>",
		"keywords": "<?=$keywords;?>",
		"publisher": "<?=$author;?>",
		"url": "<?=$urlSelf;?>",
		"datePublished": "<?=$criacao?>",
		"description": "<?=$description;?>",
		"articleBody": "<?=$description;?> - <?=$nomeEmpresa;?>"
	}
</script>

	<script type="application/ld+json">
		{
			"@context": "http://schema.org",
		"@type": "BreadcrumbList",
		"itemListElement":[
		{
			"@type":"ListItem",
			"position":1,
			"item": {"@id":"<?=$url;?>", "name":"<?=$nomeEmpresa;?>", "url":"<?=$url;?>" }
		},
		{
			"@type":"ListItem",
			"position":2,
			"item": {"@id":"<?=$url;?>mapa-site", "name":"Mapa site", "url":"<?=$url;?>mapa-site" }
		},
		{
			"@type":"ListItem",
			"position":3,
			"item": {"@id":"<?=$urlSelf;?>", "name":"<?=$title;?>", "url":"<?=$urlSelf;?>" }
		}
		]
	}
</script>