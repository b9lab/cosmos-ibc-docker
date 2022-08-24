// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.
import B9LabCheckersB9LabCheckersCheckers from './b9lab/checkers/b9lab.checkers.checkers';
export default {
    B9LabCheckersB9LabCheckersCheckers: load(B9LabCheckersB9LabCheckersCheckers, 'b9lab.checkers.checkers'),
};
function load(mod, fullns) {
    return function init(store) {
        if (store.hasModule([fullns])) {
            throw new Error('Duplicate module name detected: ' + fullns);
        }
        else {
            store.registerModule([fullns], mod);
            store.subscribe((mutation) => {
                if (mutation.type == 'common/env/INITIALIZE_WS_COMPLETE') {
                    store.dispatch(fullns + '/init', null, {
                        root: true
                    });
                }
            });
        }
    };
}
