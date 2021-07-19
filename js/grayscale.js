(function () {
    var Gray = {
        storage: 'grayState',
        cssClass: 'gray',
        currentState: null,
        check: checkGray,
        getState: getGrayState,
        setState: setGrayState,
        toogle: toogleGray,
        updateView: updateViewGray
    };

    window.toggleGray = function () { Gray.toogle(); };

    Gray.check();

    function checkGray() {
        this.updateView();
    }

    function getGrayState() {
        return localStorage.getItem(this.storage) === 'true';
    }

    function setGrayState(state) {
        localStorage.setItem(this.storage, '' + state);
        this.currentState = state;
        this.updateView();
    }

    function updateViewGray() {
        var body = document.body;

        if (this.currentState === null)
            this.currentState = this.getState();

        if (this.currentState)
            body.classList.add(this.cssClass);
        else
            body.classList.remove(this.cssClass);
    }

    function toogleGray() {
        this.setState(!this.currentState);
    }
})();