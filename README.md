# phase 🌘
#### The moon is pretty *lit*. But just how lit is it?
This simple one page site visually represents the current phase of the moon. I built it to demo an introductory example of practical API use cases. [View it here](https://doerrfeldbill.github.io/phase/)

🌘🌓🌔🌕🌖🌗🌒

[![](LITNESS.png)](https://doerrfeldbill.github.io/phase/)

## About
**phase** calls the [Farmsense API](http://www.farmsense.net/api/) to display moon data. The Farmsense API is a free-to-use open API that returns useful moon phase and illumination data. After much research, it was the only free service I could find that returned the data I wanted. 

## How it Works
Given a unix timstamp, Farmsense returns information on the current moon phase, illumination percentage, and colloquial phase name. Depending on what the API returns, the script loads different images to reflect the current moon illumination.

I also added a little bit of my own scientific interpretation on how lit the moon is:

````
0% : Woah. The moon is srsly not lit.
0% - 10% : The moon is like, not lit at all.
10% - 20% : The moon is like, hardly lit.
20% - 30% : Ok yeah, the moon is barely lit.
30% - 40% : Have you seen the moon lately? It's only sorta lit.
40% - 50% : The moon's like almost halfway lit.
50% - 60% : Half dark and half lit... moon you're being so bipolar.
60% - 70% : Huh, the moon is kinda lit.
70% - 80% : The moon is pretty cool but not completely lit.
80% - 90% : Dope. The moon is like pretty lit.
90% - 100 : Dang, is that moon full? No, but it srsly lit tho.
100% : The moon is totally 100% lit.
````

## Disclaimer
This was made for fun. Code is not elegant. It's just for sample purposes. This is a personal project and not intended for commercial use.
