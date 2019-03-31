export = _;
export as namespace _;

declare const _: _.LoDashStatic;
declare namespace _ {
    interface LoDashStatic {
        [p:string]:any
    }
}


declare global {
    interface Set<T> { }
    interface Map<K, V> { }
    interface WeakSet<T> { }
    interface WeakMap<K extends object, V> { }
}

