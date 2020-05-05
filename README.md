# Demystifying Machine Learning Project
By Claude David, Liz Emley and Halle Morel

# Combating Mental Health: Quarantine Package
Due to the nature of COVID-19, many people are obliged to stay home in order to flatten the curve of the virus. As a result we find ourselves socially isolating from each other which can be detrimental to our health. We decided to uplift everyone by providing a quarantine package that will ultimately uplift your mood by suggesting a few things to do while you're home and top places to travel to once you're able to travel again. 

## Movie Recommendation System
_A Web Base user-item Movie Recommendation Engine using_ _**Simple, Content Based, Collaborative Filtering, and Hybrid Recommendation Systems**_

__Simple Recommendation System__
* The Simple Recommender offers generalized recommendations to every user based on movie popularity and (sometimes) genre.
The basic idea behind this recommender is that movies that are more popular and more critically acclaimed will have a higher probability of being liked by the average audience. The only dowside to this model is that it does not give personalized recommendations based on the user.

__Content Based Recommendation System__
* This builds a recommender using movie descriptions and taglines. Since we do not have a quantitative metric to judge our machine's performance so this will have to be done qualitatively. The more taglines involved, the better the recommendation system. 

__Collaborative Filtering Recommendation System__
* Collaborative Filtering uses a matrix factorizations algorithm and is based on the underlying idea that is if two persons both liked certain common movies, then the movies that one person has liked that the other person has not yet watched can be recommended to him. 

__Hybrid Recommendation System__
* The Hybrid recommender brings together techniques we have implemented in the content based and collaborative filter based engines.


### Dataset 

* Data is taken from MovieLens
* You need to download dataset from this [link](https://drive.google.com/open?id=1G8VGjz_nP4D12lsGw48hlBQbwkm1fnUa)
* Be sure to have "input_data" folder in your repository

### Types of dataset

1. **The full dataset:** This dataset consists of 26,000,000 ratings and 750,000 tag applications applied to 45,000 movies by 270,000 users. Includes tag genome data with 12 million relevance scores across 1,100 tags.
2. **The small dataset:** This dataset comprises of 100,000 ratings and 1,300 tag applications applied to 9,000 movies by 700 users.
3. We will build a simple Recommendation for movies using **The full dataset**.


### Data description
* It contains 100004 ratings and 1296 tag applications across 9125 movies. These data were created by 671 users between January 09, 1995 and October 16, 2016. This dataset was generated on October 17, 2016.

* Users were selected at random for inclusion. All selected users had rated at least 20 movies. No demographic information is included. Each user is represented by an id, and no other information is provided.

### Dependencies
Make sure to install all of these dependencies
```
 nltk:             $ pip install nltk
 numpy:            $ pip install numpy
 scipy:            $ pip install scipy
 scikit-learn:     $ pip install -U scikit-learn
 scikit-surprise:  $ conda install -c conda-forge scikit-surprise
 Pandas:           $ pip install pandas
 matplotlib: 
                   $ apt-get install libfreetype6-dev libpng-dev
                   $ pip install matplotlib 
 seaborn:          $ pip install seaborn
 jupyter notebook: $ apt-get -y install ipython ipython-notebook
                   $ -H pip install jupyter
 jupyter lab       $ pip install jupyterlab
 textblob          $ conda install -c conda-forge textblob 
```
---------------------------------
