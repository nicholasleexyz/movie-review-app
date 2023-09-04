Review lists will toggle based on the movie index

- App <!-- Get data movie data in App then pass it down -->
  - MovieList (movie data) <!-- Movie component for each movie in data -->
    - Movie (image, synopsis, rating)
    - Movie...
  - ReviewSubmissionForm (movie data) <!-- ReviewList for each movie in data -->
    - ReviewList 
      - Review
        - Stars
      - Review...
        - Stars
    - ReviewList 
      - Review
        - Stars
      - Review...
        - Stars

layout
<>
  <!-- banner like movie selection -->
  [ movie list]
</>

<> row/column depending on resolution
  <> column
    [ movie content ]
    [ review form ]
  </> column
  [ review content ]
</>
