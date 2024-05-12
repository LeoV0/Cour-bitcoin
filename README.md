# Cour du Bitcoin
Ce projet est la représentation graphique du cour du bitcoin (du 1er janvier 2020 au 19 mars 2023)

## Contenu du Projet
Le projet est composé des éléments suivants :

HTML (index.html):Définit la structure de base de la page web.
Inclut des balises <canvas> pour afficher le graphique.
Lie les fichiers CSS et JavaScript nécessaires.

JavaScript (script.js):

Utilise Axios, une bibliothèque pour effectuer des requêtes HTTP, pour récupérer les données sur les prix du Bitcoin à partir de l'API de CoinDesk.
Traite les données récupérées pour extraire les prix et les dates correspondantes.

Sélectionne les prix du premier jour de chaque mois et les dates correspondantes.

Utilise Chart.js pour créer un graphique linéaire avec les dates en abscisse et les prix en ordonnée.
Affiche le graphique dans la balise <canvas> de l'HTML.
API Endpoint:

L'URL https://api.coindesk.com/v1/bpi/historical/close.json?start=2020-01-01&end=2023-03-19 est utilisée pour récupérer les données sur les prix du Bitcoin.
Cette URL retourne les prix de clôture du Bitcoin pour chaque jour dans la plage de dates spécifiée (du 1er janvier 2020 au 19 mars 2023).

## Utilisation
Pour visualiser le graphique, ouvrez simplement le fichier index.html dans un navigateur web.

Cloner le Projet
Pour cloner ce projet sur votre ordinateur, utilisez la commande suivante dans votre terminal :

bash
Copy code
git clone https://github.com/LeoV0/Cour-bitcoin.git

## Visualisation
Si vous voulez avoir une première aperçu du projet cliquez sur le lien ci dessous :
https://leov0.github.io/Cour-bitcoin/
![Screenshot_14](https://github.com/LeoV0/Cour-bitcoin/assets/90071559/a5270fc2-dc5c-4728-a549-018e6275c66f)
