# near-birds
 
Birding app using the ebird api (https://documenter.getpostman.com/view/664302/S1ENwy59) and Mapbox (https://www.mapbox.com/)

Planned eBird Uses:
- GET Recent observations in a region
https://api.ebird.org/v2/data/obs/{{regionCode}}/recent
Get the list of recent observations (up to 30 days ago) of birds seen in a country, state, county, or location.

- GET Recent notable observations in a region
https://api.ebird.org/v2/data/obs/{{regionCode}}/recent/notable
Get the list of recent, notable observations (up to 30 days ago) of birds seen in a country, region or location.

Notable observations can be for locally or nationally rare species or are otherwise unusual, e.g. over-wintering birds in a species which is normally only a summer visitor.

- GET Recent nearby observations
https://api.ebird.org/v2/data/obs/geo/recent?lat={{lat}}&lng={{lng}}
Get the list of recent observations (up to 30 days ago) of birds seen at locations within a radius of up to 50 kilometers, from a given set of coordinates.

- GET Recent nearby notable observations
https://api.ebird.org/v2/data/obs/geo/recent/notable?lat={{lat}}&lng={{lng}}
Get the list of notable observations (up to 30 days ago) of birds seen at locations within a radius of up to 50 kilometers, from a given set of coordinates.

Notable observations can be for locally or nationally rare species or are otherwise unusual, for example over-wintering birds in a species which is normally only a summer visitor.

- GET Species List for a Region
https://api.ebird.org/v2/product/spplist/{{regionCode}}
Get a list of species codes ever seen in a region, in taxonomic order (species taxa only)

GETeBird Taxonomy
https://api.ebird.org/v2/ref/taxonomy/ebird
Get the taxonomy used by eBird.

