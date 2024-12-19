type Optional<T, K extends keyof T> = Pick<Partial<T>, K> & Omit<T, K>;

declare namespace safeArrayIterator {
    export type SafeIteratorResult<T> = { __proto__: null; } & IteratorResult<T>;

    export type SafeArrayIterator<V> = Optional<
        ArrayIterator<V>,
        typeof Symbol.iterator
    > & {
        __proto__: null,
        [Symbol.iterator]?(): SafeArrayIterator<V>;
        next(): SafeIteratorResult<V>;
    };
}

declare function safeArrayIterator<V, A extends readonly V[]>(array: A): safeArrayIterator.SafeArrayIterator<V>;

export = safeArrayIterator;
