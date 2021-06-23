# HTTP-and-Forms-Studio

https://avipshausa.github.io/HTTP-and-Forms-Studio/


25.11. Studio: HTTP and Forms
25.11.1. Introduction



The search engine selector that we will build.

Most search engines work the same way. The have a single text input, and they submit data using a GET request. Additionally, many of the most popular search engines also use the same name for the search parameter, q.



Use 2-3 different search engines to search for the same term. On the results page, look at the URL. Did the search happen via GET or POST? If a GET request was made, what is the name of the parameter containing your search term?





 Create Form Inputs

Let's build out the form in index.html. We will need some data for the search engines we want to work with.
Search Engine Options Label 	Value 	Search URL
Google 	google 	https://www.google.com/search
DuckDuckGo 	duckDuckGo 	https://duckduckgo.com/
Bing 	bing 	https://www.bing.com/search
Ask 	ask 	https://www.ask.com/web

    Create a text input within the form and set its name attribute to the value "q".
    Create a radio group with one radio button for each search engine. Recall that radio buttons with the same name are grouped, so use the same value for this attribute, "engine", on each radio button.
    Create a label element for each radio button.
    Finally, add a submit button to the form and set it's value to "Go!".



