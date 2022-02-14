export function createEnumProperty(prop, val){
    Object.defineProperty(this, prop, {
        enumerable: true,
        writable: false,
        configurable: false,
        value: val
    })
}

export const days = {
    MON: 1,
    TUE: 2,
    WED: 3,
    THU: 4,
    FRI: 5,
    SAT: 6,
    SUN: 0,
}