# Bob game
Dit is de repository voor de bob-game, gehost op https://olavgit.github.io/LearnDiTwin-Gamification/. 

## Deployment via gh-pages
Dit project is gehost op gh-pages. dit zijn de stappen die genomen moet worden:
- Clone het project naar een lokale repository waar git en npm is geinstalleerd.
- Run ```npm i```
  - Als de gh-pages lib er niet erbij komt, run ook ```npm i gh-pages``` 
- Check of de volgende scripts staan in de package.json
  ```
  "predeploy": "npm run build",
  "deploy": "gh-pages -d dist -b [branch naam]",
  ```
  Vervang [branch naam] met een naam voor de branch waar de deployment op zal staan (meestal heet deze "gh-pages"). Deze branch moet nog niet bestaan en zal automatisch worden aangemaakt. 

- run ```npm run deploy```
## lokaal draaien
om het project lokaal te draaien voor development kan je gewoon de repo clonen.
- Clone het project naar een lokale repository waar npm is geinstalleerd.
- run ```npm i```
- run ```npm run dev```
