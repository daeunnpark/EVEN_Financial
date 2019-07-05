# Github Repository Search

git-repo-search is built using Reactjs with the following endpoint: https://developer.github.com/v3/search/#search-repositories.

# How to Run
After cloning or downloading the repository,  type  `npm start` in the root of the repository.
Deployed version is avaliable [here](https://master.ddk5dc1u1akz7.amplifyapp.com/)

## User Inputs
User input checking is as follows:

Text (`SEARCH_KEYWORD` in query string) - Non empty string

Stars (`N`  in query string)
Allowed formats are: 
number
\>= number
<= number
\>number
<number

License - By default MIT (`LICENSENAME` in query string)
NB: MIT, ISC, Apache (apache-2.0) and GPL (GNU General Public License family)

Fork - By default unchecked (`BOOLEAN` in query string)


## Query String
Accepted query string is in the following format: 
q = `SEARCH_KEYWORD+stars:N+license:LICENSENAME+fork:BOOLEAN`

Accepted examples: `base_url/?even+stars:>=100+license:mit+fork:true`
                                    `base_url/?financial+stars:<50+license:isc+fork:true`

