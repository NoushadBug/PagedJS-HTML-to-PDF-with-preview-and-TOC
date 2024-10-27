import { Handler, registerHandlers } from './paged.esm.js';

class myHandler extends Handler {
    constructor(chunker, polisher, caller) {
        super(chunker, polisher, caller);
    }

    afterRendered() {
        createToc({
            content: document.body,
            tocElement: '#toc',
            titleElements: ['h2']
        });
    }
}

registerHandlers(myHandler);
