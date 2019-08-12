# Github Repository Search

 `git-repo-search` is built using ReactJS with the following endpoint: https://developer.github.com/v3/search/#search-repositories.

# How to Run
After cloning or downloading the repository,  type  `npm start` in the root of the repository.
Deployed version is avaliable [here](https://master.ddk5dc1u1akz7.amplifyapp.com/).

## User Inputs
User input checking is as follows:

### Text (`SEARCH_KEYWORD` in query string)
- Non empty string

### Stars (`N`  in query string)  
Allowed formats are:   
- number  
- \>= number  
- <= number  
- \>number   
- <number  

### License - By default MIT (`LICENSENAME` in query string)
- MIT
- ISC
- Apache (apache-2.0)
- GPL (GNU General Public License family)

### Fork - By default unchecked (`BOOLEAN` in query string)


## Query String
Accepted query string is in the following format:
q = `SEARCH_KEYWORD+stars:N+license:LICENSENAME+fork:BOOLEAN`

Accepted examples:
- `base_url/?even+stars:>=100+license:mit+fork:true`
- `base_url/?financial+stars:<50+license:isc+fork:true`

# Libraries/Frameworks
The following libraries/frameworks were used:
- Bootstrap (for input fields, button layout)
- axios (for HTTP request)
- react-super-responsive-table (for layout change between table and row)


# Demo Screenshots
![Search Engine 1 - Desktop](https://user-images.githubusercontent.com/30763506/62888360-1d946600-bd0d-11e9-9788-4ff241fca648.png)
![Search Engine 2 - Desktop](https://user-images.githubusercontent.com/30763506/62888361-1d946600-bd0d-11e9-8a29-c10c6717a9ca.png)
![Search Results - Desktop](https://user-images.githubusercontent.com/30763506/62888362-1d946600-bd0d-11e9-8e37-a645ea060035.png)
![Search Engine - Mobile](https://user-images.githubusercontent.com/30763506/62888363-1d946600-bd0d-11e9-8bd8-9f25e5aa1397.png)
![Search Results - Mobile](https://user-images.githubusercontent.com/30763506/62888364-1d946600-bd0d-11e9-99c2-6dc13e3fe332.png)
