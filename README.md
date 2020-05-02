# promisemon <img src='https://veekun.com/dex/media/pokemon/global-link/131.png' height=50px/>

[![npm version](https://badge.fury.io/js/promisemon.svg)](https://badge.fury.io/js/promisemon)
[![npm](https://img.shields.io/badge/licence-MIT-blue)](https://github.com/7ellipsis/promisemon/blob/master/LICENSE)

Maintainers: [Ashay](https://github.com/7ellipsis)

The best and easiest way to use [Pokéapi](https://pokeapi.co/) v2 with promises in node.js

<!-- START doctoc generated TOC please keep comment here to allow auto update -->
<!-- DON'T EDIT THIS SECTION, INSTEAD RE-RUN doctoc TO UPDATE -->
**Table of Contents**

- [Install *](#install-)
- [Usage](#usage)
  - [Example requests](#example-requests)
- [Configuration](#configuration)
- [Endpoints](#endpoints)
  - [Berries](#berries)
  - [Contests](#contests)
  - [Encounters](#encounters)
  - [Evolution](#evolution)
  - [Games](#games)
  - [Items](#items)
  - [Machines](#machines)
  - [Moves](#moves)
  - [Locations](#locations)
  - [Pokemon](#pokemon)
  - [Utility](#utility)
  - [Custom URLs and paths](#custom-urls-and-paths)
- [Root Endpoints](#root-endpoints)
  - [List of supported root endpoints](#list-of-supported-root-endpoints)

<!-- END doctoc generated TOC please keep comment here to allow auto update -->

## Install [![nodeVersion](https://img.shields.io/badge/node-%3E%3D7.6-green)](https://www.npmjs.com/package/promisemon)

```sh
npm install promisemon --save
```

```sh
yarn add promisemon
```

## Usage

```js
var Pokedex = require('promisemon');
var P = new Pokedex();
```

**NOTE**:  Refer to the [pokeapi v2 docs](http://pokeapi.co/docsv2/) to find out more about how the data is structured.


```js
  P.getPokemon('eevee') // with Promise
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

## Configuration

Pass an Object to Pokedex in order to configure it. Available options: `protocol`, `hostName`, `versionPath`, `cacheLimit` in ms, `timeout` in ms.
Any option is optional :smile:. If no Object is passed, the Pokedex will be initialized to grab data from pokeapi.co using http with 20 seconds timeout and caching resources for 11 days. HTTPS is the default protocol.

```js
var Pokedex = require('promisemon');
var options = {
  protocol: 'https',
  hostName: 'localhost:443',
  versionPath: '/api/v2/',
  cacheLimit: 100 * 1000, // 100s
  timeout: 5 * 1000 // 5s
}
var P = new Pokedex(options);
```

## Endpoints

### Berries

Use **getBerry** to return data about a specific berry.
```js
  P.getBerry('cheri')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getBerryFirmness** to return data about the firmness of a specific berry.
```js
  P.getBerryFirmness('very-soft')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getBerryFlavor** to return data about the flavor of a specific berry.
```js
  P.getBerryFlavor('spicy')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

**Array** as a parameter example. It can be a mixed array.
This method fetches data asynchronously. So it is quite fast :smile:
```js
  P.getBerry(['cheri', 'chesto', 5])
    .then(function(response) {
      console.log(response);
    })
  // response will be an Array containing 3 Objects
  // response.forEach((item) => {console.log(item.size)}) // 80,50,20
```

### Contests

Use **getContestType** to return data about the effects of moves when used in contests.
```js
  P.getContestType('cool')
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getContestEffect** to return data about the effects of moves when used in contests.
```js
  P.getContestType(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getSuperContestEffect** to return data about the effects of moves when used in super contests.
```js
  P.getSuperContestType(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```
### Encounters

Use **getEncounterMethod** to return data about the conditions in which a trainer may encounter a pokemon in the wild.
```js
  P.getEncounterMethod("walk")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEncounterCondition** to return data that affects which pokemon might appear in the wild.
```js
  P.getEncounterCondition("swarm")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEncounterConditionValue** to return data the various states that an encounter condition can have.
```js
  P.getEncounterConditionValue("swarm-yes")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Evolution

Use **getEvolutionChain** to return data evolution chains.
```js
  P.getEvolutionChain(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEvolutionTrigger** to return data about triggers which cause pokemon to evolve.
```js
  P.getEvolutionTrigger("level-up")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Games

Use **getGeneration** to return data about the different generations of pokemon games.
```js
  P.getGeneration("generation-i")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokedex** to return data about specific types of pokedexes.
```js
  P.getPokedex("kanto")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getVersion** to return data about specific versions of pokemon games.
```js
  P.getVersion("red")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getVersionGroup** to return data about specific version groups of pokemon games.
```js
  P.getVersionGroup("red-blue")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Items

Use **getItem** to return data about specific items.
```js
  P.getItem("master-ball")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemAttribute** to return data about specific item attribute.
```js
  P.getItemAttribute("countable")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemCategory** to return data about specific item category.
```js
  P.getItemCategory("stat-boosts")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemFlingEffect** to return data about specific item fling effect.
```js
  P.getItemFlingEffect("badly-poison")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getItemPocket** to return data about specific pockets in a players bag.
```js
  P.getItemPocket("misc")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Machines

Use **getMachine** to return data about specific machine.
```js
  P.getMachine(2)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Moves

Use **getMove** to return data about specific pokemon move.
```js
  P.getMove("pound")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveAilment** to return data about specific pokemon move ailment.
```js
  P.getMoveAilment("paralysis")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveBattleStyle** to return data about specific pokemon move battle style.
```js
  P.getMoveBattleStyle("attack")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveCategory** to return data about specific pokemon move category.
```js
  P.getMoveCategory("ailment")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveDamageClass** to return data about specific pokemon damage class.
```js
  P.getMoveDamageClass("status")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveLearnMethod** to return data about specific pokemon learn method.
```js
  P.getMoveLearnMethod("level-up")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getMoveTarget** to return data about specific pokemon move target.
```js
  P.getMoveTarget("specific-move")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Locations

Use **getLocation** to return data about specific pokemon location.
```js
  P.getLocation("sinnoh")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getLocationArea** to return data about specific pokemon location area.
```js
  P.getLocationArea("canalave-city-area")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPalParkArea** to return data about specific pokemon pal park area.
```js
  P.getPalParkArea("forest")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getRegion** to return data about specific pokemon region.
```js
  P.getRegion("kanto")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Pokemon

Use **getAbility** to return data about specific pokemon ability.
```js
  P.getAbility("stench")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getCharacteristic** to return data about specific pokemon characteristic.
```js
  P.getCharacteristic(1)
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getEggGroup** to return data about specific pokemon egg group.
```js
  P.getEggGroup("monster")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getGender** to return data about specific pokemon gender.
```js
  P.getGender("female")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getGrowthRate** to return data about specific pokemon growth rate.
```js
  P.getGrowthRate("slow")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getNature** to return data about specific pokemon nature.
```js
  P.getNature("bold")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokeathlonStat** to return data about specific pokeathon stat.
```js
  P.getPokeathlonStat("speed")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemon** to return data about specific pokemon.
```js
  P.getPokemon("butterfree")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonColor** to return data about specific pokemon color.
```js
  P.getPokemonColor("black")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonForm** to return data about specific pokemon form.
```js
  P.getPokemonForm("wormadam-plant")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonHabitat** to return data about specific pokemon habitat.
```js
  P.getPokemonHabitat("grottes")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonShape** to return data about specific pokemon shape.
```js
  P.getPokemonShape("ball")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getPokemonSpecies** to return data about specific pokemon species.
```js
  P.getPokemonSpecies("wormadam")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getStat** to return data about specific pokemon stat.
```js
  P.getStat("attack")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

Use **getType** to return data about specific pokemon type.
```js
  P.getType("ground")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

### Utility

Use **getLanguage** to return data about specific pokemon language.
```js
  P.getLanguage("ja")
    .then(function(response) {
      console.log(response);
    })
    .catch(function(error) {
      console.log('There was an ERROR: ', error);
    });
```

## Root Endpoints

For each root endpoint we provide a method to get all the items contained by that endpoint. By default the method will return every item in the endpoint. If you want you can configure its offset and limit.

* `offset` is where to start. The first item that you will get. Default `0`
* `limit` is how many items you want to list. Default `100000`

**TIP**: Do not pass any config Object to your call, since you will get every item and everything will be cached to your RAM.

This call will get the list of pokemon between ID 34 and ID 44 

```js
  var interval = {
    limit: 10,
    offset: 34
  }
  P.getPokemonsList(interval)
    .then(function(response) {
      console.log(response);
    })
```

This is what you will get:

```json
{
  "count": 811,
  "next":  "https://pokeapi.co:443/api/v2/pokemon/?limit=11&offset=44",
  "previous": "https://pokeapi.co:443/api/v2/pokemon/?limit=11&offset=22",
  "results": [
    { 
      "url": "https://pokeapi.co:443/api/v2/pokemon/34/",
      "name": "nidoking" 
    },
    { 
      "url": "https://pokeapi.co:443/api/v2/pokemon/35/",
      "name": "clefairy"
    },
    {
      "url": "...",
      "name": "..."
    },
    { 
      "url": "https://pokeapi.co:443/api/v2/pokemon/44/",
      "name": "gloom"
    }
  ]
}
```

### List of supported root endpoints

* .getEndpointsList()
* .getBerriesList()
* .getBerriesFirmnesssList()
* .getBerriesFlavorsList()
* .getContestTypesList()
* .getContestEffectsList()
* .getSuperContestEffectsList()
* .getEncounterMethodsList()
* .getEncounterConditionsList()
* .getEncounterConditionValuesList()
* .getEvolutionChainsList()
* .getEvolutionTriggersList()
* .getGenerationsList()
* .getPokedexsList()
* .getVersionsList()
* .getVersionGroupsList()
* .getItemsList()
* .getItemAttributesList()
* .getItemCategoriesList()
* .getItemFlingEffectsList()
* .getItemPocketsList()
* .getMachinesList()
* .getMovesList()
* .getMoveAilmentsList()
* .getMoveBattleStylesList()
* .getMoveCategoriesList()
* .getMoveDamageClassesList()
* .getMoveLearnMethodsList()
* .getMoveTar()
* .getsList()
* .getLocationsList()
* .getLocationAreasList()
* .getPalParkAreasList()
* .getRegionsList()
* .getAbilitiesList()
* .getCharacteristicsList()
* .getEggGroupsList()
* .getGendersList()
* .getGrowthRatesList()
* .getNaturesList()
* .getPokeathlonStatsList()
* .getPokemonsList()
* .getPokemonColorsList()
* .getPokemonFormsList()
* .getPokemonHabitatsList()
* .getPokemonShapesList()
* .getPokemonSpeciesList()
* .getStatsList()
* .getTypesList()
* .getLanguagesList()
