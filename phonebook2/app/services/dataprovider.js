(function () {
    function DataProvider() {
        var subs = [
            {name:"Tom",tel:"012-345-6789"},
            {name:"Jerry",tel:"012-345-6789"},
            {name:"Philip",tel:"012-345-6789"}
        ];

        this.getAllSubscribers = function(){
            return subs;
        };

        this.addSubscriber = function (subObj) {
            subs.push(subObj);
        };
        this.removeSubscriber = function (index) {
            subs.splice(index,1);
            console.log(subs);
        }
    }
    phonebookApp.service("DataProvider", DataProvider);
})();
