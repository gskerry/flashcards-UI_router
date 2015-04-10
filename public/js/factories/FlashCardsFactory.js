app.factory('FlashCardsFactory', function ($http) {

    return {

        getFlashCards: function (category) {

            var queryParams = {};

            if (category) {
                queryParams.category = category;
            }

            return $http.get('/cards', {
                params: queryParams
            }).then(function (response) {
                return response.data;
            });

        },

/*         getCategoryCards: function (category) {
                chosenCategory = category || 'All';
                loading = true;
                failed = false;
                this.getFlashCards(category).then(function (cards) {
                    loading = false;
                    flashCards = cards;
                }).catch(function(err){
                    loading = false;
                    error = err;
                });
            },*/ 

        addFlashCard: function (cardToAdd) {

            return $http.post('/cards', cardToAdd).then(function (response) {
                return response.data;
            });

        }

    };

});
