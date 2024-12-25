

class ENABLE_SWITCH {
    constructor() {
        this.msg = "ENABLE_SWITCH"
    }
}

class DISABLE_SWITCH {
    constructor() {
        this.msg = "DISABLE_SWITCH"
    }
}

class OPEN_URL {
    constructor(tab_id) {
        this.msg = "OPEN_URL"
        this.tab_id = tab_id
    }
}