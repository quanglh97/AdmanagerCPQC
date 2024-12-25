export default class SearchKeywordHandler {
    config = undefined;
    construtor() {
        debugger
        chrome.storage.local.get(['config'], (result) => {
            if (result['config'] != undefined) {
                this.config = JSON.parse(result['config']);
            }
        });
    }
    addKeyword(keyWord) {

        if (this.config.searchKeyword != undefined)
            this.config.searchKeyword = (this.config.searchKeyword.trim() + '\n' + keyWord);
        else
            this.config.searchKeyword = keyWord;
            
        this.updateConfigStorage()

    }
    updateConfigStorage() {
        chrome.storage.local.set({ ['config']: JSON.stringify(this.config) }, () => {
            return true
        });
    }
}
