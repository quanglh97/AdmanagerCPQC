class CONFIG {
    constructor(number_of_scroll, time_to_scroll, ban_words) {
        this.number_of_scroll = number_of_scroll
        this.time_to_scroll = time_to_scroll
        this.ban_words = ban_words
    }

    static default_config(){
        return new CONFIG(5, 2, [])
    }
    
}